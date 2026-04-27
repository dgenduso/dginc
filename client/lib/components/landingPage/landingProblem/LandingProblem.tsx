"use client";

import { useState } from "react";
import styles from "./LandingProblem.module.css";

const tabs = [
  {
    id: "effectiveness",
    label: "Effectiveness",
    quote: "We keep delivering. The problem keeps coming back.",
    body: "What gets built doesn't consistently solve the problem. Features ship, products evolve, services get updated — but customers still have the same underlying issue. The organization is delivering, but not delivering value.",
    bullets: [
      "Features released but rarely adopted",
      "Problems that persist despite multiple cycles",
      "Solutions that address the symptom, not the cause",
      "Roadmaps full of work that doesn't move the needle",
    ],
  },
  {
    id: "efficiency",
    label: "Efficiency",
    quote: "Everything takes longer and costs more than it should.",
    body: "Inside the organization, delivery is slow, costly, and hard to sustain. Work gets stuck between teams, reworked repeatedly, or quietly deprioritized. A fraction of what was planned actually ships — and the effort required to get there keeps growing.",
    bullets: [
      "Handoffs that lose context and create rework",
      "Scope changes driven by unclear requirements",
      "Timelines that slip, budgets that overrun",
      "High effort, uncertain impact, cycle after cycle",
    ],
  },
];

export default function LandingProblem() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="approach" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>The problem</p>
        <h2 className={styles.heading}>
          Two sides of the same delivery problem.
        </h2>
        <p className={styles.body}>
          Organizations struggle with delivery in two distinct ways —
          effectiveness and efficiency. Both are real. Both are costly. And
          both are almost always misdiagnosed as problems to fix within
          delivery itself.
        </p>

        <div className={styles.tabs}>
          {tabs.map((t, i) => (
            <button
              key={t.id}
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className={styles.panel}>
          <p className={styles.quote}>&ldquo;{tab.quote}&rdquo;</p>
          <p className={styles.panelBody}>{tab.body}</p>
          <ul className={styles.bullets}>
            {tab.bullets.map((b) => (
              <li key={b} className={styles.bullet}>{b}</li>
            ))}
          </ul>
        </div>

        <div className={styles.impact}>
          <p className={styles.impactLabel}>The impact on customers and employees</p>
          <div className={styles.impactGrid}>
            <div className={styles.impactCol}>
              <p className={styles.impactColLabel}>Customers</p>
              <ul className={styles.impactList}>
                <li className={styles.impactItem}>Don&apos;t see their problem getting solved</li>
                <li className={styles.impactItem}>Get tired of repeating themselves and waiting</li>
                <li className={styles.impactItem}>Stop trusting things will improve</li>
                <li className={styles.impactItem}>Churn to alternatives</li>
              </ul>
            </div>
            <div className={styles.impactCol}>
              <p className={styles.impactColLabel}>Employees</p>
              <ul className={styles.impactList}>
                <li className={styles.impactItem}>Can&apos;t see that their work is adding value</li>
                <li className={styles.impactItem}>Burn out from rework and repeated cycles</li>
                <li className={styles.impactItem}>Stop trusting the organization can change</li>
                <li className={styles.impactItem}>Churn, taking organizational knowledge with them</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomLine}>
          <p className={styles.bottomLineLabel}>The cost to the organization</p>
          <p className={styles.bottomLineBody}>
            The real cost isn&apos;t just the investment in delivery. It&apos;s the
            cost of replacing customers who churn — spending on acquisition
            just to stay flat. It&apos;s the cost of replacing employees who
            leave, taking organizational knowledge with them. The organization
            has to generate a return high enough to cover all of it. Heavy
            investment in delivery is not producing that return. The gap between
            what gets spent and the value of what gets produced is the problem
            worth solving.
          </p>
        </div>
      </div>
    </section>
  );
}
