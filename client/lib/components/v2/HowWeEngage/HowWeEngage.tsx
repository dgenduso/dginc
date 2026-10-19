import styles from "./HowWeEngage.module.css";

const steps = [
  {
    number: "01",
    name: "Identify a meaningful opportunity",
    body: "Select a customer job, experience, or organizational challenge with measurable outcomes.",
  },
  {
    number: "02",
    name: "Understand and diagnose",
    body: "Learn from customers and employees, map the experience, and identify capability gaps.",
  },
  {
    number: "03",
    name: "Co-design the transformation",
    body: "Assemble relevant cross-functional people to design coordinated changes.",
  },
  {
    number: "04",
    name: "Implement and build capability",
    body: "Deliver and deploy improvements while strengthening teams' operating practices.",
  },
  {
    number: "05",
    name: "Evaluate, learn, and expand",
    body: "Measure impact, reinforce the operating model, and move to the next opportunity.",
  },
];

export default function HowWeEngage() {
  return (
    <section id="engage" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>How I Engage</p>
          <h2 className={styles.heading}>Start focused. Transform continuously.</h2>
          <p className={styles.subheading}>
            An engagement can begin with a single customer experience, team, or
            business area—without requiring company-wide restructuring.
          </p>
        </div>

        <ol className={styles.list}>
          {steps.map((step) => (
            <li key={step.number} className={styles.item}>
              <div className={styles.connector}>
                <span className={styles.dot} />
                <span className={styles.line} />
              </div>
              <div className={styles.content}>
                <span className={styles.number}>{step.number}</span>
                <h3 className={styles.name}>{step.name}</h3>
                <p className={styles.body}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
