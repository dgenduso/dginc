"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./InnovationCycleModal.module.css";

interface InnovationCycleModalProps {
  onClose: () => void;
}

const phases = [
  {
    name: "Discover",
    body: "Continuous learning surfaces signals — Jobs to be done within the system, pain points, unmet needs, and opportunities. Discovery is the process of identifying and understanding what those signals are pointing to.",
  },
  {
    name: "Diagnose",
    body: "We diagnose the gaps and issues that exist — what's missing, undocumented, or inconsistent that could keep a Job from being done well. Diagnosis gives us a clear picture of what needs to be addressed before we can build.",
  },
  {
    name: "Define",
    body: "We define prioritized opportunities from what diagnosis surfaces — the Jobs to assign, the gaps to close, the capabilities to build. This becomes the roadmap for what gets designed and delivered next.",
  },
  {
    name: "Design",
    body: "We design solutions that fit the opportunity space — the agent's role and instructions, the end-to-end process it follows, the policies it operates within, the knowledge it draws on, and the values it embodies.",
  },
  {
    name: "Deliver",
    body: "We build and deploy into the platform — the agent, the process, the knowledge, everything it needs to do the Job effectively. From that point it operates as part of the system, managed and continuously improved as learning feeds the next cycle.",
  },
];

export default function InnovationCycleModal({ onClose }: InnovationCycleModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.content}>
          <p className={styles.label}>The innovation cycle</p>
          <h2 className={styles.heading}>Five stages. One repeating loop.</h2>
          <p className={styles.intro}>
            Continuous learning feeds each cycle. When learning surfaces a signal strong enough to act on, an innovation cycle begins. Each cycle moves through the 5 Ds and delivers something new into the platform — then learning picks it up and the loop continues.
          </p>

          <div className={styles.phases}>
            {phases.map((phase, i) => (
              <div key={phase.name} className={styles.phase}>
                <div className={styles.phaseLeft}>
                  <span className={styles.phaseNumber}>0{i + 1}</span>
                  <span className={styles.phaseName}>{phase.name}</span>
                </div>
                <p className={styles.phaseBody}>{phase.body}</p>
              </div>
            ))}
          </div>

          <div className={styles.loop}>
            {phases.map((p, i, arr) => (
              <span key={p.name} className={styles.loopItem}>
                <span className={styles.loopName}>{p.name}</span>
                {i < arr.length - 1 && <span className={styles.loopArrow}>→</span>}
              </span>
            ))}
            <span className={styles.loopArrow}>↺</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
