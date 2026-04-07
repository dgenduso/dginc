import styles from "./LandingWhatItInvolves.module.css";

const dimensions = [
  {
    name: "People",
    detail:
      "The humans and AI agents doing the work — trained to learn from residents, capture signal, and move it forward rather than close tickets and move on.",
  },
  {
    name: "Process",
    detail:
      "A structured problem-solving process that runs consistently — from resident experience through to lasting resolution — and improves with every cycle.",
  },
  {
    name: "Policy",
    detail:
      "The rules and principles that guide decisions — updated to support learning, continuous improvement, and cross-functional coordination.",
  },
  {
    name: "Product",
    detail:
      "The internal and external systems that capture learning, support diagnosis, and deliver services that reflect what residents actually need.",
  },
];

export default function LandingWhatItInvolves() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>What it involves</p>
          <h2 className={styles.heading}>A new way of operating.</h2>
          <p className={styles.body}>
            This is not a report delivered and forgotten. It is a change in how
            the organization operates — how it learns from residents, moves
            that learning through the organization, and uses it to solve
            problems and improve services over time.
          </p>
          <p className={styles.body}>
            Systemic problems do not respect departmental boundaries. Neither
            can the solutions. This requires cross-functional coordination,
            piloted approaches, feedback loops, and a willingness to test
            before committing resources at scale.
          </p>
          <p className={styles.body}>
            Over time the organization gets better at this — faster diagnosis,
            higher accuracy, the ability to tackle harder problems. The metrics
            shift too: from response times and tickets closed, to problems
            resolved, time to resolution, recurrence rate, and resident trust.
          </p>
        </div>

        <div className={styles.dimensions}>
          <p className={styles.dimLabel}>Change happens across four dimensions</p>
          <div className={styles.grid}>
            {dimensions.map((d) => (
              <div key={d.name} className={styles.dimension}>
                <h3 className={styles.dimName}>{d.name}</h3>
                <p className={styles.dimDetail}>{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
