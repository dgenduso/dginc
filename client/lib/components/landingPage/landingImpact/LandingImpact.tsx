import styles from "./LandingImpact.module.css";

const outcomes = [
  "Better alignment across teams and leadership",
  "Decisions grounded in real needs, not assumptions",
  "Stronger trust with the people you serve",
  "Continuous improvement, not one-time initiatives",
  "More meaningful outcomes over time",
];

export default function LandingImpact() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.outcomes}>
          <p className={styles.label}>What changes</p>
          <h2 className={styles.heading}>
            Organizations that learn continuously improve continuously.
          </h2>
          <ul className={styles.list}>
            {outcomes.map((outcome) => (
              <li key={outcome} className={styles.item}>
                {outcome}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.government}>
          <p className={styles.label}>First sector focus</p>
          <h3 className={styles.subheading}>City Government</h3>
          <p className={styles.body}>
            This pattern exists across many organizations. It is especially
            visible in city government.
          </p>
          <p className={styles.body}>
            Government has historically struggled to learn from large resident
            populations at scale. Engagement has been sparse, feedback slow,
            and decisions largely top-down.
          </p>
          <p className={styles.body}>
            New forms of digital engagement and AI are changing that. City
            governments now have the opportunity to understand residents more
            deeply than ever before — and to continuously improve how they
            serve them.
          </p>

        </div>
      </div>
    </section>
  );
}
