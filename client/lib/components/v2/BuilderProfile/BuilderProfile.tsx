import styles from "./BuilderProfile.module.css";

const features = [
  {
    label: "0→1",
    body: "I walk into ambiguity and build. From no team, no process, no product to something operational that people can use, own, and grow.",
    accent: "var(--dim-product)",
  },
  {
    label: "Operator",
    body: "I operate across the full organization, not just one function. I work up and down the org chart, from executive strategy to the work itself, with enough depth across product, marketing, operations, finance, and sales to jump in and build anywhere.",
    accent: "var(--dim-process)",
  },
  {
    label: "AI-Native",
    body: "AI makes one person with the right depth function like a full team. I've built that into how I work every day, not as a shortcut but as a force multiplier across every layer.",
    accent: "var(--dim-policy)",
  },
  {
    label: "Embedded",
    body: "I work inside the problem, not from the outside. In the meetings, in the tools, in the decisions, until the system runs without me.",
    accent: "var(--dim-people)",
  },
];

export default function BuilderProfile() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {features.map((f) => (
            <div
              key={f.label}
              className={styles.card}
              style={{ "--accent": f.accent } as React.CSSProperties}
            >
              <p className={styles.label}>{f.label}</p>
              <p className={styles.body}>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
