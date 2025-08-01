"use client"

import { useState, useEffect, useRef } from "react"
import { Bot, Search, Globe, Zap, FileText, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Content Generation",
    description: "Generate high-quality, engaging content tailored to your niche and audience",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Built-in SEO analysis and optimization to boost your search engine rankings",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "WordPress Integration",
    description: "Seamlessly publish content directly to your WordPress site with one click",
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Automated Publishing",
    description: "Schedule and automate your content publishing workflow for consistent output",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: FileText,
    title: "Content Templates",
    description: "Pre-built templates for blogs, articles, product descriptions, and more",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track content performance and optimize your strategy with detailed insights",
    gradient: "from-indigo-600 to-blue-600",
  },
]

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
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

      // Check if section is in viewport
      if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
        // Calculate scroll progress within the section (0 to 1)
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight * 0.7)))
        setScrollProgress(progress)
        
        // Check each feature card's visibility
        const newVisibleFeatures: number[] = []
        
        featureRefs.current.forEach((ref, index) => {
          if (!ref) return
          
          const rect = ref.getBoundingClientRect()
          const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2
          
          if (isVisible) {
            newVisibleFeatures.push(index)
          }
        })
        
        setVisibleFeatures(newVisibleFeatures)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-6 sm:px-8 md:px-10 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powerful Content Creation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, optimize, and publish high-quality content that drives results
          </p>
        </div>

        {/* Progress indicator */}
        <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto mb-16">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isVisible = visibleFeatures.includes(index)
            const featureProgress = Math.max(0, Math.min(1, scrollProgress * features.length - index))
            
            return (
              <div
                key={index}
                ref={(el) => { featureRefs.current[index] = el; }}
                className={`
                  group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 
                  border border-gray-700/50 backdrop-blur-sm transition-all duration-500 transform
                  ${isVisible || hoveredIndex === index ? 'border-gray-600/50 scale-105' : ''}
                `}
                style={{
                  transform: `translateY(${isVisible ? 0 : 20}px) scale(${isVisible ? 1.05 : 1})`,
                  opacity: isVisible ? 1 : 0.7,
                  transition: 'all 0.5s ease-out'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
              {/* Animated background gradient */}
              <div
                className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500
                bg-gradient-to-br ${feature.gradient}
              `}
              />

              {/* Icon with gradient background */}
              <div
                className={`
                w-16 h-16 rounded-xl mb-6 flex items-center justify-center
                bg-gradient-to-br ${feature.gradient} shadow-lg
                ${hoveredIndex === index || isVisible ? "shadow-2xl scale-110" : ""}
                transition-all duration-300
              `}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover effect border */}
              <div
                className={`
                absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                border-gradient-to-r ${feature.gradient}
              `}
              />
            </div>
          );
          })}
        </div>
      </div>
    </section>
  )
}
