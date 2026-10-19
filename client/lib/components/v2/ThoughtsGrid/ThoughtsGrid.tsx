import { GhostPost, formatDate } from "@/lib/ghost";
import styles from "./ThoughtsGrid.module.css";

interface ThoughtsGridProps {
  posts: GhostPost[];
  preview?: boolean;
}

export default function ThoughtsGrid({ posts, preview = false }: ThoughtsGridProps) {
  const displayed = preview ? posts.slice(0, 3) : posts;

  return (
    <section className={`${styles.section} ${preview ? styles.sectionPreview : ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Thoughts</p>
          <h2 className={preview ? styles.heading : styles.headingH1}>
            {preview ? "Recent thinking." : "The thinking behind my work."}
          </h2>
        </div>

        {displayed.length === 0 ? (
          <p className={styles.empty}>No posts yet. Check back soon.</p>
        ) : (
          <ul className={styles.list}>
            {displayed.map((post) => (
              <li key={post.id} className={styles.item}>
                <a href={`/thoughts/${post.slug}`} className={styles.link}>
                  <div className={styles.linkMain}>
                    <span className={styles.title}>{post.title}</span>
                    {post.excerpt && (
                      <span className={styles.excerpt}>{post.excerpt}</span>
                    )}
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.date}>{formatDate(post.published_at)}</span>
                    <span className={styles.arrow}>→</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}

        {preview && (
          <a href="/thoughts" className={styles.viewAll}>All thoughts →</a>
        )}
      </div>
    </section>
  );
}
