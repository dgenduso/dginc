import Image from "next/image";
import { timeline } from "@/lib/v2/data";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.label}>About</p>
              <h1 className={styles.heading}>
                15 years changing how organizations operate.
              </h1>
              <p className={styles.subheading}>
                Every phase of my career has been about the same thing —
                redesigning how organizations work. AI-native transformation is
                where that work leads now.
              </p>
              <div className={styles.credentials}>
                <div className={styles.credential}>
                  <span className={styles.credentialNum}>10+</span>
                  <span className={styles.credentialLabel}>Years product management</span>
                </div>
                <div className={styles.credential}>
                  <span className={styles.credentialNum}>10+</span>
                  <span className={styles.credentialLabel}>Years delivery &amp; operations</span>
                </div>
                <div className={styles.credential}>
                  <span className={styles.credentialNum}>6+</span>
                  <span className={styles.credentialLabel}>Years engineering &amp; architecture</span>
                </div>
                <div className={styles.credential}>
                  <span className={styles.credentialNum}>2+</span>
                  <span className={styles.credentialLabel}>Years building with AI</span>
                </div>
              </div>
            </div>
            <div className={styles.heroPhoto}>
              <div className={styles.photoRing}>
                <Image
                  src="/images/square-image.jpg"
                  alt="Dan Genduso"
                  width={300}
                  height={300}
                  className={styles.photo}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bio}>
        <div className={styles.inner}>
          <div className={styles.bioGrid}>
            <div className={styles.bioCopy}>
              <p>
                The through-line across every engagement has been the same:
                capabilities. Not tools, not software, not processes in
                isolation — but the full system that enables an organization to
                do something it couldn&apos;t do before, or do it better. That
                means people, process, policy, and technology designed together
                as one thing.
              </p>
              <p>
                I&apos;ve built capabilities from scratch, consolidated hundreds
                of fragmented versions of the same capability across global
                organizations, and designed the operating model that builds and
                improves all capabilities continuously. Each phase stacked on
                the last. None of them went away. That accumulation is what I
                bring into a room.
              </p>
            </div>

            <div className={styles.bioMeta}>
              <div className={styles.metaBlock}>
                <p className={styles.metaLabel}>Based in</p>
                <p className={styles.metaValue}>San Francisco, CA</p>
              </div>
              <div className={styles.metaBlock}>
                <p className={styles.metaLabel}>Currently</p>
                <p className={styles.metaValue}>
                  Available for contract or hire
                </p>
              </div>
              <div className={styles.metaBlock}>
                <p className={styles.metaLabel}>Building</p>
                <p className={styles.metaValue}>DiverseCiti and APOLLO1</p>
              </div>
              <div className={styles.metaBlock}>
                <p className={styles.metaLabel}>How I engage</p>
                <p className={styles.metaValue}>
                  Embedded in your organization, designing and building
                  AI-native capabilities using a structured five-phase process
                  from discovery through delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.inner}>
          <p className={styles.label}>How I got here</p>
          <h2 className={styles.sectionHeading}>My journey.</h2>
          <p className={styles.sectionSubhead}>
            Each phase added a new layer. None of them went away.
          </p>
          <div className={styles.timeline}>
            {timeline.map((entry, i) => (
              <div key={i} className={styles.timelineEntry}>
                <div className={styles.timelineLeft}>
                  <p className={styles.timelinePeriod}>{entry.period}</p>
                </div>
                <div className={styles.timelineRight}>
                  <p className={styles.timelinePhase}>{entry.phase}</p>
                  <p className={styles.timelineDesc}>{entry.description}</p>
                  <div className={styles.timelineLearned}>
                    <p className={styles.timelineLearnedLabel}>
                      What I learned
                    </p>
                    <p className={styles.timelineLearnedText}>
                      {entry.learned}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
