'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const newsItems = [
  {
    title: 'Ingredion Launches New Plant-Based Protein',
    date: '2023-05-15',
    summary: 'Ingredion introduces a revolutionary plant-based protein for meat alternatives.',
  },
  {
    title: 'Q1 2023 Financial Results Released',
    date: '2023-04-03',
    summary: 'Ingredion reports strong first quarter results, exceeding market expectations.',
  },
  {
    title: 'Sustainability Goals Update',
    date: '2023-03-22',
    summary: 'Ingredion announces progress on its 2025 sustainability goals, including reduced water usage and increased use of renewable energy.',
  },
  {
    title: 'New R&D Center Opens in Asia',
    date: '2023-02-10',
    summary: 'Ingredion expands its research capabilities with a new state-of-the-art R&D center in Singapore.',
  },
]

const NewsEvents = () => {
  const [expandedNews, setExpandedNews] = useState(null)

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">News & Events</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setExpandedNews(expandedNews === index ? null : index)}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.date}</p>
              <AnimatePresence>
                {expandedNews === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-gray-600"
                  >
                    {item.summary}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsEvents

