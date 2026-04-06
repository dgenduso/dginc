import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/dg-profile.png"
            alt="Dan Genduso"
            width={112}
            height={112}
            className={styles.profileImage}
            priority
          />
        </div>
        <div className={styles.bio}>
          <p className={styles.name}>Dan Genduso</p>
          <p className={styles.title}>Chief Innovation Officer</p>
          <p className={styles.blurb}>
            Dan works alongside organizations to lead transformation from
            within, helping them become systems that continuously learn,
            improve, and better serve the people they reach.
          </p>
          <a
            href="https://www.linkedin.com/in/dgenduso"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedin}
          >
            LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
}
