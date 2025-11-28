"use client"

export function RootLines({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rootLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#84cc16" stopOpacity="0" />
          <stop offset="50%" stopColor="#65a30d" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#84cc16" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M0 100 Q100 80 200 100 Q300 120 400 100"
        stroke="url(#rootLine)"
        strokeWidth="1"
        fill="none"
        className="opacity-40"
      />
      <path
        d="M0 120 Q80 100 160 120 Q240 140 320 120 Q380 100 400 110"
        stroke="url(#rootLine)"
        strokeWidth="0.5"
        fill="none"
        className="opacity-30"
      />
      <path
        d="M0 80 Q120 60 200 80 Q280 100 400 85"
        stroke="url(#rootLine)"
        strokeWidth="0.5"
        fill="none"
        className="opacity-20"
      />
    </svg>
  )
}
