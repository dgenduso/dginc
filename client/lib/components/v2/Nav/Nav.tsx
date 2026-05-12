"use client";

import { useState } from "react";
import Logo from "@/lib/components/logo/Logo";
import styles from "./Nav.module.css";

const links = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo />

        <div className={styles.right}>
          <ul className={styles.desktopLinks}>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}>{l.label}</a>
              </li>
            ))}
          </ul>

          <button
            className={styles.hamburger}
            onClick={() => setOpen((p) => !p)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`${styles.bar} ${open ? styles.barTopOpen : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barMidOpen : ""}`} />
            <span className={`${styles.bar} ${open ? styles.barBotOpen : ""}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
