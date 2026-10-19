import styles from "./ValueCards.module.css";

export default function ValueCards() {
  return (
    <section id="challenge" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>The Challenge</p>
          <h2 className={styles.heading}>
            Better technology doesn&apos;t necessarily create better outcomes.
          </h2>
        </div>
        <div className={styles.prose}>
          <p className={styles.body}>
            Organizations invest in AI, improve delivery practices, and modernize
            products, yet customers continue to experience friction, unnecessary
            complexity, and problems that remain unresolved.
          </p>
          <p className={styles.body}>
            The customer experience isn&apos;t created by a single product or
            function. It&apos;s the result of interconnected activities across
            people, processes, policies, products, and technology. Improving one
            component in isolation may make it more efficient without improving
            the overall experience.
          </p>
          <p className={styles.emphasis}>
            Meaningful transformation requires changing how the organization
            works together to deliver value.
          </p>
        </div>
      </div>
    </section>
  );
}
