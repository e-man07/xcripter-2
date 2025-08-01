"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4 relative" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_50%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
          Ready to Automate Your Content?
        </h2>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of content creators and businesses using Xcripter to scale their content production while
          maintaining quality and SEO performance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
          >
            Book a Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 bg-transparent"
          >
            Get Started
          </Button>
        </div>

        {/* Chat support mention */}
        <div className="flex justify-center items-center space-x-2 text-gray-400">
          <MessageCircle className="w-5 h-5" />
          <span>Need help? Our support team is available 24/7</span>
        </div>
      </div>
    </section>
  )
}
