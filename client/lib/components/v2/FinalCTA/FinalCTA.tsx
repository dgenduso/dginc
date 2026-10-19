"use client";

import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          Let&apos;s transform how your organization innovates.
        </h2>
        <p className={styles.body}>
          Whether you&apos;re modernizing an operating model, strengthening
          customer discovery, improving cross-functional delivery, or exploring
          how AI changes the way your organization works, I can help turn
          opportunities into lasting organizational capabilities.
        </p>
        <CalendlyButton label="Let's Talk" className={styles.cta} />
      </div>
    </section>
  );
}
