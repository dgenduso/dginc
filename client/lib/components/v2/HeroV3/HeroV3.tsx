"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
          <p className={styles.eyebrow}>
            Organizational Innovation &amp; Transformation Consulting
          </p>
          <h1 className={styles.headline}>
            Build an organization that learns, adapts, and delivers.
          </h1>
          <p className={styles.subheadline}>
            I help organizations transform how they understand customers,
            identify opportunities, and deliver value—redesigning operating
            models, strengthening innovation capabilities, and bringing people
            and AI together to create better products, services, and customer
            experiences.
          </p>

          <div className={styles.ctas}>
            <a href="#services" className={styles.ctaPrimary}>
              Explore Services
            </a>
            <a href="#approach" className={styles.ctaSecondary}>
              My Approach →
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
