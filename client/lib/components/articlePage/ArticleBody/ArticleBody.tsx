import styles from "./ArticleBody.module.css";

export default function ArticleBody({ html }: { html: string }) {
  return (
    <article className={styles.article}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
