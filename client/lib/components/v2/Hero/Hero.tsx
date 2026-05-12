"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./Hero.module.css";

const rotatingWords = ["Product", "System", "Capability", "AI"];
const INTERVAL = 2200;
const FADE_DURATION = 350;

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setFading(false);
      }, FADE_DURATION);
    }, INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>San Francisco, CA</p>
          <h1 className={styles.headline}>
            <span className={`${styles.rotatingWord} ${fading ? styles.rotatingWordFade : ""}`}>
              {rotatingWords[wordIndex]}
            </span>
            <span className={styles.builderWord}>Builder.</span>
          </h1>
          <p className={styles.subheadline}>
            I take ideas from zero to operational, building products, capabilities, and operating systems into something an organization can own and grow.
          </p>

          <div className={styles.credentials}>
            <p className={styles.credentialsEyebrow}>1 Builder = Product + Design + Engineering + Ops + AI</p>
            <div className={styles.credentialRow}>
              <div className={styles.credential}>
                <span className={styles.credentialNum}>10+</span>
                <span className={styles.credentialLabel}>Years product management</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credentialNum}>10+</span>
                <span className={styles.credentialLabel}>Years delivery &amp; operations</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credentialNum}>6+</span>
                <span className={styles.credentialLabel}>Years engineering &amp; architecture</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credentialNum}>2+</span>
                <span className={styles.credentialLabel}>Years building with AI</span>
              </div>
            </div>
          </div>

          <div className={styles.ctas}>
            <CalendlyButton label="Let's Chat" className={styles.ctaPrimary} />
            <a href="/about" className={styles.ctaSecondary}>About me</a>
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
