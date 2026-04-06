import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./LandingConversation.module.css";

const capabilities = ["People", "Process", "Policy", "Product"];

export default function LandingConversation() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.what}>
          <p className={styles.label}>What we do</p>
          <h2 className={styles.heading}>
            We lead transformations that help organizations learn, evolve, and
            serve better.
          </h2>
          <p className={styles.body}>
            From understanding how you currently operate, to redesigning how
            learning flows through your organization — we help you make the
            shift from a system of work to a system of learning.
          </p>
          <p className={styles.body}>
            This requires change across your capabilities:
          </p>
          <ul className={styles.capabilityList}>
            {capabilities.map((c) => (
              <li key={c} className={styles.capabilityItem}>{c}</li>
            ))}
          </ul>
          <p className={styles.body}>
            The identity shift is foundational. From &ldquo;we are
            workers&rdquo; to &ldquo;we are learners.&rdquo; Everything else
            follows from that.
          </p>
        </div>

        <div className={styles.cta}>
          <p className={styles.label}>How it starts</p>
          <p className={styles.ctaHeading}>
            A conversation, not a pitch.
          </p>
          <p className={styles.body}>
            The best way to understand this work is to experience it. We start
            by learning about your organization in depth — your people, your
            challenges, what you have tried.
          </p>
          <p className={styles.body}>
            The conversation itself demonstrates the approach.
          </p>
          <CalendlyButton label="Schedule a Conversation" className={styles.ctaBtn} />
        </div>
      </div>
    </section>
  );
}
