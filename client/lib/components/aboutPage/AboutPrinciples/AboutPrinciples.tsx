import styles from "./AboutPrinciples.module.css";

const principles = [
  {
    name: "Learn-First",
    description: "Understanding comes before action. We do not recommend what to do until we deeply understand the people, the context, and the challenge.",
  },
  {
    name: "Experience-Driven",
    description: "Start with the experience the customer or resident needs, then work backwards. What the organization does, learns, and becomes should be determined by the experience it is trying to deliver — not the other way around.",
  },
  {
    name: "Human-Centered",
    description: "The work is ultimately about human needs and how people engage. Outcomes are only meaningful if they reflect and improve the lived experience of those being served.",
  },
];

export default function AboutPrinciples() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Operating principles</p>
        <h2 className={styles.heading}>How we approach the work.</h2>
        <div className={styles.grid}>
          {principles.map((p) => (
            <div key={p.name} className={styles.card}>
              <h3 className={styles.cardTitle}>{p.name}</h3>
              <p className={styles.cardBody}>{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
