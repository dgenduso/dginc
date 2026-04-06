import styles from "./AboutFutureOfFirm.module.css";

export default function AboutFutureOfFirm() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Where this is going</p>
        <h2 className={styles.heading}>
          A service that evolves into a system.
        </h2>
        <div className={styles.body}>
          <p>
            This work starts with consulting — high-touch transformation
            engagements that help organizations make the shift from a system
            of work to a system of learning.
          </p>
          <p>
            Over time, technology increasingly enables and scales that service.
            What begins as hands-on advisory work evolves into tools, platforms,
            and systems that help organizations operate this way continuously —
            not just during an engagement.
          </p>
          <p>
            The long-term vision is broader than one consultant. The goal is to
            build the infrastructure that helps organizations learn, evolve, and
            serve people more effectively at scale.
          </p>
        </div>
      </div>
    </section>
  );
}
