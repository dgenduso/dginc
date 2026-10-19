import styles from "./Switch.module.css";

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  offLabel?: string;
  onLabel?: string;
  disabled?: boolean;
}

export default function Switch({
  checked,
  onChange,
  label,
  offLabel,
  onLabel,
  disabled = false,
}: SwitchProps) {
  return (
    <div className={styles.switchContainer}>
      <label className={styles.switch}>
        {offLabel && (
          <span
            className={`${styles.stateLabel} ${!checked ? styles.active : ""}`}
          >
            {offLabel}
          </span>
        )}
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          disabled={disabled}
          className={styles.input}
        />
        <span className={styles.slider}></span>
        {onLabel && (
          <span
            className={`${styles.stateLabel} ${checked ? styles.active : ""}`}
          >
            {onLabel}
          </span>
        )}
      </label>
      {label && <span className={styles.mainLabel}>{label}</span>}
    </div>
  );
}
