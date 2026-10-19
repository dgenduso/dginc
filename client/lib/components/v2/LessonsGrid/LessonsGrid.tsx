import { getRootLessons, getChildLessons, formatLessonDate } from "@/lib/v2/lessons";
import styles from "./LessonsGrid.module.css";

export default function LessonsGrid() {
  const rootLessons = getRootLessons();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Lessons</p>
          <h1 className={styles.heading}>Learn how aligned organizations are built.</h1>
          <p className={styles.subheading}>
            Short, focused lessons on organizational alignment, AI-native operations, and building organizations that continuously improve.
          </p>
        </div>

        <ul className={styles.list}>
          {rootLessons.map((lesson) => {
            const children = getChildLessons(lesson.slug);
            return (
              <li key={lesson.slug} className={styles.item}>
                <a href={`/lessons/${lesson.slug}`} className={styles.link}>
                  <div className={styles.linkMain}>
                    <span className={styles.title}>{lesson.title}</span>
                    <span className={styles.objective}>{lesson.objective}</span>
                    {children.length > 0 && (
                      <span className={styles.childCount}>{children.length} sub-lessons</span>
                    )}
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.date}>{formatLessonDate(lesson.publishedAt)}</span>
                    <span className={styles.arrow}>→</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
