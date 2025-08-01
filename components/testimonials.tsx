"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

// Add custom CSS for animations
const styles = `
  @keyframes slideProgress {
    from { width: 0%; }
    to { width: 100%; }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
  
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`

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
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 2000) // Slightly longer interval for better reading time
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
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

        <div className="relative overflow-hidden">
          {/* Sliding container */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm transition-all duration-500 ${
                  index === currentIndex 
                    ? 'scale-100 opacity-100 shadow-2xl shadow-blue-500/10' 
                    : 'scale-95 opacity-70'
                }`}>
                  <div className="text-center">
                    {/* Stars with stagger animation */}
                    <div className="flex justify-center mb-6 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 text-yellow-400 fill-current transform transition-all duration-300 ${
                            index === currentIndex ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
                          }`}
                          style={{ 
                            animationDelay: index === currentIndex ? `${i * 100}ms` : '0ms',
                            animation: index === currentIndex ? 'pulse 2s infinite' : 'none'
                          }}
                        />
                      ))}
                    </div>

                    {/* Quote with typing effect */}
                    <blockquote className={`text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto transition-all duration-700 ${
                      index === currentIndex 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}>
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author with slide-up animation */}
                    <div className={`flex items-center justify-center space-x-4 transition-all duration-500 delay-300 ${
                      index === currentIndex 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}>
                      <div className="relative">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className={`w-16 h-16 rounded-full object-cover transition-all duration-500 ${
                            index === currentIndex 
                              ? 'scale-100 ring-4 ring-blue-500/30' 
                              : 'scale-90'
                          }`}
                        />
                        {/* Animated ring */}
                        <div className={`absolute inset-0 rounded-full border-2 border-blue-400 transition-all duration-1000 ${
                          index === currentIndex 
                            ? 'scale-125 opacity-0' 
                            : 'scale-100 opacity-100'
                        }`} style={{ animation: index === currentIndex ? 'ping 2s infinite' : 'none' }} />
                      </div>
                      <div className="text-left">
                        <div className={`text-white font-semibold text-lg transition-all duration-300 ${
                          index === currentIndex ? 'text-white' : 'text-gray-400'
                        }`}>{testimonial.name}</div>
                        <div className={`text-gray-400 transition-all duration-300 ${
                          index === currentIndex ? 'text-gray-300' : 'text-gray-500'
                        }`}>{testimonial.designation}</div>
                        <div className={`text-blue-400 text-sm transition-all duration-300 ${
                          index === currentIndex ? 'text-blue-400' : 'text-blue-600'
                        }`}>{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Navigation */}
          <button
            onClick={prevTestimonial}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-gray-800/90 to-gray-700/90 hover:from-blue-600/80 hover:to-blue-500/80 border border-gray-600 hover:border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-100 transition-colors" />
          </button>
          <button
            onClick={nextTestimonial}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-r from-gray-800/90 to-gray-700/90 hover:from-blue-600/80 hover:to-blue-500/80 border border-gray-600 hover:border-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-100 transition-colors" />
          </button>

          {/* Enhanced Dots with progress indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`relative transition-all duration-300 disabled:cursor-not-allowed ${
                  index === currentIndex 
                    ? "w-8 h-3" 
                    : "w-3 h-3 hover:scale-125"
                }`}
              >
                <div className={`w-full h-full rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/50" 
                    : "bg-gray-600 hover:bg-gray-500"
                }`} />
                {/* Progress indicator for current slide */}
                {index === currentIndex && (
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-300 rounded-full transition-all duration-6000 ease-linear"
                    style={{ 
                      width: '0%',
                      animation: 'slideProgress 6s linear infinite'
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
