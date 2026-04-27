"use client";

import { useState } from "react";
import styles from "./CapabilityChain.module.css";

const chain = [
  { name: "Input",    maturity: "outcome" },
  { name: "Discover", maturity: "very-low" },
  { name: "Diagnose", maturity: "low" },
  { name: "Define",   maturity: "low" },
  { name: "Design",   maturity: "very-low" },
  { name: "Deliver",  maturity: "high" },
  { name: "Output",   maturity: "outcome" },
];

export default function CapabilityChain() {
  return (
    <div className={styles.chainWrap}>
      {/* Bars */}
      <div className={styles.chain}>
        {chain.map((node, i) => (
          <div key={node.name} className={styles.chainNode}>
            <div className={styles.barWrap}>
              <div className={`${styles.bar} ${styles[`bar_${node.maturity.replace(/-/g, "_")}`]}`} />
            </div>
            <p className={`${styles.nodeName} ${node.maturity === "outcome" ? styles.nodeNameMuted : ""}`}>
              {node.name.split("\n").map((line, j) => (
                <span key={j}>{line}<br /></span>
              ))}
            </p>
            {i < chain.length - 1 && (
              <div className={styles.arrow}>→</div>
            )}
          </div>
        ))}
      </div>

      {/* Axis row */}
      <div className={styles.axisRow}>
        <span className={styles.axisLabel}>← Invest here</span>
        <span className={styles.axisLabel}>Most investment today →</span>
      </div>
    </div>
  );
}
