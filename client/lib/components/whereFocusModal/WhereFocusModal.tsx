"use client";

import { useEffect, useRef } from "react";
import styles from "./WhereFocusModal.module.css";

const areas = [
  {
    number: "01",
    heading: "Customer conversations and learning.",
    body: "Most organizations interact with customers transactionally — closing tickets, gathering surface-level feedback. We focus on the quality of those conversations: how teams ask questions, how deeply they listen, and how effectively they draw out the information that drives real understanding. Better conversations are the foundation everything else builds on.",
  },
  {
    number: "02",
    heading: "Getting information into the model.",
    body: "Even rich information gets lost if it doesn't flow. We focus on capturing what gets learned in customer conversations and moving it through the organization — into discovery, into planning, into the hands of the people making decisions. AI plays a significant role here: synthesizing signal at scale and surfacing patterns no team could manually track.",
  },
  {
    number: "03",
    heading: "Building capability within each phase.",
    body: "Every phase of the innovation process is itself a learning process. We work on building the skills, practices, and systems within each phase — so that the organization gets better at discovery, diagnosis, definition, design, and delivery over time. The goal is compounding capability, not a one-time improvement.",
  },
];

type Props = {
  onClose: () => void;
};

export default function WhereFocusModal({ onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function handleBackdropClick(e: React.MouseEvent<HTMLDialogElement>) {
    if (e.target === dialogRef.current) onClose();
  }

  return (
    <dialog ref={dialogRef} className={styles.dialog} onClick={handleBackdropClick}>
      <div className={styles.panel}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <p className={styles.eyebrow}>Where we focus</p>
        <h2 className={styles.heading}>
          Three areas of focused improvement to consistently deliver value.
        </h2>

        <div className={styles.areas}>
          {areas.map((area) => (
            <div key={area.number} className={styles.area}>
              <p className={styles.areaNumber}>{area.number}</p>
              <div>
                <h3 className={styles.areaHeading}>{area.heading}</h3>
                <p className={styles.areaBody}>{area.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}
