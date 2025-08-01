"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Loader } from "lucide-react"

export function LiveDemo() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [demoText, setDemoText] = useState("")
  const [currentStep, setCurrentStep] = useState(0)

  const demoSteps = [
    "Analyzing trending topics...",
    "Researching 'Top AI Tools for 2025'...",
    "Generating SEO-optimized content...",
    "Optimizing for search engines...",
    "Content ready for publishing!",
  ]

  // Store content as an array of lines to avoid encoding issues
  const contentLines = [
    "# The Future of Content: How AI is Revolutionizing the WordPress Ecosystem",
    "",
    "In an era where content is king, the WordPress ecosystem stands as a dominant force, powering over 40% of the web. However, the methods of content creation are undergoing a seismic shift, thanks to the power of Artificial Intelligence.",
    "",
    "AI is not just a buzzword. It is a transformative technology that is redefining the entire content lifecycle, from ideation to publication and beyond.",
    "",
    "## From Manual Labor to Automated Brilliance",
    "",
    "For years, creating high-quality, SEO-optimized content has been a labor-intensive process involving hours of research, writing, and editing. AI agents, like Xcripter, are changing the game by automating these tedious tasks.",
    "",
    "### Key AI-Powered Capabilities:",
    "",
    "• Intelligent Topic Analysis: AI can analyze trending topics and keyword volumes to suggest blog post ideas that are destined to rank.",
    "",
    "• Automated Content Generation: With a simple prompt, AI can draft comprehensive, well-structured articles in minutes.",
    "",
    "• SEO Optimization: AI agents seamlessly integrate SEO best practices, ensuring that every piece of content is optimized for search engines.",
    "",
    "## The Xcripter Advantage",
    "",
    "While many AI tools exist, Xcripter is purpose-built for WordPress, offering a level of integration that standalone tools cannot match. Imagine generating an article, optimizing it for a target keyword, and publishing it directly to your WordPress site.",
    "",
    "This is not just about writing faster. It is about writing smarter. Welcome to the new age of content creation."
  ]

  const startDemo = () => {
    setIsGenerating(true)
    setDemoText("")
    setCurrentStep(0)

    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < demoSteps.length - 1) {
          return prev + 1
        } else {
          clearInterval(stepInterval)
          setTimeout(() => {
            setIsGenerating(false)
            typeContent()
          }, 1000)
          return prev
        }
      })
    }, 1500)
  }

  const typeContent = () => {
    let lineIndex = 0
    let currentText = ""
    
    const typeInterval = setInterval(() => {
      if (lineIndex < contentLines.length) {
        // Add each line with proper line breaks
        currentText += (lineIndex > 0 ? "\n" : "") + contentLines[lineIndex]
        setDemoText(currentText)
        lineIndex++
      } else {
        clearInterval(typeInterval)
      }
    }, 300) // Show one line every 300ms
  }

  return (
    <section className="py-24 px-4 relative" id="demo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            See It in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch Xcripter generate high-quality, SEO-optimized content in real-time
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Live AI Demo</h3>
            <Button
              onClick={startDemo}
              disabled={isGenerating}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0"
            >
              {isGenerating ? (
                <>
                  <Loader className="w-4 h-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 mr-2" />
                  Start Demo
                </>
              )}
            </Button>
          </div>

          <div className="bg-black/50 rounded-xl p-6 min-h-[400px] font-mono text-sm">
            {isGenerating ? (
              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`
                      flex items-center transition-all duration-500
                      ${index <= currentStep ? "text-green-400" : "text-gray-600"}
                    `}
                  >
                    {index < currentStep ? (
                      <span className="mr-2">✓</span>
                    ) : index === currentStep ? (
                      <Loader className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <span className="mr-2">○</span>
                    )}
                    {step}
                  </div>
                ))}
              </div>
            ) : demoText ? (
              <div className="text-gray-300 whitespace-pre-wrap">
                {demoText}
                <span className="animate-pulse">|</span>
              </div>
            ) : (
              <div className="text-gray-500 text-center py-20">
                Click "Start Demo" to see Xcripter generate content in real-time
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
