"use client";

import { useState, useEffect, useRef } from "react";
import { useSector } from "@/lib/sectors/SectorContext";
import styles from "./ContextSwitcher.module.css";

const TOOLTIP_KEY = "dg_context_tooltip_dismissed";

export default function ContextSwitcher() {
  const { active, setActiveSector, sectors } = useSector();
  const [open, setOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Show tooltip on first visit after short delay
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!localStorage.getItem(TOOLTIP_KEY)) {
      const timer = setTimeout(() => setShowTooltip(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function dismissTooltip() {
    setShowTooltip(false);
    localStorage.setItem(TOOLTIP_KEY, "1");
  }

  function handleSelect(id: string) {
    setActiveSector(id);
    setOpen(false);
    dismissTooltip();
  }

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <button
        className={styles.trigger}
        onClick={() => {
          setOpen((prev) => !prev);
          dismissTooltip();
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {/* Grid icon */}
        <svg
          className={styles.triggerIcon}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="1" y="1" width="5.5" height="5.5" rx="1" />
          <rect x="9.5" y="1" width="5.5" height="5.5" rx="1" />
          <rect x="1" y="9.5" width="5.5" height="5.5" rx="1" />
          <rect x="9.5" y="9.5" width="5.5" height="5.5" rx="1" />
        </svg>
        <span className={styles.triggerLabel}>{active.label}</span>
        <svg
          className={`${styles.triggerChevron} ${open ? styles.triggerChevronOpen : ""}`}
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div className={styles.dropdown} role="listbox">
          {sectors.map((s) => (
            <button
              key={s.id}
              role="option"
              aria-selected={s.id === active.id}
              className={`${styles.dropdownItem} ${s.id === active.id ? styles.dropdownItemActive : ""}`}
              onClick={() => handleSelect(s.id)}
            >
              <span
                className={`${styles.dropdownItemDot} ${s.id === active.id ? styles.dropdownItemDotActive : ""}`}
              />
              {s.label}
            </button>
          ))}
        </div>
      )}

      {showTooltip && (
        <div className={styles.tooltipWrapper}>
          <div className={styles.tooltipArrow} />
          <div className={styles.tooltip} onClick={dismissTooltip}>
            Select your context →
          </div>
        </div>
      )}
    </div>
  );
}
