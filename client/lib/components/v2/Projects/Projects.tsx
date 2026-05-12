"use client";

import { useState } from "react";
import { projects, type Dimension } from "@/lib/v2/data";
import styles from "./Projects.module.css";

interface ProjectsProps {
  activeDimension: Dimension | null;
  preview?: boolean;
}

export default function Projects({
  activeDimension,
  preview = false,
}: ProjectsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = preview ? projects.slice(0, 2) : projects;

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>What I&apos;m Building</p>
          <h2 className={styles.heading}>My Applications.</h2>
          <p className={styles.subheading}>
            Products that apply the same philosophy: treat it like a product,
            build it continuously.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((project, i) => {
            const isActive =
              !activeDimension || project.dims.includes(activeDimension);
            const isOpen = openIndex === i;
            return (
              <div
                key={project.title}
                className={`${styles.card} ${!isActive ? styles.cardDimmed : ""} ${isOpen ? styles.cardOpen : ""}`}
              >
                <button
                  className={styles.cardHeader}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.tags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className={`${styles.cardChevron} ${isOpen ? styles.cardChevronOpen : ""}`}
                    >
                      ↓
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  {project.philosophy && (
                    <p className={styles.cardPhilosophy}>
                      {project.philosophy}
                    </p>
                  )}
                  <p className={styles.cardSummary}>{project.summary}</p>
                </button>

                {isOpen && (
                  <div className={styles.cardDetail}>
                    <p className={styles.cardDetailBody}>{project.detail}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {preview && (
          <div className={styles.seeAll}>
            <a href="/projects" className={styles.seeAllLink}>
              All projects →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
