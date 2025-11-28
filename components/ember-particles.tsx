"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function EmberParticles({ count = 30 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.6 + 0.2,
      })
    }
    setParticles(newParticles)
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="animate-ember-drift absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            bottom: `-${particle.size}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(132,204,22,${particle.opacity}) 0%, rgba(101,163,13,${particle.opacity * 0.5}) 50%, rgba(132,204,22,0) 70%)`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(132,204,22,${particle.opacity})`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
