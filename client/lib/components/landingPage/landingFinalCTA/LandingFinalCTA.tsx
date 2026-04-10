import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./LandingFinalCTA.module.css";

export default function LandingFinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Ready to break through?
        </h2>
        <p className={styles.body}>
          If you&apos;re ready to change how your organization operates — and
          build the engine that drives consistent growth — let&apos;s talk
          about where to begin.
        </p>
        <CalendlyButton label="Start the Conversation" className={styles.btn} />
      </div>
    </section>
  );
}
