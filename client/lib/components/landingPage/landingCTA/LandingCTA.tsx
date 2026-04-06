import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./LandingCTA.module.css";

export default function LandingCTA() {
  return (
    <section id="contact" className={styles.cta}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Ready to learn from those you serve?</h2>
        <p className={styles.body}>
          Whether you lead a city department, a public agency, or an organization
          ready to transform — let&apos;s talk about what&apos;s possible when you
          put learning before action.
        </p>
        <CalendlyButton label="Get in touch" className={styles.btn} />
      </div>
    </section>
  );
}
