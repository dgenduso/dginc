import styles from "./BuildLevels.module.css";

const levels = [
  {
    number: "01",
    name: "The Operating System",
    subtitle: "How we build",
    body: "The frameworks and processes that define how organizations learn, build, and evolve. Not a methodology you follow once, but a system you install and run continuously. This is the layer everything else runs on.",
    accent: "var(--dim-policy)",
    accentBg: "var(--dim-policy-bg)",
  },
  {
    number: "02",
    name: "Capabilities",
    subtitle: "What we can do",
    body: "Capabilities are enablement. They are the things an organization can do because the operating system is in place. The ability to learn from customers. To work across functions as one. To run an innovation process. To ship and improve continuously. You build them, add to them, and improve them over time.",
    accent: "var(--dim-people)",
    accentBg: "var(--dim-people-bg)",
  },
  {
    number: "03",
    name: "Products & Services",
    subtitle: "What gets built",
    body: "The offerings that serve customer needs, designed, built, and evolved using the system and capabilities above. Software, services, and the ongoing work of improving them. Built once, improved continuously.",
    accent: "var(--dim-product)",
    accentBg: "var(--dim-product-bg)",
  },
];

export default function BuildLevels() {
  return (
    <section id="build-levels" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>How I build</p>
          <h2 className={styles.heading}>
            I treat everything like a product: built, shipped, learned from, and continuously improved.
          </h2>
          <p className={styles.subheading}>
            That applies whether I&apos;m building software, growing an organization&apos;s capabilities, or designing the system that makes both possible. The three levels aren&apos;t separate engagements. They reinforce each other, and I work across all of them.
          </p>
        </div>

        <div className={styles.levels}>
          {levels.map((level) => (
            <div
              key={level.number}
              className={styles.level}
              style={{ "--accent": level.accent, "--accent-bg": level.accentBg } as React.CSSProperties}
            >
              <div className={styles.levelLeft}>
                <span className={styles.levelNumber}>{level.number}</span>
              </div>
              <div className={styles.levelRight}>
                <p className={styles.levelSubtitle}>{level.subtitle}</p>
                <h3 className={styles.levelName}>{level.name}</h3>
                <p className={styles.levelBody}>{level.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
