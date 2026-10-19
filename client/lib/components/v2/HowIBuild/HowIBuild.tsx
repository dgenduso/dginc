"use client";

import styles from "./HowIBuild.module.css";

const cards = [
  {
    number: "01",
    name: "Learn continuously",
    body: "Build a deeper, shared understanding of customers and their needs.",
    accent: "var(--dim-policy)",
    accentBg: "var(--dim-policy-bg)",
  },
  {
    number: "02",
    name: "Solve the right problems",
    body: "Diagnose root causes across organizational capabilities, not just products.",
    accent: "var(--dim-people)",
    accentBg: "var(--dim-people-bg)",
  },
  {
    number: "03",
    name: "Work across functions",
    body: "Bring together the people and agents needed to design coordinated changes.",
    accent: "var(--dim-product)",
    accentBg: "var(--dim-product-bg)",
  },
  {
    number: "04",
    name: "Improve continuously",
    body: "Deliver solutions, evaluate outcomes, and apply learning to what happens next.",
    accent: "var(--dim-process)",
    accentBg: "var(--dim-process-bg)",
  },
];

export default function HowIBuild() {
  return (
    <section id="opportunity" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.distinction}>
          <p className={styles.label}>The Opportunity</p>
          <h2 className={styles.heading}>
            Transform how your organization innovates.
          </h2>
          <p className={styles.body}>
            Start with the customer: what they are trying to accomplish, the
            experience they have today, and the outcomes they want to achieve.
            From there, identify what prevents better outcomes and redesign the
            capabilities needed to deliver them.
          </p>
        </div>

        <div className={styles.levels}>
          {cards.map((card) => (
            <div
              key={card.number}
              className={styles.level}
              style={{ "--accent": card.accent, "--accent-bg": card.accentBg } as React.CSSProperties}
            >
              <div className={styles.levelLeft}>
                <span className={styles.levelNumber}>{card.number}</span>
              </div>
              <div className={styles.levelRight}>
                <h3 className={styles.levelName}>{card.name}</h3>
                <p className={styles.levelBody}>{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
