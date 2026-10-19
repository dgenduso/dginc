"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./activate.module.css";

function ActivateForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) setError("Invalid or missing activation link.");
  }, [token]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          query: `
            mutation ActivateAccount($input: ActivateAccountInput!) {
              activateAccount(input: $input) {
                user { id email }
                errors { field message }
              }
            }
          `,
          variables: { input: { token, password } },
        }),
      });

      const { data } = await res.json();
      const result = data?.activateAccount;

      if (result?.errors?.length) {
        setError(result.errors[0].message);
        return;
      }

      router.push("/");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Activate your account</h1>
        <p className={styles.subheading}>Set a password to complete your account setup.</p>

        {error && <p className={styles.error}>{error}</p>}

        {token && !error && (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="At least 8 characters"
                required
                autoFocus
              />
            </label>
            <label className={styles.label}>
              Confirm password
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className={styles.input}
                placeholder="Repeat your password"
                required
              />
            </label>
            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? "Activating…" : "Activate account"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ActivatePage() {
  return (
    <Suspense>
      <ActivateForm />
    </Suspense>
  );
}
