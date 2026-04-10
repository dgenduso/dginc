import styles from "./LandingTransformation.module.css";

const panels = [
  {
    tag: "Where you are",
    heading: "An delivery engine with learning on the side.",
    bullets: [
      "Learning happens in pockets — insights teams, CRM fragments, siloed data",
      "Direction flows top-down, informed by assumptions and periodic strategy",
      "Customers react to what gets built",
      "The gap between what they need and what gets delivered shows up in churn",
    ],
  },
  {
    tag: "What changed",
    heading: "AI made learning at scale possible.",
    bullets: [
      "The raw signal was always there — calls, transcripts, feedback — but unusable at volume",
      "AI can now synthesize customer understanding across thousands of interactions",
      "The shift: from push (deliver and react) to pull (ask, listen, understand)",
      "What flows in determines what comes out",
    ],
  },
  {
    tag: "Where you're going",
    heading: "A learning engine that compounds.",
    bullets: [
      "Learning is the work, not a byproduct of it",
      "Customer understanding flows continuously through the entire organization",
      "Teams work from shared understanding, not assumptions",
      "Every cycle delivers more value — the engine compounds",
    ],
  },
];

export default function LandingTransformation() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>The shift</p>
          <h2 className={styles.heading}>
            From an delivery engine to a learning engine.
          </h2>
        </div>
        <div className={styles.panels}>
          {panels.map((panel) => (
            <div key={panel.tag} className={styles.panel}>
              <p className={styles.panelTag}>{panel.tag}</p>
              <h3 className={styles.panelHeading}>{panel.heading}</h3>
              <ul className={styles.bullets}>
                {panel.bullets.map((b) => (
                  <li key={b} className={styles.bullet}>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
