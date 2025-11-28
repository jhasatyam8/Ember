"use client"

import { useEffect, useRef, useState } from "react"
import { Flame, FlaskConical, Package, HandHeart } from "lucide-react"

const howItWorks = [
  {
    icon: Flame,
    title: "Identification",
    description: "Finding remedies with authentic success stories and verified community impact.",
  },
  {
    icon: FlaskConical,
    title: "Validation",
    description: "Standardizing and testing them for scientific and regulatory compliance.",
  },
  {
    icon: Package,
    title: "Transformation",
    description: "Packaging, branding, and positioning them for modern markets.",
  },
  {
    icon: HandHeart,
    title: "Distribution",
    description: "Scaling their reach while ensuring creators receive royalties, recognition, and fair profit-sharing.",
  },
]

export function VisionSection() {
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
    <section ref={sectionRef} className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-20 text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="mb-4 font-serif text-4xl font-light text-foreground md:text-5xl lg:text-6xl">
            How Ember Works
          </h2>
          <p className="font-serif text-xl italic text-muted-foreground md:text-2xl">
            {'"Where tradition meets rebellion"'}
          </p>
        </div>

        {/* How it works cards - 4 columns */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, index) => (
            <div
              key={item.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative h-full overflow-hidden rounded-lg border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/20">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-2 font-serif text-lg font-medium text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* Mission block */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-3xl rounded-xl border border-border/30 bg-card/20 p-8 backdrop-blur-sm md:p-12">
            <h3 className="mb-6 font-serif text-2xl font-light text-foreground md:text-3xl">Our Mission</h3>
            <p className="font-serif text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
              Ember{"'"}s mission is simple yet revolutionary — to bring affordable, proven, and community-driven
              medical solutions to the world, igniting a new era of inclusive healthcare innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
