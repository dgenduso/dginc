import styles from "./LandingProblem.module.css";

const patterns = [
  {
    problem: "Respond. Close. Repeat.",
    detail:
      "Every problem generates a response. The sidewalk gets patched. The trash gets picked up. The ticket closes. But the underlying condition that keeps generating those problems goes unexamined. The response provides relief — like taking Tylenol every day. Necessary in the moment. But not a path to sustained health. Over time the volume of responses grows, the cost compounds, and the city runs faster and faster just to stay in the same place.",
  },
  {
    problem: "Underlying causes compound. Costs grow.",
    detail:
      "What starts as a manageable issue becomes a massive, entrenched one. Homelessness is a clear example — the symptom gets more expensive to manage every cycle while the underlying causes push more people onto the street. The city spends more and more treating the surface while the conditions generating the problem grow.",
  },
  {
    problem: "Occasional progress. No repeatable system.",
    detail:
      "Problems do get solved — but slowly, singularly, and in ways that can't be replicated. It happens despite the system, not because of it. There is no structured process that moves consistently from symptom to cause to resolution. Just occasional progress surrounded by persistent problems.",
  },
  {
    problem: "Everything feels urgent. Nothing feels solvable.",
    detail:
      "Without a system for working through problems, prioritization becomes impossible. Every issue competes for attention. Resources get spread across symptoms. Nothing gets the sustained, structured effort required to actually resolve it. The backlog grows. The team burns out. And residents stop believing anything will change.",
  },
];

export default function LandingProblem() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>The problem</p>
          <h2 className={styles.heading}>
            The response is where the process ends. It should be where it
            begins.
          </h2>
          <p className={styles.body}>
            City governments respond to problems every day. But responding is
            not solving. Without a process that continues past the response —
            into the underlying cause, the defined problem, the designed
            solution — the same issues keep reappearing, cycle after cycle,
            compounding as they go.
          </p>
        </div>

        <div className={styles.patterns}>
          {patterns.map((p) => (
            <div key={p.problem} className={styles.pattern}>
              <h3 className={styles.patternTitle}>{p.problem}</h3>
              <p className={styles.patternDetail}>{p.detail}</p>
            </div>
          ))}
        </div>

        <p className={styles.close}>
          This is not a failure of effort or intention. It is an absence of
          system. And every cycle that passes without resolution makes the next
          one harder.
        </p>
      </div>
    </section>
  );
}
