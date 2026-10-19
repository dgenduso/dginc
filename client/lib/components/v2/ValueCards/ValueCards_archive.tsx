import styles from "./ValueCards.module.css";

const cards = [
  {
    label: "Fractional CAIO",
    body: "I step in as your Chief AI & Innovation Officer — without the full-time cost or big-firm overhead. My engagement is fractional as a person: I focus on strategy, alignment, and the high-judgment decisions that require a human leader.",
    accent: "var(--dim-product)",
  },
  {
    label: "AI-Native",
    body: "My company is the thing I help yours become. We operate as an AI-native platform — agents, process, and policy built into the product. When you engage me, your organization gets set up on that platform and the engagement runs through it.",
    accent: "var(--dim-process)",
  },
  {
    label: "Forward Deployed",
    body: "While my engagement is fractional, my agents are always on. They deploy inside your organization — conducting interviews, gathering inputs, following up with your team — fitting into the schedules of employees across your org, including globally.",
    accent: "var(--dim-policy)",
  },
];

export default function ValueCards() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {cards.map((c) => (
            <div
              key={c.label}
              className={styles.card}
              style={{ "--accent": c.accent } as React.CSSProperties}
            >
              <p className={styles.label}>{c.label}</p>
              <p className={styles.body}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
