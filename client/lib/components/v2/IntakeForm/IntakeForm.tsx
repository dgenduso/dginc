"use client";

import { useState } from "react";
import styles from "./IntakeForm.module.css";

interface IntakeFormProps {
  onSuccess?: (chatId: string, personId: string) => void;
}

export default function IntakeForm({ onSuccess }: IntakeFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          query: `
            mutation RequestChat($input: ChatRequestInput!) {
              requestChat(input: $input) {
                chatId
                personId
              }
            }
          `,
          variables: {
            input: {
              name,
              email,
              phone: phone || undefined,
              companyName: companyName || undefined,
              jobTitle: jobTitle || undefined,
            },
          },
        }),
      });

      const { data, errors } = await res.json();

      if (errors?.length) {
        setError(errors[0].message);
        return;
      }

      onSuccess?.(data.requestChat.chatId, data.requestChat.personId);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <label className={styles.label}>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            placeholder="Your name"
            required
          />
        </label>
        <label className={styles.label}>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="you@company.com"
            required
          />
        </label>
      </div>

      <div className={styles.row}>
        <label className={styles.label}>
          Company
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className={styles.input}
            placeholder="Your organization"
          />
        </label>
        <label className={styles.label}>
          Role
          <input
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            className={styles.input}
            placeholder="Your title"
          />
        </label>
      </div>

      <label className={styles.label}>
        Phone <span className={styles.optional}>(optional)</span>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={styles.input}
          placeholder="+1 (555) 000-0000"
        />
      </label>

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? "Starting…" : "Start conversation →"}
      </button>
    </form>
  );
}
