"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./OpportunityModal.module.css";

interface OpportunityModalProps {
  onClose: () => void;
}

export default function OpportunityModal({ onClose }: OpportunityModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.content}>
          <p className={styles.label}>The full picture</p>
          <h2 className={styles.heading}>Every wave forced a redesign. AI is no different — except this time, the redesign is the operating model itself.</h2>

          <p className={styles.body}>
            When the internet emerged, organizations had to redesign themselves as digital organizations — websites, e-commerce, digital products. IT departments grew. Digital transformation offices were created. The org bifurcated: the core business on one side, the digital team on the other, coordinating across a gap that never fully closed.
          </p>
          <p className={styles.body}>
            Mobile forced another redesign. New teams formed — mobile engineers, app designers, cross-platform leads — layered on top of the web teams already layered on top of the core business. Each wave added new structure without changing the underlying one.
          </p>
          <p className={styles.body}>
            AI is different. It doesn&apos;t add a new channel or a new interface. It forces organizations to redesign how they operate — to transform the operating model into an operating system that runs a digital workforce alongside people.
          </p>

          <h3 className={styles.subheading}>The operating model becomes an operating system</h3>
          <p className={styles.body}>
            A digital workforce changes what an organization needs to be. Agents don&apos;t coordinate through hallway conversations or institutional memory. They need roles with clear scope, processes that are documented and structured, policies that are explicit and accessible, and governance over how and when they act. The organization has to become the kind of place that can define and maintain all of that — continuously.
          </p>
          <p className={styles.body}>
            Most organizations aren&apos;t there. Job descriptions haven&apos;t been meaningfully updated in years. How-to knowledge lives in people&apos;s heads, passed down through onboarding and coaching that was never written down because there was always more pressing work to do. Processes exist as slides from a project that ended. The focus was always on getting work done — not on documenting how the work gets done.
          </p>
          <p className={styles.body}>
            A new employee can absorb that tacit knowledge over time. An agent cannot. It needs the knowledge to already be explicit, structured, and maintained. That gap — between how organizations actually operate and what a digital workforce needs to function — is the real transformation challenge.
          </p>

          <h3 className={styles.subheading}>The opportunity</h3>
          <p className={styles.body}>
            Closing that gap isn&apos;t just an IT project or an AI implementation. It&apos;s an organizational redesign — building the operating system that makes a digital workforce possible. That means surfacing what was always tacit, structuring what was always informal, and governing what was never governed before.
          </p>
          <p className={styles.body}>
            The organizations that do this well don&apos;t just add AI to what they already do. They build something fundamentally different: an organization designed to operate with a digital workforce, continuously learn from it, and improve.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
