import { getPosts } from "@/lib/ghost";
import InsightsCard from "@/lib/components/insightsPage/InsightsCard/InsightsCard";
import styles from "./LandingInsightsPreview.module.css";

export default async function LandingInsightsPreview() {
  const posts = await getPosts();
  const preview = posts.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Insights</p>
          <h2 className={styles.heading}>Go deeper.</h2>
          <p className={styles.subhead}>
            Articles and thinking on organizational learning, service, trust,
            government transformation, and what it means to build a
            learning-first organization.
          </p>
        </div>

        {preview.length > 0 ? (
          <div className={styles.grid}>
            {preview.map((post) => (
              <InsightsCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>Articles coming soon.</p>
        )}

        <div className={styles.footer}>
          <a href="/insights" className={styles.ctaLink}>
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
}
