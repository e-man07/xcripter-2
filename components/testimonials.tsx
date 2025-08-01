"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "We scaled from 50 to 10,000 posts per week using Xcripter. The quality is consistently high and our SEO rankings have improved dramatically.",
    name: "Sarah Chen",
    designation: "Content Director",
    company: "TechFlow Media",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    quote:
      "Our content team now has time to focus on strategy, not writing. Xcripter handles the heavy lifting while we focus on what matters most.",
    name: "Michael Rodriguez",
    designation: "Marketing Manager",
    company: "GrowthLabs",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    quote:
      "The ROI has been incredible. We're publishing 5x more content with the same team size, and our organic traffic has tripled.",
    name: "Emily Watson",
    designation: "SEO Specialist",
    company: "Digital Dynamics",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
  {
    quote:
      "As an agency, Xcripter has been a game-changer. We can now serve more clients without compromising on content quality.",
    name: "David Kim",
    designation: "Agency Owner",
    company: "ContentPro Agency",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Trusted by Creators and Agencies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what our customers are saying about their experience with Xcripter
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-400">{testimonials[currentIndex].designation}</div>
                  <div className="text-blue-400 text-sm">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`
                  w-3 h-3 rounded-full transition-colors
                  ${index === currentIndex ? "bg-blue-500" : "bg-gray-600"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
