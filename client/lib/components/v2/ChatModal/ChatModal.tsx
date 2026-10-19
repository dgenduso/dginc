"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import IntakeForm from "@/lib/components/v2/IntakeForm/IntakeForm";
import styles from "./ChatModal.module.css";

interface Message {
  id: string;
  body: string;
  author: { id: string };
  createdAt: string;
}

interface ChatModalProps {
  onClose: () => void;
}

export default function ChatModal({ onClose }: ChatModalProps) {
  const [mounted, setMounted] = useState(false);
  const [chatId, setChatId] = useState<string | null>(null);
  const [personId, setPersonId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setMounted(true);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [onClose]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function fetchMessages(cId: string, pId: string) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          query: `
            query ChatMessages($chatId: String!, $partyId: String!) {
              chatMessages(chatId: $chatId, partyId: $partyId) {
                id
                body
                createdAt
                author { id }
              }
            }
          `,
          variables: { chatId: cId, partyId: pId },
        }),
      });
      const { data } = await res.json();
      if (data?.chatMessages) setMessages(data.chatMessages);
    } catch {
      // silently ignore poll errors
    }
  }

  function handleIntakeSuccess(newChatId: string, newPersonId: string) {
    setChatId(newChatId);
    setPersonId(newPersonId);

    // Start polling every 3 seconds
    fetchMessages(newChatId, newPersonId);
    pollRef.current = setInterval(() => {
      fetchMessages(newChatId, newPersonId);
    }, 3000);
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!messageInput.trim() || !chatId || !personId) return;

    setSending(true);
    const body = messageInput.trim();
    setMessageInput("");

    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          query: `
            mutation SendMessage($chatId: String!, $partyId: String!, $body: String!) {
              sendMessage(chatId: $chatId, partyId: $partyId, body: $body)
            }
          `,
          variables: { chatId, partyId: personId, body },
        }),
      });
      await fetchMessages(chatId, personId);
    } catch {
      // restore input if send failed
      setMessageInput(body);
    } finally {
      setSending(false);
    }
  }

  if (!mounted) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            {chatId ? (
              <>
                <span className={styles.headerTitle}>Chat with Dan</span>
                <span className={styles.headerStatus}>
                  <span className={styles.statusDot} />
                  Assistant connected
                </span>
              </>
            ) : (
              <>
                <span className={styles.headerTitle}>Let&apos;s talk</span>
                <span className={styles.headerSubtitle}>Tell us a bit about yourself to get started</span>
              </>
            )}
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>
        </div>

        {!chatId ? (
          <div className={styles.formWrap}>
            <IntakeForm onSuccess={handleIntakeSuccess} />
          </div>
        ) : (
          <div className={styles.chatWrap}>
            <div className={styles.messages}>
              {messages.length === 0 && (
                <div className={styles.waiting}>
                  <span className={styles.waitingDot} />
                  <span className={styles.waitingDot} />
                  <span className={styles.waitingDot} />
                </div>
              )}
              {messages.map((msg) => {
                const isMe = msg.author.id === personId;
                return (
                  <div
                    key={msg.id}
                    className={`${styles.message} ${isMe ? styles.messageMe : styles.messageThem}`}
                  >
                    <p className={styles.messageBody}>{msg.body}</p>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSend} className={styles.inputRow}>
              <input
                type="text"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className={styles.messageInput}
                placeholder="Type a message…"
                autoFocus
                disabled={sending}
              />
              <button
                type="submit"
                className={styles.sendButton}
                disabled={sending || !messageInput.trim()}
              >
                Send
              </button>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
