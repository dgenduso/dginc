import styles from "./AboutWhyThisWork.module.css";

export default function AboutWhyThisWork() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Why this work exists</p>
        <h2 className={styles.heading}>
          Organizations struggle not because they lack effort — but because they
          are not designed to learn.
        </h2>
        <div className={styles.body}>
          <p>
            Most organizations are structured to execute work. Requests come
            in, work goes out. Teams are measured on delivery. That structure
            rewards effort, not understanding.
          </p>
          <p>
            Without a system for learning from the people they serve,
            organizations make decisions based on assumptions. They repeat the
            same conversations. They revisit the same problems. They deliver
            work that misses the mark — not from lack of effort, but from lack
            of insight.
          </p>
          <p>
            This is not a motivation problem. It is a design problem. And it
            can be solved by redesigning how an organization learns.
          </p>
        </div>
      </div>
    </section>
  );
}
