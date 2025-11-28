"use client"

import { EmberParticles } from "./ember-particles"
import { SmokeOverlay } from "./smoke-overlay"
import { RootLines } from "./root-lines"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  const scrollToNotify = () => {
    document.getElementById("notify-section")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToAbout = () => {
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-primary/10" />

      {/* Ambient glow - green */}
      <div className="animate-pulse-glow absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30" />
      <div
        className="animate-pulse-glow absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20"
        style={{ animationDelay: "1s" }}
      />

      {/* Root lines in background */}
      <RootLines className="absolute bottom-0 left-0 right-0 h-64 opacity-20" />

      {/* Smoke overlay */}
      <SmokeOverlay />

      {/* Ember particles */}
      <EmberParticles count={40} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Launching Soon Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/50 px-4 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-primary">Launching Soon</span>
        </div>

        <div className="animate-heartbeat mb-6">
          <Image
            src="/ember-logo.png"
            alt="Ember"
            width={400}
            height={120}
            className="h-auto w-[280px] md:w-[360px] lg:w-[420px]"
            priority
          />
        </div>

        {/* Subtitle */}
        <p className="mb-4 font-serif text-2xl font-light italic tracking-wide text-muted-foreground md:text-3xl lg:text-4xl">
          Roots to Revolution
        </p>

        {/* Tagline */}
        <p className="mb-6 max-w-xl text-balance text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
          A creative movement where ancient roots ignite modern revolutions.
        </p>

        {/* Hero paragraph */}
        <p className="mb-10 max-w-2xl text-balance text-base font-light leading-relaxed text-muted-foreground/80">
          From village huts to global shelves - Ember finds powerful remedies that have healed families for generations
          and brings them into the light, responsibly and with reverence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            onClick={scrollToNotify}
            className="group h-12 gap-2 bg-primary px-8 text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            <span>Notify Me</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={scrollToAbout}
            variant="ghost"
            className="h-12 px-6 text-muted-foreground transition-all duration-300 hover:text-foreground"
          >
            View Vision
          </Button>
        </div>

        {/* Decorative line */}
        <div className="mt-12 flex items-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="h-1.5 w-1.5 rotate-45 bg-primary/60" />
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll to reveal</span>
          <ChevronDown className="h-5 w-5" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
