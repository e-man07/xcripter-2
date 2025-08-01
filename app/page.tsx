import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhatXcripterDoes } from "@/components/what-xcripter-does"
import { HowItWorks } from "@/components/how-it-works"
import { UseCases } from "@/components/use-cases"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { LiveDemo } from "@/components/live-demo"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <WhatXcripterDoes />
      <HowItWorks />
      <UseCases />
      <Features />
      <Pricing />
      <LiveDemo />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
