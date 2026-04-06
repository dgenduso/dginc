import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Ready to start a conversation?
        </h2>
        <p className={styles.body}>
          Every engagement begins with deep listening. We start by understanding
          your organization — your people, your challenges, and what you are
          trying to build. No pitch. Just a conversation.
        </p>
        <CalendlyButton label="Start a Conversation" className={styles.btn} />
      </div>
    </section>
  );
}
