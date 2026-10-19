import { Lesson, getLesson, getChildLessons, formatLessonDate } from "@/lib/v2/lessons";
import LessonVideo from "@/lib/components/v2/LessonVideo/LessonVideo";
import styles from "./LessonDetail.module.css";

export default function LessonDetail({ lesson }: { lesson: Lesson }) {
  const parent = lesson.parentSlug ? getLesson(lesson.parentSlug) : null;
  const children = getChildLessons(lesson.slug);

  return (
    <article className={styles.article}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <a href="/lessons" className={styles.breadcrumbLink}>Lessons</a>
          {parent && (
            <>
              <span className={styles.breadcrumbSep}>→</span>
              <a href={`/lessons/${parent.slug}`} className={styles.breadcrumbLink}>{parent.title}</a>
            </>
          )}
        </div>

        <header className={styles.header}>
          <p className={styles.label}>Learning objective</p>
          <h1 className={styles.heading}>{lesson.title}</h1>
          <p className={styles.objective}>{lesson.objective}</p>
          <p className={styles.date}>{formatLessonDate(lesson.publishedAt)}</p>
        </header>

        <LessonVideo videoUrl={lesson.videoUrl} />

        <div className={styles.body}>
          {lesson.videoUrl && (
            <p className={styles.transcriptLabel}>Transcript</p>
          )}
          {lesson.body.map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>{paragraph}</p>
          ))}
        </div>

        {children.length > 0 && (
          <div className={styles.subLessons}>
            <p className={styles.subLabel}>Go deeper</p>
            <ul className={styles.subList}>
              {children.map((child) => (
                <li key={child.slug} className={styles.subItem}>
                  <a href={`/lessons/${child.slug}`} className={styles.subLink}>
                    <div className={styles.subLinkMain}>
                      <span className={styles.subTitle}>{child.title}</span>
                      <span className={styles.subObjective}>{child.objective}</span>
                    </div>
                    <span className={styles.subArrow}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className={styles.footer}>
          <a href="/lessons" className={styles.back}>← All lessons</a>
        </div>
      </div>
    </article>
  );
}
