import styles from "./LandingInsight.module.css";

const phases = [
  {
    number: "01",
    name: "Discover",
    description:
      "Understand what's actually happening — where work is getting stuck, what's not landing with customers, and where the gap between investment and outcome is most acute.",
  },
  {
    number: "02",
    name: "Diagnose",
    description:
      "Trace the chain back. Most delivery problems originate in how problems are understood, how information moves through the organization, and how work gets defined before it reaches the people building it.",
  },
  {
    number: "03",
    name: "Define",
    description:
      "Identify the highest-leverage opportunities — the specific upstream changes that will produce the most meaningful improvement in what gets delivered and the value it creates.",
  },
  {
    number: "04",
    name: "Design",
    description:
      "Design interventions across people, process, policy, and tools. Targeted changes that address the actual causes — not a sweeping transformation, but improvements built to compound.",
  },
  {
    number: "05",
    name: "Deliver",
    description:
      "Implement the changes and build the organizational capability to keep improving — so that each innovation cycle produces better outcomes and more consistent value than the last.",
  },
];

export default function LandingInsight() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>How we work</p>
        <h2 className={styles.heading}>
          Building the capability to consistently learn — and consistently
          deliver.
        </h2>
        <p className={styles.body}>
          Innovation is a learning process. Every component of it is too.
          Customer conversations are a learning process. Discovery is a
          learning process. Each phase is a learning process. When the
          organization is working, understanding deepens at every level and
          compounds over time.
        </p>
        <p className={styles.body}>
          We use the same five-phase process to build that learning capability
          — starting with the inputs that feed the whole system. Customer
          conversations, retrospectives, feedback, usage data — these are the
          raw signals innovation runs on. Most organizations generate them and
          lose them. We assess not just whether those inputs exist, but how to
          improve their quality: coaching the people having customer
          conversations, building AI-assisted systems that surface patterns,
          creating incentives that reward learning over transacting, designing
          products that generate better signal. Changes across people, process,
          policy, and tools — at the inputs layer and at every phase that
          follows.
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
          The goal is not a better process document. It is an organization
          with the capability to learn from every cycle and deliver more value
          because of it.
        </p>
      </div>
    </section>
  );
}
