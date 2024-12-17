'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "What makes your fruit products unique?",
    answer: "Our fruit products are crafted using innovative techniques that preserve the natural flavors and nutritional benefits of the fruits. We focus on creating clean label products that meet consumer demands for healthier, more natural options."
  },
  {
    question: "How do you ensure the quality of your products?",
    answer: "We maintain strict quality control measures throughout our production process. This includes carefully selecting our fruit suppliers, using state-of-the-art processing techniques, and conducting rigorous testing at every stage of production."
  },
  {
    question: "Can you create custom fruit-based solutions?",
    answer: "We specialize in developing custom fruit-based solutions tailored to our clients' specific needs. Our team of food scientists and flavor experts work closely with clients to create unique products that meet their exact specifications."
  },
  {
    question: "How do you support sustainability in your operations?",
    answer: "Sustainability is a core value in our operations. We work with responsible fruit growers, implement water and energy-saving measures in our production facilities, and use eco-friendly packaging wherever possible. We're constantly looking for ways to reduce our environmental impact."
  }
]

export default function FRQSection() {
  return (
    <section className="py-20 px-[1rem] bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[22px] md:text-4xl font-bold text-center mb-12">Frequently Requested Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left p-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2 p-4 bg-gray-50 rounded-lg"
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

