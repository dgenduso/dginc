"use client";

import { useEffect } from "react";

interface CalendlyButtonProps {
  label: string;
  className?: string;
}

const CALENDLY_URL = "https://calendly.com/dangendusoinc/initial-consultation";

export default function CalendlyButton({ label, className }: CalendlyButtonProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    // @ts-expect-error Calendly is loaded via external script
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  return (
    <>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <button onClick={openCalendly} className={className}>
        {label}
      </button>
    </>
  );
}
