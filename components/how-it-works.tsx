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
      if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
        // Calculate scroll progress within the section (0 to 1)
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)))
        setScrollProgress(progress)
        
        // Map scroll progress to step index
        const stepIndex = Math.floor(progress * steps.length)
        const clampedIndex = Math.max(0, Math.min(steps.length - 1, stepIndex))
        
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
                  ${activeStep === index ? `bg-gradient-to-b ${step.color}` : "bg-transparent"}
                `}
                />

                <div className="flex items-start space-x-4">
                  <div
                    className={`
                    w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300
                    ${activeStep === index ? `bg-gradient-to-br ${step.color} shadow-lg` : "bg-gray-800"}
                  `}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3
                      className={`
                      text-lg font-semibold mb-2 transition-colors duration-300
                      ${activeStep === index ? "text-white" : "text-gray-300"}
                    `}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  <div
                    className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                    ${activeStep === index ? `bg-gradient-to-br ${step.color} text-white` : "bg-gray-800 text-gray-500"}
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
              className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 backdrop-blur-sm transition-all duration-500"
              style={{
                transform: `translateX(${scrollProgress * 20 - 10}px)`,
                opacity: 0.8 + (scrollProgress * 0.2)
              }}
            >
              <div
                className={`
                w-20 h-20 rounded-2xl mb-6 flex items-center justify-center
                bg-gradient-to-br ${steps[activeStep].color} shadow-2xl
              `}
              >
                {React.createElement(steps[activeStep].icon, { className: "w-10 h-10 text-white" })}
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
