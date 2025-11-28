"use client"

export function EmberEmblem({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-heartbeat relative ${className}`}>
      <svg viewBox="0 0 100 120" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Glow effect */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="flameGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#7f1d1d" />
            <stop offset="40%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          <linearGradient id="rootGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#451a03" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Roots at the bottom */}
        <path
          d="M50 90 Q40 100 30 110 M50 90 Q50 105 50 115 M50 90 Q60 100 70 110"
          stroke="url(#rootGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="opacity-60"
        />
        <path
          d="M45 95 Q35 105 25 115 M55 95 Q65 105 75 115"
          stroke="url(#rootGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="opacity-40"
        />

        {/* Main flame */}
        <path
          d="M50 10 
             Q65 30 60 50 
             Q70 40 65 60 
             Q75 55 70 75 
             Q65 85 50 90 
             Q35 85 30 75 
             Q25 55 35 60 
             Q30 40 40 50 
             Q35 30 50 10Z"
          fill="url(#flameGradient)"
          filter="url(#glow)"
          className="opacity-90"
        />

        {/* Inner flame highlight */}
        <path
          d="M50 25 
             Q58 40 55 55 
             Q60 50 58 65 
             Q55 75 50 80 
             Q45 75 42 65 
             Q40 50 45 55 
             Q42 40 50 25Z"
          fill="#fcd34d"
          className="opacity-60"
        />

        {/* Center core */}
        <ellipse cx="50" cy="60" rx="8" ry="12" fill="#fef3c7" className="opacity-50" />
      </svg>

      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
    </div>
  )
}
