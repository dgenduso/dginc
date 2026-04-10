"use client";

import { useSector } from "@/lib/sectors/SectorContext";
import styles from "./LandingWhatItInvolves.module.css";

export default function LandingWhatItInvolves() {
  const { active } = useSector();
  const { heading, bodies, dimLabel, dimensions } = active.whatItInvolves;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>What it involves</p>
          <h2 className={styles.heading}>{heading}</h2>
          {bodies.map((body, i) => (
            <p key={i} className={styles.body}>
              {body}
            </p>
          ))}
        </div>

        <div className={styles.dimensions}>
          <p className={styles.dimLabel}>{dimLabel}</p>
          <div className={styles.grid}>
            {dimensions.map((d) => (
              <div key={d.name} className={styles.dimension}>
                <h3 className={styles.dimName}>{d.name}</h3>
                <p className={styles.dimDetail}>{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
