import { getPosts } from "@/lib/ghost";
import styles from "./Thinking.module.css";

const fallbackArticles = [
  { title: "Innovation as nested learning cycles", slug: "" },
  { title: "The operating model as operating system", slug: "" },
  { title: "Why organizations don't improve: the missing change mechanism", slug: "" },
];

interface ThinkingProps {
  preview?: boolean;
}

export default async function Thinking({ preview = false }: ThinkingProps) {
  let articles = fallbackArticles;

  try {
    const posts = await getPosts();
    articles = posts.map((p) => ({ title: p.title, slug: p.slug }));
  } catch {
    // Ghost unavailable — use fallbacks
  }

  const items = preview ? articles.slice(0, 3) : articles;

  return (
    <section id="thinking" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Thoughts</p>
          <h2 className={styles.heading}>The thinking behind my work.</h2>
        </div>

        <ul className={styles.list}>
          {items.map((article) => (
            <li key={article.title} className={styles.item}>
              <a
                href={article.slug ? `/thoughts/${article.slug}` : "/thoughts"}
                className={styles.link}
              >
                <span className={styles.title}>{article.title}</span>
                <span className={styles.arrow}>→</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="/thoughts" className={styles.viewAll}>
          {preview ? "All thoughts →" : "View all →"}
        </a>
      </div>
    </section>
  );
}
