import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./LandingFinalCTA.module.css";

export default function LandingFinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Ready to change how your city operates?
        </h2>
        <p className={styles.body}>
          If the same problems keep reappearing and you are ready to change
          that, let&apos;s talk about where to begin.
        </p>
        <CalendlyButton label="Start the Conversation" className={styles.btn} />
      </div>
    </section>
  );
}
