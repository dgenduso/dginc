"use client";

import { useState } from "react";
import styles from "./LandingLearnFirst.module.css";

const cards = [
  {
    number: "01",
    title: "Change your identity",
    subtitle:
      "Declare learn-first as what you are, not just what you're trying to do",
    tags: ["People", "Policy", "Leadership"],
    body: [
      "This is the executive decision that makes everything else possible. \u201cWe are a learn-first organization\u201d changes what the organization measures, what it rewards, what it hires for, and how it describes itself — internally and externally. It is not a campaign or a set of values on a wall. It is a commitment that shows up in where resources go and what gets prioritized.",
      "Without this decision made clearly and sponsored visibly, the operating model changes that follow will be treated as initiatives rather than identity — adopted partially, abandoned when friction appears, and unable to produce the compounding returns that learn-first organizations achieve.",
    ],
  },
  {
    number: "02",
    title: "Change how you approach conversations",
    subtitle: "Customer interactions become generative learning opportunities",
    tags: ["People", "Process", "Policy", "Tools"],
    body: [
      "Conversations are the most generative opportunity an organization has — where learning generates and everything downstream begins. This change redesigns how the organization approaches every customer interaction: training people to conduct learning conversations rather than sales or service transactions, building the skill of deep listening and follow-up questioning, and changing incentives so that depth of understanding is valued alongside conversion and resolution metrics.",
      "AI accelerates and deepens this capability. Post-conversation analysis surfaces where understanding is shallow. Suggested questions are generated for follow-up. Pre-call briefings synthesize everything learned about a customer across previous exchanges. AI translation removes language as a barrier — every customer, every conversation, becomes a source of genuine learning regardless of the language they speak.",
    ],
  },
  {
    number: "03",
    title: "Change how you use information",
    subtitle:
      "Build the infrastructure that turns conversations into organizational learning",
    tags: ["Process", "Tools", "Policy"],
    body: [
      "What conversations produce needs somewhere to go. Most organizations generate rich customer signal and lose it — in CRM fields, in transcripts nobody reads, in the memory of the person who had the call. The learn-first organization builds systems designed to receive, synthesize, and surface what customer interactions reveal.",
      "AI synthesizes at scale what no human team could hold simultaneously — identifying pain points with frequency counts, surfacing themes and stories, uncovering desired outcomes beneath feature requests, finding patterns across hundreds of conversations. The output is organized understanding: learning artifacts that make discovery fast, diagnosis possible, and every downstream phase more effective. The CRM of the future doesn't track pipeline stages. It tracks depth of understanding.",
    ],
  },
  {
    number: "04",
    title: "Change how you work",
    subtitle: "Build upstream innovation capability in priority order",
    tags: ["People", "Process", "Policy", "Tools"],
    body: [
      "With the identity declared and the learning infrastructure in place, the upstream capabilities get built out — Discovery, Diagnosis, Definition, and Design — each one assessed for maturity and improved in the order the diagnostic reveals as highest leverage. Changes happen across people (roles, responsibilities, capabilities), process (how work moves through each phase), policy (what gets measured and rewarded), and tools (what AI and other systems are used to do the work).",
      "This is not a transformation program. Early wins create momentum. Each improvement enables the next. The organization develops the capability to consistently identify the right problems, understand them deeply, and define solutions worth building — so that by the time work reaches delivery, it is clear, well-understood, and has a genuine chance of solving the customer's problem and creating real value.",
    ],
  },
];

export default function LandingLearnFirst() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Become learn-first</p>
        <h2 className={styles.heading}>
          An operating model change that starts with a leadership decision.
        </h2>
        <p className={styles.body}>
          Becoming learn-first isn&apos;t a project approval. It&apos;s an
          identity decision — one that requires executive sponsorship and
          changes how the organization operates across every upstream phase of
          the innovation process.
        </p>
        <p className={styles.body}>
          The organizations that make this shift do so because their leadership
          decided they were going to be learn-first and sponsored the operating
          model changes that followed. Delivery stays as it is. Everything
          upstream changes to feed it properly. We help make that shift in four
          interconnected ways.
        </p>

        <div className={styles.cards}>
          {cards.map((card, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={card.number}
                className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}
              >
                <button
                  className={styles.cardHeader}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.cardNumber}>{card.number}</span>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardTitle}>{card.title}</span>
                    <span className={styles.cardSubtitle}>{card.subtitle}</span>
                  </div>
                  <span
                    className={`${styles.cardChevron} ${isOpen ? styles.cardChevronOpen : ""}`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.cardBody}>
                    <div className={styles.cardTags}>
                      {card.tags.map((tag) => (
                        <span key={tag} className={styles.cardTag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {card.body.map((para, j) => (
                      <p key={j} className={styles.cardPara}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
