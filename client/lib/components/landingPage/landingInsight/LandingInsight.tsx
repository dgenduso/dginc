import styles from "./LandingInsight.module.css";

const phases = [
  {
    number: "01",
    name: "Discover",
    description:
      "Understand what's actually happening — where work is getting stuck, what's not landing with customers, and where the gap between investment and outcome is most acute. We start at delivery and follow the chain upstream.",
  },
  {
    number: "02",
    name: "Diagnose",
    description:
      "Find where in the innovation capability chain the maturity gaps are. Where is understanding breaking down? Which phase is inheriting the most unresolved ambiguity? Where will investment produce the greatest early return?",
  },
  {
    number: "03",
    name: "Define",
    description:
      "Identify the highest-leverage opportunities — the specific upstream investments across people, process, policy, and tools that will produce the most meaningful improvement in both delivery efficiency and the value of what gets delivered.",
  },
  {
    number: "04",
    name: "Design",
    description:
      "Design the interventions. Targeted changes that build maturity at each capability level — not a transformation program, but improvements that compound with each cycle and build toward the deeper causes over time.",
  },
  {
    number: "05",
    name: "Deliver",
    description:
      "Implement the changes and build the organizational capability to keep improving — so that each innovation cycle produces better outcomes, clearer direction, and more consistent value than the last.",
  },
];

export default function LandingInsight() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>How we work</p>
        <h2 className={styles.heading}>
          We use our innovation capability to build yours.
        </h2>
        <p className={styles.body}>
          This is not a consulting engagement that diagnoses problems and hands
          you a report. We run the same process we help you build — applied
          directly to your organization. The engagement is the proof of concept.
        </p>

        <div className={styles.phases}>
          {phases.map((phase) => (
            <div key={phase.number} className={styles.phase}>
              <p className={styles.phaseNumber}>{phase.number}</p>
              <div className={styles.phaseContent}>
                <h3 className={styles.phaseName}>{phase.name}</h3>
                <p className={styles.phaseDescription}>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.close}>
          Changes are made across people, process, policy, and tools at each
          phase — including how the organization learns from customers at the
          point of interaction, which is the foundation everything else depends
          on.
        </p>
      </div>
    </section>
  );
}
