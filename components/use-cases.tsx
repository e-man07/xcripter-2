"use client"

import { useState, useEffect, useRef } from "react"
import { PenTool, Building, Newspaper, DollarSign, Rocket, BarChart } from "lucide-react"

const useCases = [
  {
    icon: PenTool,
    title: "Bloggers & Content Creators",
    description: "Scale your content output without sacrificing quality",
    gradient: "from-blue-500 to-cyan-500",
    stats: "10K+ Users",
  },
  {
    icon: Building,
    title: "Marketing Agencies",
    description: "Manage multiple client content needs efficiently",
    gradient: "from-indigo-500 to-blue-500",
    stats: "500+ Agencies",
  },
  {
    icon: Newspaper,
    title: "News Portals",
    description: "Stay ahead with automated news content generation",
    gradient: "from-cyan-500 to-teal-500",
    stats: "50+ Publications",
  },
  {
    icon: DollarSign,
    title: "Affiliate Marketers",
    description: "Create compelling product reviews and comparisons",
    gradient: "from-blue-600 to-indigo-600",
    stats: "2K+ Marketers",
  },
  {
    icon: Rocket,
    title: "SaaS Founders",
    description: "Build authority with consistent thought leadership content",
    gradient: "from-teal-500 to-cyan-500",
    stats: "300+ Startups",
  },
  {
    icon: BarChart,
    title: "SEO Experts",
    description: "Generate SEO-optimized content at large scale",
    gradient: "from-indigo-600 to-blue-600",
    stats: "1K+ Experts",
  },
]

export function UseCases() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  
  // Initialize card refs array
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, useCases.length)
  }, []);
  
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
        // Calculate scroll progress within the section (0 to 1) with more pronounced effect
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight * 0.8 + sectionHeight * 0.8)))
        setScrollProgress(progress)
        
        // Update visibility of each card based on its position
        cardRefs.current.forEach((ref, index) => {
          if (!ref) return
          
          const rect = ref.getBoundingClientRect()
          const visibility = calculateVisibility(rect, windowHeight)
          
          // Apply enhanced parallax effect based on visibility
          // More dramatic movement and scale changes
          const translateY = Math.max(0, 50 - (visibility * 50))
          const translateX = (index % 3 - 1) * (10 - visibility * 10) // Slight horizontal movement based on column position
          const scale = 0.92 + (visibility * 0.08)
          const opacity = 0.5 + (visibility * 0.5)
          const rotation = (index % 2 === 0 ? 1 : -1) * (1 - visibility) * 2 // Slight rotation effect
          
          // Apply shadow effect based on visibility
          const shadowIntensity = Math.floor(visibility * 20)
          
          ref.style.transform = `translateY(${translateY}px) translateX(${translateX}px) scale(${scale}) rotate(${rotation}deg)`
          ref.style.opacity = `${opacity}`
          ref.style.boxShadow = `0 ${shadowIntensity}px ${shadowIntensity * 2}px -${shadowIntensity}px rgba(59, 130, 246, ${visibility * 0.15})`
        })
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
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 relative min-h-screen overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Scroll progress indicator */}
      <div className="w-full h-1 bg-gray-800 fixed top-0 left-0 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ease-out" 
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      {/* Section progress indicator */}
      <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto mb-10 hidden md:block">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Who Is It For?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Xcripter empowers professionals across industries to automate their content strategy
          </p>
        </div>

        {/* Modern staggered card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
             key={index} 
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`p-6 rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 ${hoveredIndex === index ? 'transform scale-105 border-gray-700' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ 
                transition: 'transform 0.7s ease-out, opacity 0.7s ease-out, box-shadow 0.7s ease-out, border-color 0.3s ease',
                willChange: 'transform, opacity, box-shadow'
              }}
            >
              {/* Main card */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm group-hover:border-gray-600/70 transition-all duration-500 overflow-hidden">
                {/* Animated background */}
                <div
                  className={`
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500
                    bg-gradient-to-br ${useCase.gradient}
                  `}
                />

                {/* Floating orb */}
                <div
                  className={`
                    absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500
                    bg-gradient-to-br ${useCase.gradient} blur-xl
                  `}
                />

                {/* Icon container */}
                <div className="relative mb-6">
                  <div
                    className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center
                      bg-gradient-to-br ${useCase.gradient} shadow-lg
                      ${hoveredIndex === index ? "shadow-2xl scale-110 rotate-6" : ""}
                      transition-all duration-500
                    `}
                  >
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Stats badge */}
                  <div className="absolute -top-2 -right-2 px-2 py-1 bg-gray-800/80 border border-gray-600/50 rounded-lg text-xs text-blue-400 font-medium backdrop-blur-sm">
                    {useCase.stats}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {useCase.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6">
                  {useCase.description}
                </p>

                {/* Progress bar animation */}
                <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`
                      absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${useCase.gradient}
                      ${hoveredIndex === index ? "w-full" : "w-0"}
                      transition-all duration-1000 ease-out
                    `}
                  />
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gray-700/50 group-hover:border-gray-500/70 transition-colors duration-300" />
              </div>

              {/* Hover shadow effect */}
              <div
                className={`
                  absolute inset-0 rounded-3xl -z-10 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500
                  bg-gradient-to-br ${useCase.gradient}
                `}
              />
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  )
}
