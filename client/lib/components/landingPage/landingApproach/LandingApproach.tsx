"use client";

import { FiSearch, FiActivity, FiTarget, FiLayers, FiCheckCircle } from "react-icons/fi";
import { useSector } from "@/lib/sectors/SectorContext";
import styles from "./LandingApproach.module.css";
import type { IconType } from "react-icons";

const phaseIcons: IconType[] = [FiSearch, FiActivity, FiTarget, FiLayers, FiCheckCircle];

export default function LandingApproach() {
  const { active } = useSector();
  const { heading, intros, phases } = active.approach;

  return (
    <section id="approach" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>The approach</p>
          <h2 className={styles.heading}>{heading}</h2>
          {intros.map((intro, i) => (
            <p key={i} className={styles.intro}>
              {intro}
            </p>
          ))}
        </div>

        <div className={styles.phases}>
          {phases.map((phase, i) => {
            const Icon = phaseIcons[i];
            return (
              <div key={phase.number} className={styles.phase}>
                <div className={styles.phaseLeft}>
                  <div className={styles.phaseIcon}>
                    <Icon size={18} />
                  </div>
                  <div className={styles.phaseMeta}>
                    <span className={styles.phaseNumber}>{phase.number}</span>
                    <h3 className={styles.phaseName}>{phase.name}</h3>
                  </div>
                </div>
                <p className={styles.phaseDesc}>{phase.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
