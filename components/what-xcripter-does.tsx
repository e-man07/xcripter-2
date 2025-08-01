"use client"

import { useState, useEffect, useRef } from "react"
import { Search, FileText, Globe, TrendingUp, Zap, Users } from "lucide-react"

const features = [
   {
     icon: Search,
     title: "Research Trending Topics",
     description: "AI analyzes trending topics and keywords in your niche automatically",
     gradient: "from-blue-500 to-cyan-500",
     mockupTitle: "AI Topic Research in Progress",
     mockupContent: "Analyzing trending keywords in 'AI automation' niche. Found 24/7 high-volume keywords with low competition.",
     mockupSubtext: "Discovering content opportunities that your competitors are missing.",
   },
  {
    icon: FileText,
    title: "Create SEO-Optimized Articles",
    description: "Generate high-quality, SEO-friendly content that ranks on search engines",
    gradient: "from-indigo-500 to-blue-500",
    mockupTitle: "SEO Article Generation Complete",
    mockupContent: "Generated 2,500-word article on 'Best AI Tools for Content Creation' with target keyword density of 1.2%.",
    mockupSubtext: "Optimized for featured snippets and semantic search ranking.",
  },
  {
    icon: Globe,
    title: "Auto Publish to WordPress & Custom Sites",
    description: "Seamlessly publish to WordPress, custom sites, and multiple platforms",
    gradient: "from-cyan-500 to-teal-500",
    mockupTitle: "Multi-Platform Publishing Active",
    mockupContent: "Successfully published to 3 WordPress sites and 2 custom platforms. All meta tags and images optimized.",
    mockupSubtext: "Content distributed across your entire digital ecosystem automatically.",
  },
  {
    icon: TrendingUp,
    title: "99% Uptime, 90% Accuracy",
    description: "Reliable performance with industry-leading accuracy rates",
    gradient: "from-blue-600 to-indigo-600",
    mockupTitle: "System Performance Dashboard",
    mockupContent: "Uptime: 99.7% | Content Accuracy: 94.2% | Articles Generated: 1,247 this month",
    mockupSubtext: "Consistent, reliable performance you can count on for your business.",
  },
  {
    icon: Zap,
    title: "Works Without Human Input",
    description: "Fully automated content pipeline that runs 24/7 without intervention",
    gradient: "from-teal-500 to-cyan-500",
    mockupTitle: "Autonomous Content Pipeline",
    mockupContent: "Running 24/7 automation. Generated 47 articles this week while you slept. Zero manual intervention required.",
    mockupSubtext: "Your content machine that never stops working for your business.",
  },
  {
    icon: Users,
    title: "Scalable for Agencies & Enterprises",
    description: "Built to handle high-volume content needs for growing businesses",
    gradient: "from-indigo-600 to-blue-600",
    mockupTitle: "Enterprise Scale Management",
    mockupContent: "Managing 15 client accounts, 50+ websites, generating 500+ articles monthly across all verticals.",
    mockupSubtext: "Scale your agency operations without scaling your headaches.",
  },
]

export function WhatXcripterDoes() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeFeature, setActiveFeature] = useState<number>(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  // Initialize feature refs array
  useEffect(() => {
    featureRefs.current = featureRefs.current.slice(0, features.length)
  }, [features.length])

  // Scroll detection for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = rect.height
      const sectionTop = rect.top
      const windowHeight = window.innerHeight

      // Check if section is in viewport with extended range for smoother transitions
      if (sectionTop <= windowHeight * 1.2 && sectionTop + sectionHeight >= -windowHeight * 0.2) {
        // Calculate scroll progress within the section (0 to 1)
        // Use a smaller denominator to make the effect more pronounced
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight * 0.8 + sectionHeight * 0.8)))
        setScrollProgress(progress)
        
        // Find which feature is most visible
        let mostVisibleFeature = 0
        let maxVisibility = 0
        
        featureRefs.current.forEach((ref, index) => {
          if (!ref) return
          
          const rect = ref.getBoundingClientRect()
          const visibility = calculateVisibility(rect, windowHeight)
          
          if (visibility > maxVisibility) {
            maxVisibility = visibility
            mostVisibleFeature = index
          }
        })
        
        if (mostVisibleFeature !== activeFeature) {
          setActiveFeature(mostVisibleFeature)
        }
      }
    }

    // Calculate how much of an element is visible in the viewport (0-1)
    const calculateVisibility = (rect: DOMRect, windowHeight: number) => {
      const elementHeight = rect.height
      const visibleTop = Math.max(0, rect.top)
      const visibleBottom = Math.min(windowHeight, rect.bottom)
      const visibleHeight = Math.max(0, visibleBottom - visibleTop)
      return visibleHeight / elementHeight
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeFeature])

  return (
    <section ref={sectionRef} className="py-24 px-4 relative overflow-hidden min-h-screen" id="features">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          {/* Scroll Progress Indicator */}
          <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto mb-10">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          
          {/* Fixed position indicator for mobile */}
          <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50 md:hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            What Can Xcripter Do?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to automate your content creation and publishing workflow
          </p>
        </div>

        {/* Modern alternating layout */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { featureRefs.current[index] = el }}
              className={`
                flex flex-col lg:flex-row items-center gap-12
                ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}
              `}
              style={{
                transform: `translateY(${activeFeature === index ? 0 : 40}px) scale(${activeFeature === index ? 1 : 0.97})`,
                opacity: activeFeature === index || hoveredIndex === index ? 1 : 0.6,
                transition: 'all 0.8s ease-out',
                boxShadow: activeFeature === index ? '0 10px 30px -15px rgba(0, 0, 0, 0.3)' : 'none'
              }}
            >
              {/* Content side */}
              <div className="flex-1 space-y-6">
                <div
                  className={`
                    inline-flex w-20 h-20 rounded-2xl items-center justify-center
                    bg-gradient-to-br ${feature.gradient} shadow-2xl
                    ${hoveredIndex === index || activeFeature === index ? "scale-110 shadow-3xl" : ""}
                    transition-all duration-500
                  `}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 hover:text-transparent hover:bg-gradient-to-r hover:from-white hover:to-gray-300 hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                <p className="text-lg text-gray-400 leading-relaxed max-w-lg">{feature.description}</p>

                {/* Decorative elements */}
                <div className="flex space-x-2 pt-4">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`
                        w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}
                        ${hoveredIndex === index ? "animate-pulse" : ""}
                      `}
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Visual side */}
              <div className="lg:w-1/2 relative p-6">
                <div
                  className={`
                    relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 
                    border border-gray-700/50 backdrop-blur-sm
                    ${hoveredIndex === index || activeFeature === index ? "border-gray-600/70" : ""}
                    transition-all duration-500 group
                  `}
                  style={{
                    transform: `${hoveredIndex === index || activeFeature === index ? "scale(1.05)" : "scale(1)"} translateY(${activeFeature === index ? -5 : 0}px)`,
                    transition: 'all 0.7s ease-out',
                    boxShadow: activeFeature === index ? '0 20px 40px -20px rgba(0, 0, 0, 0.5)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Animated background */}
                  <div
                    className={`
                      absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500
                      bg-gradient-to-br ${feature.gradient}
                    `}
                  />

                  {/* Content preview mockup */}
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${feature.gradient} ${activeFeature === index ? 'animate-pulse' : ''}`} />
                      <div className="text-white font-semibold">
                        {feature.title.split(" ")[0]} {feature.title.split(" ")[1]}
                      </div>
                    </div>

                    {/* Content lines */}
                    <div className="space-y-2 text-gray-300 text-sm">
                      <p className="font-semibold">{feature.mockupTitle}</p>
                      <p className="line-clamp-2">
                        {feature.mockupContent}
                      </p>
                      <p className="line-clamp-1">
                        {feature.mockupSubtext}
                      </p>
                    </div>

                    {/* Feature tags */}
                    <div className="flex space-x-2 pt-2">
                      <div
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} opacity-80 text-xs text-white font-medium`}
                      >
                        AI Powered
                      </div>
                      <div
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.gradient} opacity-60 text-xs text-white font-medium`}
                      >
                        Automated
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="flex items-center space-x-2 pt-2">
                      <div className="text-xs text-gray-400">Status:</div>
                      <div className="flex space-x-1">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse`} />
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse delay-200`}
                        />
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse delay-500`}
                        />
                      </div>
                      <div className="text-xs text-green-400 font-medium">Active</div>
                    </div>
                  </div>

                  {/* Floating icon */}
                  <div className="absolute top-0 right-0 w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute -z-10 top-1/4 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse" />
                <div className="absolute -z-10 bottom-1/4 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl animate-pulse delay-1000" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
