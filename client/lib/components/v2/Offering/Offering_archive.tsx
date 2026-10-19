"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./Offering.module.css";

const InnovationCycleModal = dynamic(
  () => import("@/lib/components/v2/InnovationCycleModal/InnovationCycleModal"),
  { ssr: false }
);

const steps = [
  {
    number: "01",
    name: "Align",
    body: "A structured multi-day workshop with leaders across your organization. We gather inputs on identity, values, current state, and vision — aligning everyone on what AI-native means for your org and what you're working toward. The output is the shared foundation we need to provision the operating system for your organization.",
    cta: null,
  },
  {
    number: "02",
    name: "Learn",
    body: "We deploy the platform inside your organization with an initial set of forward-deployed agents. Those agents learn from your people through conversation — continuously, across functions and time zones, on their schedule. That learning feeds directly into the innovation process, surfacing what jobs need to be done, what gaps exist, and what to build next.",
    cta: null,
  },
  {
    number: "03",
    name: "Innovate",
    body: "Learning surfaces signals. Signals kick off innovation cycles. Each cycle moves through the 5 Ds — adding a new Job to the system, closing a gap, or evolving an existing agent. Every delivery feeds back into learning, and the loop continues.",
    cta: "See the innovation cycle →",
  },
];

export default function Offering() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="offering" className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <p className={styles.label}>How an engagement works</p>
            <h2 className={styles.heading}>Align. Learn. Innovate.</h2>
            <p className={styles.subheading}>
              Every engagement follows the same arc — align the organization, deploy the platform to learn from your people, then continuously innovate through a repeating cycle that builds and evolves the operating system over time.
            </p>
          </div>

          <div className={styles.phases}>
            {steps.map((step) => (
              <div key={step.number} className={styles.phase}>
                <div className={styles.phaseLeft}>
                  <span className={styles.phaseNumber}>{step.number}</span>
                </div>
                <div className={styles.phaseRight}>
                  <h3 className={styles.phaseName}>{step.name}</h3>
                  <p className={styles.phaseBody}>{step.body}</p>
                  {step.cta && (
                    <button className={styles.readMore} onClick={() => setModalOpen(true)}>
                      {step.cta}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <CalendlyButton label="Let's Chat" className={styles.cta} />
        </div>
      </section>

      {modalOpen && <InnovationCycleModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
