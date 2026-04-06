import styles from "./InsightsHero.module.css";

export default function InsightsHero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Insights</p>
        <h1 className={styles.heading}>Ideas worth sitting with.</h1>
        <p className={styles.subhead}>
          Thinking on organizational learning, service and trust, government
          transformation, and what it takes to build an organization that
          continuously improves how it serves people.
        </p>
      </div>
    </section>
  );
}
