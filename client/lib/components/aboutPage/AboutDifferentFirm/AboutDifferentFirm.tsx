import styles from "./AboutDifferentFirm.module.css";

const workAreas = [
  "Transformation consulting",
  "Operating model design",
  "Engagement and experience design",
  "Systems that support continuous learning and improvement",
];

export default function AboutDifferentFirm() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>A different kind of firm</p>
        <h2 className={styles.heading}>
          Built around how organizations learn and evolve — not around
          isolated functions or point solutions.
        </h2>
        <div className={styles.content}>
          <div className={styles.left}>
            <p className={styles.body}>
              Traditional consulting often works on a single capability — a
              process here, a tool there. The parts improve. The whole does not.
            </p>
            <p className={styles.body}>
              This firm focuses on the end-to-end learning loop that drives how
              organizations understand, align, evolve, and innovate. The work
              spans the full system, because that is where lasting change
              happens.
            </p>
          </div>
          <div className={styles.right}>
            <p className={styles.listLabel}>The work may include:</p>
            <ul className={styles.list}>
              {workAreas.map((area) => (
                <li key={area} className={styles.item}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
