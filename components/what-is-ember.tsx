"use client"

import { useEffect, useRef, useState } from "react"
import { EmberParticles } from "./ember-particles"
import { RootLines } from "./root-lines"

export function WhatIsEmber() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" ref={sectionRef} className="relative min-h-screen overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      {/* Root lines decoration */}
      <RootLines className="bottom-0 left-0 right-0 h-40 opacity-30" />

      {/* Subtle particles */}
      <EmberParticles count={15} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Section label */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">About Ember</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-8 text-center">
            <p className="font-serif text-xl font-light leading-relaxed text-foreground/90 md:text-2xl">
              In rural villages and small communities, generations have relied on traditional remedies — powerful,
              time-tested treatments often unknown to the wider world. These remedies, passed down within small circles
              of 400–500 people, demonstrate remarkable real-world effectiveness but rarely reach beyond their local
              origins.
            </p>

            <p className="font-serif text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
              The modern medical market, constrained by costly approvals, patents, and certification processes, leaves
              small innovators behind. As a result, affordable, accessible, and culturally rooted healthcare solutions
              remain hidden from urban populations and global markets.
            </p>

            <p className="font-serif text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
              <span className="text-primary">Ember</span> is a startup and platform dedicated to discovering,
              validating, and scaling hidden medical innovations from grassroots communities. We act as a bridge between
              local wisdom and global healthcare, empowering rural healers and innovators through{" "}
              <span className="italic text-accent">Identification</span>,{" "}
              <span className="italic text-accent">Validation</span>,{" "}
              <span className="italic text-accent">Transformation</span> and{" "}
              <span className="italic text-accent">Distribution</span>.
            </p>
          </div>

          {/* Decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-xl" />
              <div className="relative h-1 w-1 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
