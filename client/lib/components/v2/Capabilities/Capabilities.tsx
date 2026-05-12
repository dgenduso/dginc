import { capabilities, dimLabel, type Dimension } from "@/lib/v2/data";
import styles from "./Capabilities.module.css";

interface CapabilitiesProps {
  activeDimension: Dimension | null;
  preview?: boolean;
}

export default function Capabilities({ activeDimension, preview = false }: CapabilitiesProps) {
  const items = preview ? capabilities.slice(0, 3) : capabilities;

  return (
    <section id="capabilities" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Capabilities</p>
          <h2 className={styles.heading}>What I build.</h2>
        </div>

        <div className={styles.grid}>
          {items.map((cap) => {
            const isActive = !activeDimension || cap.dims.includes(activeDimension);
            return (
              <div
                key={cap.title}
                className={`${styles.card} ${!isActive ? styles.cardDimmed : ""}`}
              >
                <h3 className={styles.cardTitle}>{cap.title}</h3>
                <p className={styles.cardBody}>{cap.body}</p>
                <div className={styles.tags}>
                  {cap.dims.map((d) => (
                    <span
                      key={d}
                      className={`${styles.tag} ${styles[`tag_${d}`]} ${activeDimension === d ? styles.tagActive : ""}`}
                    >
                      {dimLabel[d]}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
