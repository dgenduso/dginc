import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./LandingFinalCTA.module.css";

export default function LandingFinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Ready to generate higher returns on your innovation investment?
        </h2>
        <p className={styles.body}>
          We help organizations spread investment across the full innovation
          process — not just delivery — so that what gets built consistently
          adds value and the return compounds over time.
        </p>
        <CalendlyButton label="Let's Chat" className={styles.btn} />
        <p className={styles.note}>
          Most organizations I work with have already tried the delivery fixes.
          This conversation starts upstream.
        </p>
      </div>
    </section>
  );
}
