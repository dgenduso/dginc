"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./HeroV3.module.css";

export default function HeroV3() {
  const [mounted, setMounted] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>AI & Organizational Transformation</p>
          <h1 className={styles.headline}>
            Helping organizations become AI-native.
          </h1>
          <p className={styles.subheadline}>
            That means rebuilding capabilities with AI Agents operating as a
            digital workforce alongside humans — process, policy, and agent
            roles unified inside a single product — so people are freed to focus
            on what only humans can do.
          </p>

          <div className={styles.ctas}>
            <CalendlyButton label="Let's Chat" className={styles.ctaPrimary} />
            <a href="#offering" className={styles.ctaSecondary}>
              See how I work →
            </a>
          </div>
        </div>

        <div
          ref={imgRef}
          className={`${styles.photoWrap} ${mounted ? styles.photoMounted : ""}`}
        >
          <div className={styles.photoRing}>
            <Image
              src="/images/square-image.jpg"
              alt="Dan Genduso"
              width={400}
              height={400}
              className={styles.photo}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
