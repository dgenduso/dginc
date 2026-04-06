import Link from "next/link";
import Image from "next/image";
import { GhostPost, formatDate } from "@/lib/ghost";
import styles from "./ArticleHeader.module.css";

export default function ArticleHeader({ post }: { post: GhostPost }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/insights" className={styles.back}>
          ← All Insights
        </Link>

        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag.name} className={styles.tag}>
                {tag.name}
              </span>
            ))}
          </div>
        )}

        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.meta}>
          <span>{formatDate(post.published_at)}</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span>{post.reading_time} min read</span>
        </div>

        {post.feature_image && (
          <div className={styles.imageWrapper}>
            <Image
              src={post.feature_image}
              alt={post.title}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 740px"
              priority
            />
          </div>
        )}
      </div>
    </header>
  );
}
