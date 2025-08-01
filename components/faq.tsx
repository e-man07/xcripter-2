"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How accurate is the AI content?",
    answer:
      "Our AI maintains a 90% accuracy rate with continuous learning and improvement. All content goes through quality checks and can be customized to match your brand voice and style guidelines.",
  },
  {
    question: "Can I connect to multiple websites?",
    answer:
      "Yes! Xcripter supports multiple website connections including WordPress, custom CMS platforms, and various publishing endpoints. You can manage all your sites from a single dashboard.",
  },
  {
    question: "Do you support custom platforms?",
    answer:
      "Absolutely. We offer API access and custom integrations for enterprise clients. Our team can work with you to integrate Xcripter with your existing content management systems.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee for all plans. If you're not satisfied with Xcripter's performance, we'll provide a full refund within the first 30 days of your subscription.",
  },
  {
    question: "How does the content generation work?",
    answer:
      "Xcripter uses advanced AI models trained on high-quality content. It researches trending topics, analyzes your niche, generates SEO-optimized articles, and can automatically publish them to your connected platforms.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! We offer a 7-day free trial with access to all features. You can generate up to 100 articles during the trial period to test our platform's capabilities.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Common Questions
          </h2>
          <p className="text-xl text-gray-400">Everything you need to know about Xcripter</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
