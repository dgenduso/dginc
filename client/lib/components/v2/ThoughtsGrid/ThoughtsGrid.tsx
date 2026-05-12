import { GhostPost, formatDate } from "@/lib/ghost";
import styles from "./ThoughtsGrid.module.css";

export default function ThoughtsGrid({ posts }: { posts: GhostPost[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Thoughts</p>
          <h1 className={styles.heading}>The thinking behind my work.</h1>
        </div>

        {posts.length === 0 ? (
          <p className={styles.empty}>No posts yet. Check back soon.</p>
        ) : (
          <ul className={styles.list}>
            {posts.map((post) => (
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
      </div>
    </section>
  );
}
