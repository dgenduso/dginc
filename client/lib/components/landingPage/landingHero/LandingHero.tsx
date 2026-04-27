"use client";

import { useState } from "react";
import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import InnovationModal from "@/lib/components/innovationModal/InnovationModal";
import { useSector } from "@/lib/sectors/SectorContext";
import styles from "./LandingHero.module.css";

export default function LandingHero() {
  const { active } = useSector();
  const { eyebrow, headline, subheads } = active.hero;
  const [modalOpen, setModalOpen] = useState(false);

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
          <CalendlyButton label="Let's Chat" className={styles.primaryBtn} />
          <button
            className={styles.secondaryBtn}
            onClick={() => setModalOpen(true)}
          >
            How We Define Innovation
          </button>
        </div>
      </div>
      {modalOpen && <InnovationModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
