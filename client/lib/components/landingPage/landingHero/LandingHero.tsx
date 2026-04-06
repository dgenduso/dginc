import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./LandingHero.module.css";

export default function LandingHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Dan Genduso, Inc</p>
        <h1 className={styles.headline}>
          Help your organization truly understand the people it serves.
        </h1>
        <p className={styles.subhead}>
          Most organizations are built to execute work — not to continuously
          learn. We help you change that, so every interaction deepens
          understanding and every decision improves how you serve.
        </p>
        <div className={styles.actions}>
          <CalendlyButton label="Start a Conversation" className={styles.primaryBtn} />
          <a href="#model" className={styles.secondaryBtn}>
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
