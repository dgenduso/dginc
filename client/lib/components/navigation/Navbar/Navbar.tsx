"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/lib/components/logo/Logo";
import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.wordmark}>
          <Logo />
          <Link href="/" className={styles.wordmarkText} onClick={() => setOpen(false)}>
            Dan Genduso
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`${styles.bar} ${open ? styles.barTopOpen : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barMidOpen : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barBotOpen : ""}`} />
        </button>

        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <CalendlyButton label="Start a Conversation" className={styles.ctaLink} />
          </li>
        </ul>
      </nav>

      {open && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <CalendlyButton label="Start a Conversation" className={styles.mobileCta} />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
