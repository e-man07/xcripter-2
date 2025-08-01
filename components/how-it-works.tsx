"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { CreditCard, Bot, Search, Globe } from "lucide-react"

const steps = [
  {
    icon: CreditCard,
    title: "Choose Your Plan",
    description: "Select a subscription plan that fits your content needs",
    details:
      "Start with our flexible subscription plans. Choose from basic, pro, or enterprise tiers based on your content volume and feature requirements.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "Generate Content",
    description: "AI creates high-quality, engaging content for your niche",
    details:
      "Our advanced AI analyzes your requirements and generates compelling, original content tailored to your audience and industry.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Automatic SEO analysis and optimization for better rankings",
    details:
      "Built-in SEO tools analyze your content, suggest improvements, and optimize for search engines to maximize your organic reach.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Globe,
    title: "Auto Publish",
    description: "Content published directly to your WordPress site",
    details:
      "Seamlessly connect to your WordPress site and publish optimized content with proper formatting, images, and metadata automatically.",
    color: "from-blue-600 to-indigo-600",
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = rect.height
      const sectionTop = rect.top
      const windowHeight = window.innerHeight

      // Check if section is in viewport
      if (sectionTop <= windowHeight * 1.2 && sectionTop + sectionHeight >= -windowHeight * 0.2) {
        // Calculate scroll progress within the section (0 to 1)
        // Use a smaller denominator to make the effect more pronounced
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight * 0.8 + sectionHeight * 0.8)))
        setScrollProgress(progress)
        
        // Map scroll progress to step index with smoother transition
        // Use a more precise calculation that gives steps more screen time
        const stepCount = steps.length
        const stepProgress = progress * stepCount
        const stepIndex = Math.floor(stepProgress)
        const clampedIndex = Math.max(0, Math.min(stepCount - 1, stepIndex))
        
        setActiveStep(clampedIndex)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 relative min-h-screen">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How Xcripter Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            From subscription to publication, streamline your entire content workflow in four simple steps
          </p>
          
          {/* Scroll Progress Indicator */}
          <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto mb-4">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <p className="text-sm text-gray-500">Scroll to explore each step</p>
          
          {/* Fixed position indicator for mobile */}
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50 md:hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isActive = activeStep === index
              const stepProgress = Math.max(0, Math.min(1, (scrollProgress * steps.length) - index))
              const translateY = isActive ? 0 : (index - activeStep) * 10
              
              return (
                <div
                  key={index}
                  className={`
                    relative p-6 rounded-2xl cursor-pointer transition-all duration-500 transform
                    ${
                      isActive
                        ? "bg-gradient-to-r from-gray-800/80 to-gray-700/80 border-l-4 scale-105"
                        : "bg-gray-900/30 hover:bg-gray-800/50"
                    }
                    border border-gray-700/50 backdrop-blur-sm
                  `}
                  style={{
                    transform: `translateY(${translateY}px) scale(${isActive ? 1.05 : 1})`,
                    opacity: isActive ? 1 : 0.7 + (stepProgress * 0.3)
                  }}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`
                      absolute left-0 top-0 bottom-0 w-1 rounded-r-full transition-all duration-500
                      ${isActive ? `bg-gradient-to-b ${step.color}` : "bg-transparent"}
                    `}
                  />

                  <div className="flex items-start space-x-4">
                    <div
                      className={`
                        w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                        ${isActive ? `bg-gradient-to-br ${step.color} shadow-lg` : "bg-gray-800"}
                      `}
                    >
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`
                          text-lg font-semibold mb-2 transition-colors duration-300
                          ${isActive ? "text-white" : "text-gray-300"}
                        `}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                    </div>

                    <div
                      className={`
                        w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                        ${isActive ? `bg-gradient-to-br ${step.color} text-white` : "bg-gray-800 text-gray-500"}
                      `}
                    >
                      {index + 1}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Active step details */}
          <div className="relative">
            <div 
              className="p-8 rounded-2xl bg-gray-900/60 border border-gray-800 backdrop-blur-lg transition-all duration-700"
              style={{
                transform: `translateX(${(scrollProgress * 20) - 10}px)`,
                boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.5)'
              }}
            >
              <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${steps[activeStep].color}`}>
                  {React.createElement(steps[activeStep].icon, { className: "w-6 h-6 text-white" })}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">{steps[activeStep].title}</h3>

              <p className="text-gray-300 leading-relaxed text-lg">{steps[activeStep].details}</p>
            </div>

            {/* Animated connection lines */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
              <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent mx-auto animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
