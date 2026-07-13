import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./Offering.module.css";

const steps = [
  {
    number: "01",
    name: "Assess & Discover",
    body: "We deploy agents inside your organization to conduct structured interviews with your team — async, on their schedule, across every function and time zone. I follow up person-to-person where the conversation requires it. The output is a clear picture of current state: where the friction is, what's breaking down, where coordination overhead lives, and what your people actually need.",
  },
  {
    number: "02",
    name: "Diagnose & Define",
    body: "We synthesize what the assessment surfaces — pain points, gaps, underlying causes — and diagnose what's actually driving them. From there we define the roadmap: a prioritized set of opportunities and the path forward. That might be a new AI-native capability, an operating model build, leadership alignment, or some combination. The assessment determines it, not a predetermined service offering.",
  },
  {
    number: "03",
    name: "Design & Deliver",
    body: "We design and deliver what the roadmap calls for. For capability-building work, that means a unified product — process, policy, and agents built in — that the organization can own and continuously improve. For operating model work, that means standing up the system that makes AI-native capability delivery repeatable. For alignment work, that means getting leadership and teams to a shared, grounded vision of what AI-native means for their organization.",
  },
];

export default function Offering() {
  return (
    <section id="offering" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>How an engagement works</p>
          <h2 className={styles.heading}>Every engagement starts with understanding where you are.</h2>
          <p className={styles.subheading}>
            We don&apos;t start with a predetermined solution. We start by deploying agents into your organization to learn what&apos;s actually going on — then we figure out together what needs to be built.
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
              </div>
            </div>
          ))}
        </div>

        <div className={styles.paths}>
          <p className={styles.pathsLabel}>Where engagements typically lead</p>
          <div className={styles.pathGrid}>
            <div className={styles.pathCard}>
              <p className={styles.pathName}>AI-Native Capability Building</p>
              <p className={styles.pathBody}>Design and deliver a specific organizational capability as an AI-native product — agents, process, and policy built in.</p>
            </div>
            <div className={styles.pathCard}>
              <p className={styles.pathName}>Product Operating Model</p>
              <p className={styles.pathBody}>Stand up the system that enables your organization to build and manage AI-native capabilities continuously.</p>
            </div>
            <div className={styles.pathCard}>
              <p className={styles.pathName}>AI Vision & Alignment</p>
              <p className={styles.pathBody}>Get your senior leaders and teams to a shared, grounded understanding of what AI-native means for your organization — and what it takes to get there.</p>
            </div>
          </div>
        </div>

        <CalendlyButton label="Let's Chat" className={styles.cta} />
      </div>
    </section>
  );
}
