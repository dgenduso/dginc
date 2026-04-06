import styles from "./LandingRootCause.module.css";

export default function LandingRootCause() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.cause}>
          <p className={styles.label}>The root cause</p>
          <h2 className={styles.heading}>
            Most organizations are built as systems of work.
          </h2>
          <p className={styles.body}>
            They are optimized to process and execute. Requests come in, work
            goes out. The machine runs well. But it does not learn.
          </p>
          <p className={styles.body}>
            When an organization is not structured to learn from the people it
            serves, it makes decisions based on assumptions. It repeats
            mistakes. It delivers work that misses the mark — not because of
            poor execution, but because of poor understanding.
          </p>
        </div>

        <div className={styles.shift}>
          <p className={styles.label}>The shift</p>
          <p className={styles.shiftStatement}>
            From an organization of workers<br />
            to an organization of learners.
          </p>
          <p className={styles.body}>
            Work still matters. But work becomes part of the learning process.
            Learning drives improvement. Work applies learning, tests it, and
            generates more of it.
          </p>
          <p className={styles.body}>
            Organizations that learn continuously improve continuously.
          </p>
        </div>
      </div>
    </section>
  );
}
