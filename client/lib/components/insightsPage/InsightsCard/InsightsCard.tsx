import Link from "next/link";
import Image from "next/image";
import { GhostPost, formatDate } from "@/lib/ghost";
import styles from "./InsightsCard.module.css";

export default function InsightsCard({ post }: { post: GhostPost }) {
  return (
    <Link href={`/insights/${post.slug}`} className={styles.card}>
      {post.feature_image && (
        <div className={styles.imageWrapper}>
          <Image
            src={post.feature_image}
            alt={post.title}
            fill
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 360px"
          />
        </div>
      )}
      <div className={styles.body}>
        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag.name} className={styles.tag}>
                {tag.name}
              </span>
            ))}
          </div>
        )}
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <div className={styles.meta}>
          <span>{formatDate(post.published_at)}</span>
          <span>{post.reading_time} min read</span>
        </div>
      </div>
    </Link>
  );
}
