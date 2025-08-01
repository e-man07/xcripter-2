"use client"

import { useState } from "react"
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

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
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
              className="group relative transform transition-all duration-700 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
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
