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
                I take ideas from zero to operational.
              </h1>
              <p className={styles.subheading}>
                A builder with depth across every function a product requires,
                and the operating system to build continuously, not just once.
              </p>
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
                I build products, capabilities, and operating systems. The
                through-line across all of it is the same philosophy: treat
                whatever you are building like a product, something that gets
                shipped, learned from, and continuously improved.
              </p>
              <p>
                I have spent 15 years accumulating depth across every function
                that building requires. I started as a digital transformer,
                learning how organizations work and why they resist change. I
                became a product deliverer, learning how to ship. A capability
                builder, learning how to change organizations across all four
                dimensions. A product builder, learning to write code and
                architect systems. A system builder, learning how to design and
                run a product operating model. And now an AI builder, using AI
                as a force multiplier across every layer of the work.
              </p>
              <p>
                Each phase stacked on the last. None of them went away. That
                accumulation is what makes it possible to walk into ambiguity
                with no team, no process, no product, and build something
                operational that others can own and grow.
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
                  Embedded in teams, building capabilities to enable them
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.timelineSection}>
        <div className={styles.inner}>
          <p className={styles.label}>How I got here</p>
          <h2 className={styles.sectionHeading}>
            A builder&apos;s origin story.
          </h2>
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
