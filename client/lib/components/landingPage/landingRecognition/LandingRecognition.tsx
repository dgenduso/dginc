import styles from "./LandingRecognition.module.css";

export default function LandingRecognition() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.recognize}>
          <p className={styles.label}>Sound familiar?</p>
          <ul className={styles.list}>
            <li>The same meetings happen every week.</li>
            <li>The same problems come up again.</li>
            <li>Status updates replace real progress.</li>
            <li>Teams stay misaligned despite good intentions.</li>
            <li>There is a lot of work. There is limited improvement.</li>
          </ul>
        </div>

        <div className={styles.reframe}>
          <p className={styles.label}>Here&apos;s the reframe.</p>
          <p className={styles.body}>
            This is not just a delivery problem. It is not fixed by better
            project management or more process.
          </p>
          <p className={styles.body}>
            It is an understanding problem. And it is a learning problem.
          </p>
          <p className={styles.body}>
            Organizations repeat work and conversations because they are not
            structured to learn from the people they serve — and continuously
            improve how they serve them.
          </p>
        </div>
      </div>
    </section>
  );
}
