"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, FileText, TrendingUp, Users } from "lucide-react"

const templates = [
  {
    name: "Blog Post Master",
    description: "Generate → Optimize → Publish engaging blog posts",
    price: "Pro Plan",
    rating: 4.9,
    users: "12.3k",
    tags: ["Blog", "SEO", "Engagement"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Product Review Pro",
    description: "Create → Optimize → Post detailed product reviews",
    price: "Pro Plan",
    rating: 4.8,
    users: "8.7k",
    tags: ["Reviews", "E-commerce", "Affiliate"],
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    name: "News Article Writer",
    description: "Research → Write → Publish timely news content",
    price: "Enterprise",
    rating: 4.7,
    users: "5.2k",
    tags: ["News", "Journalism", "Trending"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    name: "Tutorial Creator",
    description: "Structure → Write → Publish step-by-step guides",
    price: "Basic Plan",
    rating: 4.9,
    users: "15.1k",
    tags: ["Tutorial", "Education", "How-to"],
    gradient: "from-blue-600 to-indigo-600",
  },
]

export function Marketplace() {
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Content Templates
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Pre-built templates for every content type, optimized for engagement and SEO performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-500 transform hover:scale-105 cursor-pointer"
              onMouseEnter={() => setHoveredTemplate(index)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              {/* Animated background */}
              <div
                className={`
                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500
                bg-gradient-to-br ${template.gradient}
              `}
              />

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`
                  w-12 h-12 rounded-xl flex items-center justify-center
                  bg-gradient-to-br ${template.gradient} shadow-lg
                  ${hoveredTemplate === index ? "scale-110" : ""}
                  transition-transform duration-300
                `}
                >
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1 text-yellow-400 mb-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{template.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 text-xs">
                    <Users className="w-3 h-3" />
                    <span>{template.users}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                {template.name}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{template.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {template.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="text-xs bg-gray-800/50 text-gray-300 border-gray-600/50"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div className="text-white">
                  <span className="text-sm font-bold">{template.price}</span>
                </div>
                <Button
                  size="sm"
                  className={`
                  bg-gradient-to-r ${template.gradient} hover:shadow-lg transition-all duration-300
                  ${hoveredTemplate === index ? "shadow-lg scale-105" : ""}
                `}
                >
                  Use Template
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: TrendingUp, value: "2M+", label: "Articles Published" },
            { icon: Users, value: "25K+", label: "Active Users" },
            { icon: FileText, value: "150+", label: "Content Templates" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/40 to-gray-800/20 border border-gray-700/30 backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
