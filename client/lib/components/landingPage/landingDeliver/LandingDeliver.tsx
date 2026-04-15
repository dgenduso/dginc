import styles from "./LandingDeliver.module.css";

const tracks = [
  {
    label: "Your track",
    heading: "The offering cycle keeps running.",
    body: "Your teams continue building, shipping, and improving your products and services. Nothing stops. The business keeps moving.",
  },
  {
    label: "Our track",
    heading: "We treat your operating system as a product.",
    body: "We lead the work of transforming how your organization innovates — across people, process, policy, and tools. We prioritize what changes each cycle, run the transformation work, and integrate it alongside your delivery teams. The OS evolves continuously, just as your offerings do.",
  },
];

const customerOutcomes = [
  "Increased trust",
  "Higher satisfaction",
  "Reduced churn",
];

const orgOutcomes = [
  "Increased revenue and value",
  "Less employee burnout",
  "Higher ROI on AI investments",
  "Continuous organizational growth",
];

export default function LandingDeliver() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>How we deliver</p>
        <h2 className={styles.heading}>Two tracks. One transformation.</h2>
        <p className={styles.body}>
          Most operating model changes happen once and then calcify. A reorg
          that shuffles the structure but doesn't change how work gets done. A
          new process that requires months of training and gets quietly abandoned.
          We take a different approach — evolving the operating system the same
          way great teams build products: incrementally, continuously, in the
          same rhythm as the work itself. Less disruption. More traction.
        </p>

        <div className={styles.tracks}>
          {tracks.map((track) => (
            <div key={track.label} className={styles.track}>
              <p className={styles.trackLabel}>{track.label}</p>
              <h3 className={styles.trackHeading}>{track.heading}</h3>
              <p className={styles.trackBody}>{track.body}</p>
            </div>
          ))}
        </div>

        <p className={styles.close}>
          Over time the learning loop takes hold. Humans understand customers
          more deeply. AI works from richer information. Outputs improve. Growth
          follows. The organization stops hitting the ceiling — and keeps
          climbing.
        </p>

        <p className={styles.outcomesLabel}>What this unlocks</p>
        <div className={styles.outcomeGroups}>
          <div className={styles.outcomeGroup}>
            <p className={styles.outcomeGroupLabel}>For customers</p>
            <ul className={styles.outcomeList}>
              {customerOutcomes.map((item) => (
                <li key={item} className={styles.outcomeItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.outcomeGroup}>
            <p className={styles.outcomeGroupLabel}>For the organization</p>
            <ul className={styles.outcomeList}>
              {orgOutcomes.map((item) => (
                <li key={item} className={styles.outcomeItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
