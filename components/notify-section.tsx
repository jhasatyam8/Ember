"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EmberParticles } from "./ember-particles"
import { ArrowRight, Check } from "lucide-react"

export function NotifySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Countdown timer - fixed target date: January 1, 2026
  useEffect(() => {
    if (!isMounted) return

    const targetDate = new Date("2026-01-01T00:00:00")

    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()

      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [isMounted])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section id="notify-section" ref={sectionRef} className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />

      {/* Ambient glow */}
      <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10" />

      {/* Particles */}
      <EmberParticles count={20} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Header */}
          <h2 className="mb-4 font-serif text-4xl font-light text-foreground md:text-5xl">
            The Revolution Begins Soon
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">Be among the first to witness the awakening.</p>

          {/* Countdown */}
          <div className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">Launching In</div>
          <div className="mb-12 flex justify-center gap-4 md:gap-8">
            {[
              { label: "Days", value: countdown.days },
              { label: "Hours", value: countdown.hours },
              { label: "Minutes", value: countdown.minutes },
              { label: "Seconds", value: countdown.seconds },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm md:h-20 md:w-20">
                  <span className="font-mono text-2xl font-light text-foreground md:text-3xl">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-6 py-4">
                <Check className="h-5 w-5 text-primary" />
                <span className="text-foreground">You will be notified when we launch.</span>
              </div>
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Input
                    type="email"
                    placeholder="your email@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 border-border/50 bg-card/50 pr-4 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20"
                  />
                  {/* Glow effect */}
                  <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-primary/0 transition-all duration-300 focus-within:ring-primary/30" />
                </div>
                <Button
                  type="submit"
                  className="group h-12 gap-2 bg-primary px-6 text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
                >
                  <span>Get Notified</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            )}
          </form>

          <p className="mt-4 text-xs text-muted-foreground/70">
            We protect community rights. Creators receive royalties, recognition, and fair profit-sharing. By joining
            you support ethical validation and responsible scaling.
          </p>
        </div>
      </div>
    </section>
  )
}
