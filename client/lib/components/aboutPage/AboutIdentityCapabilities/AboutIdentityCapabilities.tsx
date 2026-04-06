import styles from "./AboutIdentityCapabilities.module.css";

const capabilities = [
  {
    name: "People",
    description:
      "The humans and AI agents who do the work of learning and serving. The workforce evolves to include both.",
  },
  {
    name: "Process",
    description:
      "How the organization operates — redesigned to move learning through it rather than around it.",
  },
  {
    name: "Policy",
    description:
      "The rules and principles that guide decisions — updated to reflect a learning-first orientation.",
  },
  {
    name: "Product",
    description:
      "Internal and external systems that support learning, service, and continuous improvement.",
  },
];

export default function AboutIdentityCapabilities() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.identity}>
          <p className={styles.label}>Where transformation starts</p>
          <h2 className={styles.heading}>Identity drives everything.</h2>
          <p className={styles.body}>
            The shift does not start with a new tool or a new process. It starts
            with a different understanding of who the organization is.
          </p>
          <div className={styles.shift}>
            <span className={styles.shiftFrom}>We are workers.</span>
            <span className={styles.arrow} aria-hidden="true">→</span>
            <span className={styles.shiftTo}>We are learners.</span>
          </div>
          <p className={styles.body}>
            When an organization adopts a learning identity, its capabilities
            naturally follow — redesigned to support learning at every level.
          </p>
        </div>

        <div className={styles.capabilities}>
          <p className={styles.capLabel}>Capabilities that evolve</p>
          <div className={styles.capGrid}>
            {capabilities.map((cap) => (
              <div key={cap.name} className={styles.cap}>
                <h3 className={styles.capName}>{cap.name}</h3>
                <p className={styles.capDesc}>{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
