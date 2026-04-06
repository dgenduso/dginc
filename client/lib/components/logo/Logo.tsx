"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Prompt } from "next/font/google";
import styles from "./Logo.module.css";

const MotionLink = motion.create(Link);

const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Logo = () => {
  return (
    <div className={`${styles.logo} ${prompt.className}`}>
      <MotionLink
        className={styles.link}
        href="/"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 3, repeat: Infinity },
        }}
      >
        DG
      </MotionLink>
    </div>
  );
};

export default Logo;
