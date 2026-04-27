import styles from "./LandingMisdiagnosis.module.css";

export default function LandingMisdiagnosis() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>The misdiagnosis</p>
        <h2 className={styles.heading}>
          The delivery problem is treated as a delivery phase problem.
          It isn&apos;t.
        </h2>
        <p className={styles.body}>
          Delivery has received enormous investment over the years — from
          digital transformation initiatives to agile adoption to the latest
          wave of AI tooling. At most organizations, delivery capability is
          genuinely mature. The processes are in place. The teams are capable.
          The tooling is sophisticated.
        </p>
        <p className={styles.body}>
          And yet the delivery problem persists. Because delivery is one
          capability within a larger innovation system — and the problem almost
          never originates there. It originates in the capabilities before it.
        </p>

        <div className={styles.signal}>
          <p className={styles.signalLabel}>The signal worth paying attention to</p>
          <p className={styles.signalBody}>
            When continued investment in delivery doesn&apos;t fix the delivery
            problem, it is a signal that the cause is upstream. A mature
            innovation capability surfaces where investment actually needs to
            go. When organizations keep pointing resources at delivery and the
            same problems persist, it reveals that the capability to identify
            and act on the real cause hasn&apos;t been built yet. The
            misdiagnosis is a diagnostic finding in its own right.
          </p>
        </div>

        <p className={styles.subheading}>What the misdiagnosis produces in practice</p>

        <div className={styles.outcomes}>
          <div className={styles.outcome}>
            <p className={styles.outcomeTag}>The response</p>
            <h3 className={styles.outcomeHeading}>More investment in delivery capability.</h3>
            <p className={styles.outcomeBody}>
              More project managers. Smaller stories. Tighter sprints. AI added
              to accelerate output. Each addition addresses where the symptom is
              visible — the delivery phase — without touching the upstream
              capabilities that determine what delivery receives. Delivery gets
              more efficient at processing unclear, poorly defined work. The
              output increases. The value of that output does not.
            </p>
          </div>
          <div className={styles.outcome}>
            <p className={styles.outcomeTag}>The result</p>
            <h3 className={styles.outcomeHeading}>More of the wrong thing, faster.</h3>
            <p className={styles.outcomeBody}>
              When AI is added to an unclear process, it accelerates the
              delivery of the wrong thing. When resources are added to delivery
              without fixing what feeds it, costs grow and outcomes don&apos;t
              improve. The return on continued delivery investment is
              diminishing. The capability is already mature. Adding to the
              strongest link in the chain doesn&apos;t fix the weak ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
