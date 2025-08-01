"use client"

import { useState } from "react"
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

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powerful Content Creation
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, optimize, and publish high-quality content that drives results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-500 transform hover:scale-105"
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
                ${hoveredIndex === index ? "shadow-2xl scale-110" : ""}
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
          ))}
        </div>
      </div>
    </section>
  )
}
