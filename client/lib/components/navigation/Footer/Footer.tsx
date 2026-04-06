import Link from "next/link";
import Logo from "@/lib/components/logo/Logo";
import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <span className={styles.brandName}>Dan Genduso</span>
          </div>
          <nav className={styles.links}>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} Dan Genduso, Inc. All rights reserved.
          </p>
          <CalendlyButton label="Start a Conversation" className={styles.cta} />
        </div>
      </div>
    </footer>
  );
}
