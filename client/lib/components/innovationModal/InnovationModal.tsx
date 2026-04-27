"use client";

import { useEffect, useRef } from "react";
import styles from "./InnovationModal.module.css";

const cycle = [
  {
    term: "Information",
    detail:
      "Signal is gathered from customer conversations, feedback, retrospectives, usage data. The raw material of understanding.",
  },
  {
    term: "Interpretation",
    detail:
      "That information is processed and connected. What does it mean? What does it reveal about the problem?",
  },
  {
    term: "Application",
    detail:
      "Understanding is expressed in a decision, a design, an artifact that reflects what was learned.",
  },
  {
    term: "Evaluation",
    detail:
      "The application is tested against reality. Did it demonstrate genuine understanding? The customer is the final grader.",
  },
];

type Props = {
  onClose: () => void;
};

export default function InnovationModal({ onClose }: Props) {
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
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <p className={styles.eyebrow}>A working definition</p>
        <h2 className={styles.heading}>Innovation is a learning process.</h2>

        <p className={styles.body}>
          Most organizations think of innovation as building new things — new
          features, new products, new services. But building things isn&apos;t
          innovation. Building the right things, in ways that genuinely solve
          customer problems and add value, is innovation. And that requires
          learning.
        </p>
        <p className={styles.body}>
          At its core, innovation is the process through which an organization
          converts understanding of customer problems into solutions that solve
          them — repeatedly and consistently. Every phase of that process is
          itself a learning cycle: information is gathered, interpreted,
          applied, and evaluated. Understanding deepens at each step.
        </p>

        <p className={styles.cycleLabel}>
          The atomic learning cycle that runs through every phase:
        </p>

        <div className={styles.cycle}>
          {cycle.map((item) => (
            <div key={item.term} className={styles.cycleItem}>
              <p className={styles.cycleTerm}>{item.term}</p>
              <p className={styles.cycleDetail}>{item.detail}</p>
            </div>
          ))}
        </div>

        <p className={styles.close2}>
          When this cycle runs well at every phase — and when the understanding
          it generates moves through the organization rather than staying
          siloed — what reaches the customer is the product of genuine
          organizational learning. That is what consistently delivers value.
        </p>

        <p className={styles.sig}>Dan Genduso</p>
      </div>
    </dialog>
  );
}
