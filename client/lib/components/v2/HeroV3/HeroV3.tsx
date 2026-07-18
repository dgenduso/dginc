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
          <p className={styles.eyebrow}>AI-Native Transformation</p>
          <h1 className={styles.headline}>
            Helping organizations become AI-native.
          </h1>
          <p className={styles.subheadline}>
            That means redesigning how your organization operates across people,
            process, policy, and product — so a digital workforce can operate
            alongside humans, and the focus shifts to what only humans can do.
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
