interface IconMarkProps {
  size?: number;
  className?: string;
}

export function IconMark({ size = 32, className = "" }: IconMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Circle — LA Poolside teal */}
      <circle cx="11" cy="11" r="9" fill="var(--color-la-poolside)" />
      {/* Square — Egg Custard Tart yellow */}
      <rect x="14" y="14" width="16" height="16" fill="var(--color-egg-custard-tart)" />
      {/* Triangle — Singapore Sling red */}
      <polygon points="16,4 28,26 4,26" fill="var(--color-singapore-sling)" opacity="0.92" />
    </svg>
  );
}
