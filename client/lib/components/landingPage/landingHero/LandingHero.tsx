"use client";

import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import { useSector } from "@/lib/sectors/SectorContext";
import styles from "./LandingHero.module.css";

export default function LandingHero() {
  const { active } = useSector();
  const { eyebrow, headline, subheads } = active.hero;

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.headline}>{headline}</h1>
        {subheads.map((text, i) => (
          <p key={i} className={styles.subhead}>
            {text}
          </p>
        ))}
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
