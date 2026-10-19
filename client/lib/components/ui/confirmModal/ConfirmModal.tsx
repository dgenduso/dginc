"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import styles from "./ConfirmModal.module.css";

// Client-side mount detection for portal rendering
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isDestructive?: boolean;
  isLoading?: boolean;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isDestructive = false,
  isLoading = false,
}: ConfirmModalProps) {
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!isOpen || !mounted) return null;

  const handleConfirm = () => {
    onConfirm();
  };

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
        </div>

        <div className={styles.content}>
          <p className={styles.message}>{message}</p>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={onClose}
            className={styles.cancelButton}
            disabled={isLoading}
          >
            {cancelText}
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className={`${styles.confirmButton} ${
              isDestructive ? styles.destructive : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : confirmText}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
