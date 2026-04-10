import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./GovHero.module.css";

export default function GovHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>City Government</p>
        <h1 className={styles.headline}>
          Your city responds to everything. It solves almost nothing.
        </h1>
        <p className={styles.subhead}>
          Every problem generates a response. The ticket closes. The crew
          dispatches. The case gets logged. But the same problems keep coming
          back — cycle after cycle — because responding is not the same as
          solving.
        </p>
        <p className={styles.subhead}>
          We help city governments build the system that comes after the
          response — the one that learns from residents, works through
          underlying causes, and makes problems stop reappearing.
        </p>
        <div className={styles.actions}>
          <CalendlyButton
            label="Start a Conversation"
            className={styles.primaryBtn}
          />
          <a href="#approach" className={styles.secondaryBtn}>
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
