"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "₹499",
    period: "/mo",
    description: "Perfect for individual bloggers",
    articles: "5,000",
    features: [
      "Up to 5,000 articles per month",
      "WordPress integration",
      "Basic SEO optimization",
      "Email support",
      "Content templates",
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Pro",
    price: "₹1,499",
    period: "/mo",
    description: "Ideal for agencies and growing businesses",
    articles: "20,000",
    features: [
      "Up to 20,000 articles per month",
      "Multi-site publishing",
      "Advanced SEO optimization",
      "Priority support",
      "Custom templates",
      "Team collaboration",
      "Analytics dashboard",
    ],
    gradient: "from-indigo-500 to-blue-500",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Pricing",
    description: "For large organizations with custom needs",
    articles: "Unlimited",
    features: [
      "Unlimited posts",
      "Custom endpoints",
      "White-label solution",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Advanced analytics",
    ],
    gradient: "from-cyan-500 to-teal-500",
    popular: false,
  },
]

function AnimatedCounter({
  target,
  duration = 2000,
  isVisible,
}: { target: number; duration?: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration, isVisible])

  return <span>{count.toLocaleString()}</span>
}

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { 
        threshold: 0.1, // Lower threshold for better mobile detection
        rootMargin: '50px 0px -50px 0px' // Trigger animation slightly before the element is fully visible
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 px-6 sm:px-8 md:px-10 relative overflow-hidden" id="pricing" ref={sectionRef}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Animated stats with intersection observer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/70 hover:scale-105 transition-all duration-500 group">
            <div className="text-5xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
              <AnimatedCounter target={50000} duration={4000} isVisible={isVisible} />+
            </div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Articles Generated</div>
            <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-4000 ${isVisible ? "w-full" : "w-0"}`}
              />
            </div>
          </div>

          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/70 hover:scale-105 transition-all duration-500 group">
            <div className="text-5xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
              <AnimatedCounter target={1200} duration={4000} isVisible={isVisible} />+
            </div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Active Users</div>
            <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full transition-all duration-4000 delay-1000 ${isVisible ? "w-full" : "w-0"}`}
              />
            </div>
          </div>

          <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/70 hover:scale-105 transition-all duration-500 group">
            <div className="text-5xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
              <AnimatedCounter target={99} duration={4000} isVisible={isVisible} />%
            </div>
            <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Uptime Guarantee</div>
            <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full transition-all duration-4000 delay-2000 ${isVisible ? "w-full" : "w-0"}`}
              />
            </div>
          </div>
        </div>
        
        <div className="relative text-center mb-16">
          <div className="absolute left-1/2 -top-8 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-x-1/2 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Simple, Scalable Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that fits your content needs. Scale up as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group
                ${
                  plan.popular
                    ? "bg-gradient-to-br from-gray-800/80 to-gray-700/60 border-blue-500/50 shadow-2xl shadow-blue-500/20"
                    : "bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 hover:border-gray-600/50"
                }
              `}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Floating decoration */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-sm group-hover:scale-150 transition-transform duration-500" />

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500">Up to {plan.articles} articles</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center group/item">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                    <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`
                  w-full py-4 rounded-2xl font-semibold transition-all duration-300 transform group-hover:scale-105
                  ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                      : "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500"
                  }
                `}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </Button>

              {/* Bottom decoration */}
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-gray-700/50 group-hover:border-gray-500/70 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
