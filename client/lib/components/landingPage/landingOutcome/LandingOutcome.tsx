import styles from "./LandingOutcome.module.css";

const changes = [
  "Customers feel genuinely understood — conversations shift from transactional to meaningful",
  "Solutions hit the mark and get adopted — less friction, less rework, less 'we built the wrong thing'",
  "Teams work in alignment — shared understanding replaces assumptions and silos",
];

const results = [
  "Trust increases — customers believe you understand and will consistently deliver",
  "Churn declines — customers stay because they're getting what they actually need",
  "Revenue grows — retention, expansion, and referrals compound",
  "Customer satisfaction increases — not as a metric chased, but as a natural outcome",
  "Organizational value increases — the learning engine is itself a competitive advantage",
];

export default function LandingOutcome() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>The outcome</p>
          <h2 className={styles.heading}>The engine starts compounding.</h2>
        </div>

        <div className={styles.blocks}>
          <div className={styles.block}>
            <p className={styles.blockLabel}>What changes</p>
            <ul className={styles.list}>
              {changes.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.block}>
            <p className={styles.blockLabel}>What results</p>
            <ul className={styles.list}>
              {results.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.close}>
          The organization stops optimizing the old engine and starts running a
          new one. And because it&apos;s built on learning, it keeps getting
          better at everything it does.
        </p>
      </div>
    </section>
  );
}
