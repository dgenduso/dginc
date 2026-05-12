import Logo from "@/lib/components/logo/Logo";
import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./Footer.module.css";

const links = [
  { label: "About", href: "/about" },
  { label: "Thoughts", href: "/thoughts" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dangenduso", external: true },
  { label: "GitHub", href: "https://github.com/dangenduso", external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo />
            <span className={styles.brandName}>Dan Genduso</span>
          </div>
          <nav className={styles.links}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={styles.link}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {year} Dan Genduso, Inc.</p>
          <CalendlyButton label="Let's Chat" className={styles.cta} />
        </div>
      </div>
    </footer>
  );
}
