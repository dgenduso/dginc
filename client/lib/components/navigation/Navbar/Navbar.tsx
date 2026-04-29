"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/lib/components/logo/Logo";
import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import { useTheme } from "@/lib/hooks/useTheme";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.wordmark}>
          <Logo />
          <Link
            href="/"
            className={styles.wordmarkText}
            onClick={() => setOpen(false)}
          >
            Dan Genduso
          </Link>
        </div>

        <div className={styles.navRight}>
          <button
            className={styles.themeToggle}
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

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
        </div>

        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              className={styles.themeToggle}
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
          <li>
            <CalendlyButton label="Let's Chat" className={styles.ctaLink} />
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
              <CalendlyButton
                label="Start a Conversation"
                className={styles.mobileCta}
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
