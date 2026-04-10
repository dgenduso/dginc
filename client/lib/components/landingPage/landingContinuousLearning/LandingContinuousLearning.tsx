import styles from "./LandingContinuousLearning.module.css";

const items = [
  "Validating assumptions as solutions take shape",
  "Refining based on real customer response — not internal opinion",
  "Increasing precision before release so nothing ships blind",
];

export default function LandingContinuousLearning() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>The difference</p>
        <h2 className={styles.heading}>
          Learning doesn&apos;t stop after discovery.
        </h2>
        <p className={styles.body}>
          Most teams gather customer input at the start — then disconnect. By
          the time something gets built and delivered, the original
          understanding is weeks or months old. Assumptions have drifted. The
          customer has moved on.
        </p>
        <p className={styles.body}>
          We help organizations stay connected to the customer throughout the
          entire process:
        </p>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
        <p className={styles.close}>
          So when you deliver, you&apos;re not guessing. You know it works.
        </p>
      </div>
    </section>
  );
}
