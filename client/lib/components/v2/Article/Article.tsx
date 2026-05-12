import { GhostPost, formatDate } from "@/lib/ghost";
import styles from "./Article.module.css";

export default function Article({ post }: { post: GhostPost }) {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <a href="/thoughts" className={styles.back}>← All thoughts</a>

        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag.name} className={styles.tag}>{tag.name}</span>
            ))}
          </div>
        )}

        <h1 className={styles.title}>{post.title}</h1>

        <p className={styles.meta}>
          {formatDate(post.published_at)} · {post.reading_time} min read
        </p>

        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}
