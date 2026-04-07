import styles from "./LandingOutcome.module.css";

const outcomes = [
  "Residents see problems actually getting solved — not faster responses, but the things that kept happening to them stopping.",
  "Repeat service demand declines as underlying causes get resolved — the expensive cycle of symptom management begins to wind down.",
  "Budget pressure eases — not through cuts, but through retiring the work that kept being required because nothing was being solved.",
  "Trust begins to rebuild — not through communication strategies, but through visible, felt progress in the resident experience.",
  "The capability compounds — every problem solved makes the next one faster, every diagnosis sharpens the next.",
];

export default function LandingOutcome() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>The outcome</p>
        <h2 className={styles.heading}>Problems start going away.</h2>
        <p className={styles.body}>
          For the first time, residents experience something different — not a
          faster response to the same recurring problem, but the problem
          actually stopping. That shift is felt before it is measured. And once
          residents feel it, trust begins to move.
        </p>
        <ul className={styles.list}>
          {outcomes.map((outcome) => (
            <li key={outcome} className={styles.item}>
              {outcome}
            </li>
          ))}
        </ul>
        <p className={styles.close}>
          The organization shifts from measuring activity to measuring progress.
          And the system keeps improving — because that is what it was built to do.
        </p>
      </div>
    </section>
  );
}
