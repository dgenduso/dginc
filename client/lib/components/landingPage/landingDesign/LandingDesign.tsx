import styles from "./LandingDesign.module.css";

const panels = [
  {
    tag: "Where you are",
    heading: "A delivery engine with learning on the side.",
    body: "Built to execute. Feedback collected but rarely synthesized. Direction set top-down from assumptions. Customers react to what gets built. The gap between what they need and what ships stays open.",
  },
  {
    tag: "What we design",
    heading: "A learning engine built for growth.",
    body: "An operating model where customer understanding flows continuously into the organization, through your teams, and into the work that produces your offerings. Every cycle learns. Every output improves.",
  },
  {
    tag: "What it unlocks",
    heading: "Compounding improvement over time.",
    body: "As the learning loop deepens, outputs get sharper, customers feel more understood, and growth follows. The engine compounds — every cycle making the next one faster and more accurate.",
  },
];

export default function LandingDesign() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>What we design</p>
          <h2 className={styles.heading}>
            A learning engine for your organization.
          </h2>
          <p className={styles.body}>
            We design a new operating model — one built around continuous
            learning from customers. It changes how your organization takes in
            information, how that flows through your teams, and how it connects
            to the work that produces your offerings.
          </p>
        </div>

        <div className={styles.panels}>
          {panels.map((panel) => (
            <div key={panel.tag} className={styles.panel}>
              <p className={styles.panelTag}>{panel.tag}</p>
              <h3 className={styles.panelHeading}>{panel.heading}</h3>
              <p className={styles.panelBody}>{panel.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
