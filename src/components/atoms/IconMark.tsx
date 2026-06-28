interface IconMarkProps {
  size?: number;
  className?: string;
}

export function IconMark({ size = 32, className = "" }: IconMarkProps) {
  return (
    <svg
      width={size}
      viewBox="0 0 328 297"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M0 193.712H101.341V297H0V193.712ZM22.6234 216.776V273.936H78.7177V216.776H22.6234Z" fill="var(--color-singapore-sling)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M128.183 23.0644C110.515 23.0644 96.1996 37.6597 96.1996 55.6554C96.1996 73.6511 110.515 88.2465 128.183 88.2465C145.85 88.2465 160.166 73.6511 160.166 55.6554C160.166 37.6597 145.85 23.0644 128.183 23.0644ZM73.5762 55.6554C73.5762 24.914 98.028 0 128.183 0C158.337 0 182.789 24.914 182.789 55.6554C182.789 86.3969 158.337 111.311 128.183 111.311C98.028 111.311 73.5762 86.3969 73.5762 55.6554Z" fill="var(--color-la-poolside)" />
      <path fillRule="evenodd" clipRule="evenodd" d="M255.418 102L327.837 233.793H183L255.418 102ZM221.605 210.729H289.232L255.418 149.192L221.605 210.729Z" fill="var(--color-egg-custard-tart)" />
    </svg>
  );
}
