"use client";

import { useSector } from "@/lib/sectors/SectorContext";
import styles from "./LandingProblem.module.css";

export default function LandingProblem() {
  const { active } = useSector();
  const { heading, body, patterns, close } = active.problem;

  return (
    <section id="approach" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>The problem</p>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.body}>{body}</p>
        </div>

        <div className={styles.patterns}>
          {patterns.map((p) => (
            <div key={p.problem} className={styles.pattern}>
              <h3 className={styles.patternTitle}>{p.problem}</h3>
              <p className={styles.patternDetail}>{p.detail}</p>
            </div>
          ))}
        </div>

        <p className={styles.close}>{close}</p>
      </div>
    </section>
  );
}
