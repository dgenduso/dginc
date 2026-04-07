import styles from "./LandingApproach.module.css";

const phases = [
  {
    number: "01",
    name: "Discover",
    description:
      "Understand the problem as residents experience it. Not themes from a survey — deep understanding of what keeps happening and what it means for the people living it.",
  },
  {
    number: "02",
    name: "Diagnose",
    description:
      "Identify the underlying causes. What conditions are generating this problem? Which of them, if addressed, would have the greatest impact on preventing it from reappearing?",
  },
  {
    number: "03",
    name: "Define",
    description:
      "Get precise. Vague diagnoses produce vague solutions. This phase turns a diagnosed cause into a clearly defined problem with a clear picture of what resolution looks like.",
  },
  {
    number: "04",
    name: "Design",
    description:
      "Build the treatment plan. What interventions address each defined problem — individually and collectively? In what sequence? With what dependencies?",
  },
  {
    number: "05",
    name: "Deliver",
    description:
      "Implement, evaluate, and confirm the experience actually changed. Not asking, 'did we deliver it?'. Instead asking, 'did the problem stop appearing?' Band-aid work continues in parallel so residents don't wait while the deeper work happens.",
  },
];

export default function LandingApproach() {
  return (
    <section id="approach" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>The approach</p>
          <h2 className={styles.heading}>A system built for solving.</h2>
          <p className={styles.intro}>
            Solving problems consistently requires a system. We help city
            governments implement one — a structured process that moves from
            resident experience all the way through to lasting resolution, and
            gets better at doing that over time.
          </p>
          <p className={styles.intro}>
            Each phase produces the input the next phase needs. Shortcutting the
            sequence is how you end up with well-executed solutions to the wrong
            problems, which is where most organizations already are.
          </p>
        </div>

        <div className={styles.phases}>
          {phases.map((phase) => (
            <div key={phase.number} className={styles.phase}>
              <div className={styles.phaseLeft}>
                <span className={styles.phaseNumber}>{phase.number}</span>
                <h3 className={styles.phaseName}>{phase.name}</h3>
              </div>
              <p className={styles.phaseDesc}>{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
