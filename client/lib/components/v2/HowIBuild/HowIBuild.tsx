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
    name: "A redesign, not a retrofit",
    body: "Most AI implementations fit AI into an existing capability design. That design limits what AI can do — the agent can only reach the sliver of the process it can see. AI-native capability building starts from purpose and redesigns the capability from the ground up so AI can hold the full thing.",
    accent: "var(--dim-policy)",
    accentBg: "var(--dim-policy-bg)",
  },
  {
    number: "02",
    name: "The 4 Ps collapse into one product",
    body: "Process, policy, people's roles, and technology are no longer four separate concerns designed in parallel. In an AI-native capability they collapse into one unified product — built once, improved continuously, and operated by agents and people together.",
    accent: "var(--dim-people)",
    accentBg: "var(--dim-people-bg)",
  },
  {
    number: "03",
    name: "People get elevated, not replaced",
    body: "When agents hold the machine-like work — the coordination, the data entry, the handoffs — people shift into sensemaking, teaching, and governance. The human role doesn't shrink. It becomes more human.",
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
