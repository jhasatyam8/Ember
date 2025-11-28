"use client"

import { Instagram, Linkedin, Send } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/109626625/admin/dashboard/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/ember_wellness_?igsh=am1vd3pmY3VjcWRi", label: "Instagram" },
  { icon: Send, href: "#", label: "Telegram" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-card/30 py-12">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="flex flex-col items-center gap-8">
          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-border/50 bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
              >
                <social.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-center font-serif text-sm italic text-muted-foreground">
            Rooted in wisdom, ignited for the world.
          </p>

          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/30" />
            <Image src="/ember-logo.png" alt="Ember" width={80} height={24} className="h-6 w-auto opacity-60" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/30" />
          </div>

          {/* Legal microcopy */}
          <p className="max-w-md text-center text-xs text-muted-foreground/50">
            Ember - Roots to Revolution. We honor traditional knowledge and commit to ethical, transparent partnerships.
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/40">© {new Date().getFullYear()} Ember. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
