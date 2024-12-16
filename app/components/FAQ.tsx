import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'How does Ingredion ensure product quality and safety?',
    answer: 'Ingredion maintains strict quality control measures throughout our supply chain. We adhere to international standards such as ISO 9001 and FSSC 22000, and conduct regular audits and testing to ensure product quality and safety.',
  },
  {
    question: 'What sustainability initiatives does Ingredion have in place?',
    answer: 'Ingredion is committed to sustainability through various initiatives, including sustainable sourcing practices, reducing water usage and carbon emissions, and investing in renewable energy. We have set ambitious sustainability goals to be achieved by 2030.',
  },
  {
    question: 'How can I become an Ingredion supplier or partner?',
    answer: 'To become an Ingredion supplier or partner, please visit our website’s "Suppliers" section and fill out the supplier application form. Our team will review your application and contact you if there’s a potential fit.',
  },
]

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={false}
              animate={{ backgroundColor: expandedIndex === index ? '#ffffff' : '#f0f7ff' }}
            >
              <motion.button
                className="flex justify-between items-center w-full p-4 rounded-lg focus:outline-none"
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform ${
                    expandedIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="p-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
