import styles from "./LandingWhyItHappens.module.css";

const deficits = [
  {
    name: "A budget deficit that cuts can't fix.",
    detail:
      "Servicing symptoms is expensive. As underlying causes grow, the cost of managing them at the surface grows with them. Cutting budgets doesn't solve this — it just means doing less of the same ineffective work. The responsibility doesn't shrink with the budget.",
  },
  {
    name: "A trust deficit that communication can't reverse.",
    detail:
      "Decades of the same problems reappearing have taught residents one thing: the system cannot solve problems. Not won't. Can't. Every cycle that passes without resolution deepens that belief. And once formed, it is very hard to reverse — not through messaging, not through community meetings, only through visible, felt progress.",
  },
];

export default function LandingWhyItHappens() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.cause}>
            <p className={styles.label}>Why it happens</p>
            <h2 className={styles.heading}>
              Built to respond. Not to solve.
            </h2>
            <p className={styles.body}>
              This is not about effort, intention, or the quality of the people
              doing the work. Government was designed and optimized for
              responding — intake, dispatch, close ticket. That system has
              workflows, metrics, and accountability structures all built around
              response times, tickets closed, cases resolved.
            </p>
            <p className={styles.body}>
              There is no equivalent system upstream. No process for moving
              from symptom to cause to clearly defined problem to lasting
              resolution. Information exists everywhere — in 311 calls, service
              tickets, case notes — but it never flows through the organization
              as learning. It gets captured and stored. Never used to understand
              what is actually happening and why.
            </p>
            <p className={styles.body}>
              This is not a resource problem. It is not a people problem. It is
              a system design problem.
            </p>
          </div>

          <div className={styles.deficits}>
            <p className={styles.deficitsLabel}>The consequence</p>
            <p className={styles.deficitsIntro}>
              Every cycle that passes without resolution creates two compounding
              crises.
            </p>
            {deficits.map((d) => (
              <div key={d.name} className={styles.deficit}>
                <h3 className={styles.deficitName}>{d.name}</h3>
                <p className={styles.deficitDetail}>{d.detail}</p>
              </div>
            ))}
            <p className={styles.deficitsClose}>
              A city that cannot afford to keep operating the way it does —
              serving residents who no longer believe it can change. That is
              what makes this existential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
