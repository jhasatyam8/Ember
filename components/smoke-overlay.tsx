"use client"

export function SmokeOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Smoke layers */}
      <div
        className="animate-smoke-drift absolute -bottom-20 left-1/4 h-96 w-96 rounded-full bg-muted/20 blur-3xl"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="animate-smoke-drift absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-muted/15 blur-3xl"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="animate-smoke-drift absolute -bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-muted/10 blur-3xl"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
