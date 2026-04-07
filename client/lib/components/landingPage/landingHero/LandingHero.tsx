import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./LandingHero.module.css";

export default function LandingHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Dan Genduso, Inc</p>
        <h1 className={styles.headline}>
          Start solving problems. Not just responding to them.
        </h1>
        <p className={styles.subhead}>
          Every city has a system for responding to problems. Few have a system
          for solving them consistently, sustainably, and across issues. The
          same problems keep reappearing, cycle after cycle, causing residents
          to lose trust in the system.
        </p>
        <p className={styles.subhead}>
          We help city governments operate differently — learning from
          residents, systematically solving problems, and continuously improving
          how they serve.
          {/* We help organizations make the shift — from a system built to respond, to one built to solve. */}
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
