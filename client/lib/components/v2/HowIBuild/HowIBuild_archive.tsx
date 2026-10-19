"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./HowIBuild.module.css";

const OpportunityModal = dynamic(
  () => import("@/lib/components/v2/OpportunityModal/OpportunityModal"),
  { ssr: false }
);

const cards = [
  {
    number: "01",
    name: "The operating model becomes an operating system",
    body: "Most organizations have never consciously designed how they operate — it accumulated over time. AI-native transformation means redesigning it intentionally: an operating system where agents hold roles, process and policy are built in, and the organization can continuously evolve how it works.",
    accent: "var(--dim-policy)",
    accentBg: "var(--dim-policy-bg)",
  },
  {
    number: "02",
    name: "Agents take on roles. People shift to what only humans can do.",
    body: "As agents are assigned Jobs and take on responsibilities, the human role shifts — from doing the work to learning, governing, and building trusted relationships. The organization doesn't shrink. It becomes more intentionally human where it matters most.",
    accent: "var(--dim-people)",
    accentBg: "var(--dim-people-bg)",
  },
  {
    number: "03",
    name: "Everything the agent needs to do the job lives in the system",
    body: "For an agent to do a Job effectively and consistently, the organization has to make explicit what was always tacit: end-to-end processes, policies and standards, knowledge articles, job instructions, and the values and identity the agent is meant to embody. That work — building it all into the system — is the transformation.",
    accent: "var(--dim-product)",
    accentBg: "var(--dim-product-bg)",
  },
];

export default function HowIBuild() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="how-i-build" className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.distinction}>
            <p className={styles.label}>The opportunity</p>
            <h2 className={styles.heading}>
              It&apos;s time to redesign how your organization operates.
            </h2>
            <p className={styles.body}>
              The internet forced organizations to redesign themselves as digital organizations — websites, portals, digital products. Mobile forced another redesign: apps, mobile-first experiences, always-on accessibility. Both waves transformed the external interface. Each one added new teams and new structure layered on top of what already existed.
            </p>
            <p className={styles.body}>
              AI is different. It doesn&apos;t add a new channel or interface. It forces a redesign of how the organization operates — transforming the operating model into an operating system built to run a digital workforce alongside people. That means agents holding roles, process and policy made explicit and structured, and governance over how and when the digital workforce acts.
            </p>
            <p className={styles.body}>
              Most organizations aren&apos;t ready for that — not because they lack ambition, but because the knowledge agents need to do their jobs has never been written down. It lives in people&apos;s heads, passed down through onboarding and coaching, filled in by judgment and experience. A new employee absorbs it over time. An agent cannot. Closing that gap is the real work of AI transformation.
            </p>
            <button className={styles.readMore} onClick={() => setModalOpen(true)}>
              The full picture →
            </button>
          </div>

          <div className={styles.levels}>
            {cards.map((card) => (
              <div
                key={card.number}
                className={styles.level}
                style={{ "--accent": card.accent, "--accent-bg": card.accentBg } as React.CSSProperties}
              >
                <div className={styles.levelLeft}>
                  <span className={styles.levelNumber}>{card.number}</span>
                </div>
                <div className={styles.levelRight}>
                  <h3 className={styles.levelName}>{card.name}</h3>
                  <p className={styles.levelBody}>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalOpen && <OpportunityModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
