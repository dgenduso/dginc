import styles from "./LandingModel.module.css";

const steps = [
  {
    number: "01",
    title: "Customer Learning",
    description:
      "Learning directly from people at the point of engagement — their conversations, needs, context, and what they are trying to do.",
  },
  {
    number: "02",
    title: "Learning Integration",
    description:
      "Turning what is learned into shared understanding — structuring the signal, preserving it, and connecting it to decision-making across the organization.",
  },
  {
    number: "03",
    title: "Organizational Learning",
    description:
      "Using that understanding to align teams, decide what to do, do the work, and continuously improve how the organization operates and serves people.",
  },
];

export default function LandingModel() {
  return (
    <section id="model" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>The model</p>
          <h2 className={styles.heading}>
            A continuous loop of learning and improvement.
          </h2>
          <p className={styles.subhead}>
            Organizations improve when learning moves through them — from the
            people they serve, into the organization, and back out as better
            product or service.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.loopNote}>
          <p>
            The loop repeats. Each cycle deepens understanding and improves
            service.
          </p>
        </div>

      </div>
    </section>
  );
}
