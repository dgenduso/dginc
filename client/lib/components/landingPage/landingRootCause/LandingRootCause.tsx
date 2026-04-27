"use client";

import { useState } from "react";
import WhereFocusModal from "@/lib/components/whereFocusModal/WhereFocusModal";
import styles from "./LandingRootCause.module.css";

const oldModel = [
  "More delivery resources",
  "Process optimization within delivery",
  "AI for efficiency",
];

const newModel = [
  "Investment distributed across the innovation process",
  "Process alignment upstream of delivery",
  "AI for effectiveness, learning, and enablement",
];

export default function LandingRootCause() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>The diagnosis</p>
        <h2 className={styles.heading}>
          The problem shows up at delivery. It doesn&apos;t start there.
        </h2>
        <p className={styles.body}>
          The instinct makes sense — the problem appears at delivery, so that&apos;s
          where the fixes go. But delivery problems are symptoms. Diagnosing
          and treating them at the surface doesn&apos;t remove the cause. It just
          adds more resources to a system that was never the source of the problem.
        </p>

        <div className={styles.comparison}>
          <div className={`${styles.column} ${styles.columnOld}`}>
            <p className={styles.columnLabel}>Old playbook</p>
            <ul className={styles.columnList}>
              {oldModel.map((item) => (
                <li key={item} className={`${styles.columnItem} ${styles.columnItemOld}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.divider} />
          <div className={`${styles.column} ${styles.columnNew}`}>
            <p className={`${styles.columnLabel} ${styles.columnLabelDark}`}>New playbook</p>
            <ul className={styles.columnList}>
              {newModel.map((item) => (
                <li key={item} className={`${styles.columnItem} ${styles.columnItemDark}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.close}>
          Fix the upstream gaps and the delivery problems start to disappear —
          not because delivery changed, but because what reaches delivery is
          better understood and more likely to add value.
        </p>

        <button
          className={styles.focusBtn}
          onClick={() => setModalOpen(true)}
        >
          Where we focus →
        </button>
      </div>

      {modalOpen && <WhereFocusModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
