import styles from "./Methodology.module.css";

const steps = [
  {
    number: "01",
    name: "Learn",
    desc: "Understand customers, their jobs, experiences, expectations, and outcomes.",
    accent: "var(--dim-policy)",
  },
  {
    number: "02",
    name: "Discover",
    desc: "Identify unmet needs, recurring friction, and problems worth investigating.",
    accent: "var(--dim-people)",
  },
  {
    number: "03",
    name: "Diagnose",
    desc: "Find root causes and gaps across organizational capabilities.",
    accent: "var(--dim-product)",
  },
  {
    number: "04",
    name: "Define",
    desc: "Frame and prioritize opportunities, success measures, and scope of change.",
    accent: "var(--dim-process)",
  },
  {
    number: "05",
    name: "Design",
    desc: "Co-design customer experiences and coordinated organizational capability changes.",
    accent: "var(--dim-policy)",
  },
  {
    number: "06",
    name: "Deliver & Deploy",
    desc: "Implement and operationalize coherent changes to services, products, roles, and workflows.",
    accent: "var(--dim-people)",
  },
  {
    number: "07",
    name: "Evaluate & Evolve",
    desc: "Measure outcomes, question assumptions, and inform future work.",
    accent: "var(--dim-product)",
  },
];

export default function Methodology() {
  return (
    <section id="approach" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>My Approach</p>
          <h2 className={styles.heading}>
            One connected approach to innovation and transformation.
          </h2>
          <p className={styles.body}>
            Innovation is how an organization evolves. This methodology connects
            customer learning, opportunity discovery, organizational diagnosis,
            solution design, delivery, and evaluation into a continuous cycle of
            improvement. Rather than addressing products, processes, policies,
            and people independently, I coordinate changes across the
            capabilities required to deliver better customer experiences and
            outcomes.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div
              key={step.number}
              className={styles.step}
              style={{ "--step-accent": step.accent } as React.CSSProperties}
            >
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepName}>{step.name}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.foundation}>
          <p className={styles.foundationText}>
            <strong>Continuous Learning &amp; Cross-Functional Collaboration</strong>
            {" "}— people and AI agents share context, raise questions, investigate
            gaps, and coordinate work at every phase.
          </p>
        </div>
      </div>
    </section>
  );
}
