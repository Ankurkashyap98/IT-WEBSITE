import { useId } from "react";

export default function BrandLogo({ size = 40, className = "" }) {
  const uid = useId().replace(/:/g, "");
  const gid = `brand-grad-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d9488" />
          <stop offset="0.55" stopColor="#14b8a6" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="#0f172a" />
      <path
        fill={`url(#${gid})`}
        d="M18 44V20h6l10 14V20h6v24h-6L24 30v14h-6z"
      />
      <circle cx="48" cy="18" r="4" fill="#5eead4" opacity="0.95" />
    </svg>
  );
}
