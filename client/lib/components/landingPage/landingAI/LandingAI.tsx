import styles from "./LandingAI.module.css";

const roles = [
  {
    step: "01",
    heading: "Capture",
    body: "AI captures the inputs while the human focuses on the conversation that generates them. Better signal. Less friction.",
  },
  {
    step: "02",
    heading: "Synthesize",
    body: "AI makes sense of what customers are saying — across conversations, at scale — so your organization builds a real picture of what people need.",
  },
  {
    step: "03",
    heading: "Accelerate",
    body: "AI moves insights through the innovation process faster — shortening the time between understanding and action.",
  },
];

export default function LandingAI() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Where AI fits</p>
        <h2 className={styles.heading}>
          Your people and your AI have the same problem.
        </h2>
        <p className={styles.body}>
          Neither can produce deep understanding without deep information to
          learn from. Most organizations assume the information exists — it&apos;s
          just scattered across silos. But aggregating shallow information
          doesn&apos;t produce depth. It produces more of the same.
        </p>
        <p className={styles.body}>
          The real gap is in how information gets generated. Depth comes from
          how people approach conversations with customers — the questions they
          ask, how far they go, what they draw out. Changing that changes the
          quality of everything that follows. The goal isn&apos;t just to do the
          job. It&apos;s to generate the inputs that let your organization —
          people and AI — learn deeply enough to innovate and break through.
        </p>

        <p className={styles.keyLine}>
          Built into a learning engine, AI plays three roles.
        </p>

        <div className={styles.roles}>
          {roles.map((role) => (
            <div key={role.step} className={styles.role}>
              <p className={styles.roleStep}>{role.step}</p>
              <h3 className={styles.roleHeading}>{role.heading}</h3>
              <p className={styles.roleBody}>{role.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
