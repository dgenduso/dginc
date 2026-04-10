import styles from "./LandingDeliver.module.css";

const tracks = [
  {
    label: "Your track",
    heading: "The offering cycle keeps running.",
    body: "Your teams continue building, shipping, and improving your products and services. Nothing stops. The business keeps moving.",
  },
  {
    label: "Our track",
    heading: "We improve the OS alongside you.",
    body: "We implement changes to how your organization operates — one cycle at a time. Each OS cycle improves the inputs, the learning, and the outputs of your next offering cycle.",
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
          We run alongside your team — not instead of them. The transformation
          happens without stopping the business.
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
