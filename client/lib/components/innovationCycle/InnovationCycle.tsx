import styles from "./InnovationCycle.module.css";

const phases = [
  { label: "Discover", angle: 270 },
  { label: "Diagnose", angle: 342 },
  { label: "Define", angle: 54 },
  { label: "Design", angle: 126 },
  { label: "Deliver", angle: 198 },
];

const R = 110; // label radius
const r = 80;  // dot radius
const cx = 160;
const cy = 160;

function polarToXY(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(rad),
    y: cy + radius * Math.sin(rad),
  };
}

export default function InnovationCycle() {
  return (
    <div className={styles.wrapper}>
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
        aria-hidden="true"
      >
        {/* Outer rotating ring */}
        <g className={styles.ring}>
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="6 5"
            opacity="0.2"
          />
          {/* Arrow heads on the ring at intervals */}
          {[0, 72, 144, 216, 288].map((angle) => {
            const pos = polarToXY(angle, r);
            const tangentAngle = angle; // tangent follows the circle
            return (
              <polygon
                key={angle}
                points="-4,-3 4,0 -4,3"
                fill="currentColor"
                opacity="0.35"
                transform={`translate(${pos.x}, ${pos.y}) rotate(${tangentAngle})`}
              />
            );
          })}
        </g>

        {/* Phase dots */}
        {phases.map((phase) => {
          const pos = polarToXY(phase.angle, r);
          return (
            <circle
              key={phase.label}
              cx={pos.x}
              cy={pos.y}
              r={3.5}
              fill="currentColor"
              opacity="0.5"
            />
          );
        })}

        {/* Phase labels */}
        {phases.map((phase) => {
          const pos = polarToXY(phase.angle, R);
          return (
            <text
              key={phase.label}
              x={pos.x}
              y={pos.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className={styles.label}
            >
              {phase.label}
            </text>
          );
        })}

        {/* Rocket centered */}
        <g transform={`translate(${cx}, ${cy})`}>
          {/* Body */}
          <path
            d="M0,-22 C6,-14 8,-4 8,6 L0,12 L-8,6 C-8,-4 -6,-14 0,-22Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            opacity="0.8"
          />
          {/* Nose tip dot */}
          <circle cy={-22} r={1.5} fill="currentColor" opacity="0.8" />
          {/* Window */}
          <circle cy={-4} r={3.5} stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
          {/* Left fin */}
          <path d="M-8,4 L-14,12 L-8,10Z" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
          {/* Right fin */}
          <path d="M8,4 L14,12 L8,10Z" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
          {/* Exhaust flame */}
          <path
            d="M-4,12 Q0,20 4,12"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            opacity="0.4"
            className={styles.flame}
          />
        </g>
      </svg>
    </div>
  );
}
