import { GhostPost } from "@/lib/ghost";
import InsightsCard from "@/lib/components/insightsPage/InsightsCard/InsightsCard";
import styles from "./InsightsGrid.module.css";

export default function InsightsGrid({ posts }: { posts: GhostPost[] }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {posts.length === 0 ? (
          <p className={styles.empty}>No articles yet. Check back soon.</p>
        ) : (
          <div className={styles.grid}>
            {posts.map((post) => (
              <InsightsCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
