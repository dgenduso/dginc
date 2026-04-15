import styles from "./LandingInsight.module.css";

const steps = [
  {
    title: "Assess the current state.",
    detail:
      "We work alongside your teams to understand how the organization currently innovates — how work moves from customer signal to delivered solution, where teams collaborate well and where they don't, and where the learning loop is breaking down.",
  },
  {
    title: "Run an innovation retrospective.",
    detail:
      "We bring team leads together and apply the 5D process to the operating system itself — discovering problems in how the org currently works, diagnosing root causes, defining opportunity areas, and designing the first set of changes.",
  },
  {
    title: "Deliver the first cycle of improvements.",
    detail:
      "We implement that initial set of OS changes, then run a cycle alongside your teams. After the cycle, we retrospect again — learning what worked, surfacing new problems, and adding the next set of improvements.",
  },
];

export default function LandingInsight() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Where we begin</p>
        <h2 className={styles.heading}>
          We apply the process to our work of transforming your operating
          system.
        </h2>
        <p className={styles.body}>
          Before designing anything, we need to understand where the
          organization currently is. We assess the current state of how your
          teams innovate — then bring leadership together to run the 5D process
          on the operating system itself. The same approach used to solve
          customer problems gets used to improve how the org solves problems.
        </p>

        <div className={styles.bullets}>
          {steps.map((s) => (
            <div key={s.title} className={styles.bullet}>
              <span className={styles.bulletTitle}>{s.title}</span>
              {s.detail}
            </div>
          ))}
        </div>

        <p className={styles.keyLine}>
          To break through, you don&apos;t need more activity. You need deeper
          understanding.
        </p>
      </div>
    </section>
  );
}
