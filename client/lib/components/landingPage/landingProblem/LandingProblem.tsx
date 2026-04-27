"use client";

import styles from "./LandingProblem.module.css";

const patterns = [
  {
    title: "Delivered solutions don't add value.",
    detail:
      "Teams ship. Features go live. But customers don't adopt them or feel better served. The investment added output, not value.",
  },
  {
    title: "Roadmaps go partially or fully unrealized.",
    detail:
      "A fraction of what was planned actually ships. Work gets deprioritized mid-cycle, scope shifts, and what reaches customers is incomplete.",
  },
  {
    title: "Delivery is slow and delayed.",
    detail:
      "Unclear requirements and constant scope changes create rework and friction. Things that should be straightforward take far longer than they should.",
  },
  {
    title: "The cost of change keeps growing.",
    detail:
      "Rework, re-prioritization, and churn mean the organization spends more each cycle for less. The return on delivery investment keeps shrinking.",
  },
];

export default function LandingProblem() {
  return (
    <section id="approach" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>The problem</p>
        <h2 className={styles.heading}>
          The delivery problem has two sides.
        </h2>
        <p className={styles.body}>
          Customers experience it as solutions that don't add value.
          Organizations experience it as delivery that is slow, costly, and
          hard to sustain. But the cause is almost always upstream of delivery
          itself — gaps in how the organization learns, prioritizes, and
          collaborates before a single line of code gets written or a service
          gets designed.
        </p>

        <div className={styles.patterns}>
          {patterns.map((p) => (
            <div key={p.title} className={styles.pattern}>
              <h3 className={styles.patternTitle}>{p.title}</h3>
              <p className={styles.patternDetail}>{p.detail}</p>
            </div>
          ))}
        </div>

        <div className={styles.bottomLine}>
          <p className={styles.bottomLineLabel}>The bottom line</p>
          <p className={styles.bottomLineBody}>
            The cost compounds on both sides. Customers stop trusting that
            things will improve — satisfaction drops, churn follows. And as
            they disengage, they stop sharing the information the organization
            needs to improve. The signal dries up. The next cycle starts with
            even less to work from. Employees burn out chasing a moving target,
            reworking the same things, never feeling like anything lands. Both
            groups disengage for the same reason: effort without realized value.
          </p>
        </div>
      </div>
    </section>
  );
}
