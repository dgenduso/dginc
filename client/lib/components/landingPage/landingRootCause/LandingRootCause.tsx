import styles from "./LandingRootCause.module.css";

const bullets = [
  {
    title: "Inputs are shallow.",
    detail:
      "Conversations are transactional, feedback is surface-level, surveys capture reactions not needs. The signal coming in lacks the depth required to genuinely learn from.",
  },
  {
    title: "Learning stays fragmented.",
    detail:
      "What gets captured never flows through the organization as shared understanding. It sits in silos, in notes, in individual heads.",
  },
  {
    title: "Assumptions fill the gaps.",
    detail:
      "Without deep input, people make decisions based on what they think customers need. AI does the same. Faster outputs, same shallow foundation.",
  },
  {
    title: "The output misses.",
    detail:
      "Solutions built on incomplete understanding don't fully land. The customer evaluates, finds it lacking, and the loop starts again. But nothing at the input level changed.",
  },
];

export default function LandingRootCause() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>The diagnosis</p>
        <h2 className={styles.heading}>This is a learning problem.</h2>
        <p className={styles.body}>
          Every organization has a learning loop. Customer inputs flow in,
          learning moves through the organization, the innovation process
          produces an output, and the customer evaluates it. That loop is
          always running. The question is how well.
        </p>
        <p className={styles.body}>
          Most organizations are running a broken version of it:
        </p>

        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b.title} className={styles.bullet}>
              <span className={styles.bulletTitle}>{b.title}</span>
              {b.detail}
            </li>
          ))}
        </ul>

        <p className={styles.impact}>
          Humans can&apos;t do their best work without depth of understanding.
          Neither can AI. The whole organization is operating at a fraction of
          its potential — not because of effort or talent, but because the
          information coming in isn&apos;t rich enough to learn from.
        </p>

        <p className={styles.keyLine}>
          You can only improve as much as you understand.
        </p>

        <p className={styles.bridge}>
          Getting to that depth isn&apos;t a tool problem or a process tweak.
          It requires transforming how the organization operates — its identity,
          its values, and how work gets done across people, process, policy, and
          technology. That transformation is where we begin.
        </p>
      </div>
    </section>
  );
}
