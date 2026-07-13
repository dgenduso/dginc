"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./OpportunityModal.module.css";

interface OpportunityModalProps {
  onClose: () => void;
}

export default function OpportunityModal({ onClose }: OpportunityModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.content}>
          <p className={styles.label}>The full picture</p>
          <h2 className={styles.heading}>Why this shift is different from the ones before it.</h2>

          <p className={styles.body}>
            When the internet emerged, organizations didn&apos;t replace themselves — they added to themselves. IT departments grew. Product teams were built. Digital transformation offices were created to bridge the gap between the business and its digital presence. The org design bifurcated: the core business on one side, the digital team on the other, coordinating across a gap that never fully closed.
          </p>
          <p className={styles.body}>
            Mobile did the same thing. New teams formed — mobile engineers, app designers, cross-platform coordinators — layered on top of the web teams that were already layered on top of the core business. Each shift added a new structure without changing the underlying one. The organization grew more complex with every wave.
          </p>
          <p className={styles.body}>
            AI is a different kind of shift. It doesn&apos;t add a new team or a new interface. It requires rethinking what the organization is — how it&apos;s designed, how people work within it, what they focus on, and what the organization itself is for.
          </p>

          <h3 className={styles.subheading}>From pushing to pulling</h3>
          <p className={styles.body}>
            Most organizations are designed around pushing. Selling. Broadcasting. Executing against a plan. The information that comes back from customers — the signals that would tell you what to build next, what&apos;s not working, what people actually need — gets lost. It disappears into conversations that never get recorded, CRM notes that never get read, feedback loops that never close.
          </p>
          <p className={styles.body}>
            An AI-native organization is designed around the opposite: pulling. Learning from customers continuously. Getting information into the system in a form that agents can actually use. Building the relationship between the organization and the people it serves into the product itself — so that every interaction generates intelligence, and that intelligence drives what gets built next.
          </p>
          <p className={styles.body}>
            That&apos;s a fundamentally different organizational purpose. Not just more efficient operations — a different relationship with the people you serve, made possible by building the organization around learning rather than broadcasting.
          </p>

          <h3 className={styles.subheading}>What changes internally</h3>
          <p className={styles.body}>
            The complex tangle of SaaS tools employees navigate every day — each with its own interface, its own data model, its own way of doing things — gets redesigned into something coherent: an operating system where agents hold roles, process and policy are built in, and people focus on what requires human judgment. Coordination overhead drops. The organization becomes capable of continuously evolving what it delivers, rather than executing against a fixed plan until the next transformation project begins.
          </p>
          <p className={styles.body}>
            That internal transformation is what makes the external experience improve — not as a one-time initiative, but continuously, as a byproduct of how the organization is built.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
