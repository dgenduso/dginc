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
              AI doesn&apos;t change how your organization works. It changes what your organization is.
            </h2>
            <p className={styles.body}>
              The internet forced organizations to think of themselves as a product customers experience — a website, a portal, a digital presence. Mobile compressed that experience into something simpler and always accessible. Both were transformations of the external interface: how customers see and interact with the organization.
            </p>
            <p className={styles.body}>
              AI is different. It transforms the internal operating model — what the organization actually is from the inside. The complex tangle of SaaS tools, manual processes, policy documents, and role handoffs that employees navigate every day gets redesigned into something fundamentally different: an operating system where agents hold roles and responsibilities, process and policy are built into the product, and people interface with the organization in a completely new way.
            </p>
            <p className={styles.body}>
              When that internal transformation happens, the external experience improves continuously as a byproduct. The organization doesn&apos;t just deliver better — it becomes capable of continuously evolving what it delivers. That&apos;s the shift. Not AI as a tool added onto how you already work, but the organization itself redesigned around what AI makes possible.
            </p>
            <button className={styles.readMore} onClick={() => setModalOpen(true)}>
              Why this shift is different →
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
