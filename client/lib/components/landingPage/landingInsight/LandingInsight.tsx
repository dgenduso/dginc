import styles from "./LandingInsight.module.css";

const bullets = [
  "Where the learning loop breaks down",
  "Where inputs are shallow or assumptions are filling gaps",
  "Where identity, structure, and systems are getting in the way",
  "Where the highest-leverage changes will unlock the most growth",
];

export default function LandingInsight() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Where we begin</p>
        <h2 className={styles.heading}>Define what needs to change.</h2>
        <p className={styles.body}>
          Before designing anything, we conduct an assessment of your current
          innovation process and the learning loop that powers it. We look at
          how customer understanding flows into your organization, how it moves
          through your teams, and how it connects to the work that produces
          your offerings.
        </p>
        <p className={styles.body}>What we identify and prioritize:</p>

        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b} className={styles.bullet}>
              {b}
            </li>
          ))}
        </ul>

        <p className={styles.close}>
          The result is a clear picture of where you are, what needs to change,
          and where to begin. That becomes the foundation for everything we
          design and build together.
        </p>

        <p className={styles.keyLine}>
          To break through, you don&apos;t need more activity. You need deeper
          understanding.
        </p>
      </div>
    </section>
  );
}
