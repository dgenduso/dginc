"use client";

import { useSector } from "@/lib/sectors/SectorContext";
import styles from "./LandingWhyItHappens.module.css";

export default function LandingWhyItHappens() {
  const { active } = useSector();
  const { heading, bodies, deficitsIntro, deficits, deficitsClose } =
    active.whyItHappens;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.cause}>
            <p className={styles.label}>Why it happens</p>
            <h2 className={styles.heading}>{heading}</h2>
            {bodies.map((body, i) => (
              <p key={i} className={styles.body}>
                {body}
              </p>
            ))}
          </div>

          <div className={styles.deficits}>
            <p className={styles.deficitsLabel}>The consequence</p>
            <p className={styles.deficitsIntro}>{deficitsIntro}</p>
            {deficits.map((d) => (
              <div key={d.name} className={styles.deficit}>
                <h3 className={styles.deficitName}>{d.name}</h3>
                <p className={styles.deficitDetail}>{d.detail}</p>
              </div>
            ))}
            <p className={styles.deficitsClose}>{deficitsClose}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
