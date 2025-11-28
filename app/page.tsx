import { HeroSection } from "@/components/hero-section"
import { WhatIsEmber } from "@/components/what-is-ember"
import { VisionSection } from "@/components/vision-section"
import { NotifySection } from "@/components/notify-section"
import { Footer } from "@/components/footer"

export default function EmberLanding() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <HeroSection />
      <WhatIsEmber />
      <VisionSection />
      <NotifySection />
      <Footer />
    </main>
  )
}
