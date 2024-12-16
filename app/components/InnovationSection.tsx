'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const innovations = [
  {
    title: 'Plant-Based Proteins',
    description: 'Innovative solutions for meat alternatives and plant-based products.',
  },
  {
    title: 'Clean Label Starches',
    description: 'Natural, minimally processed starches for clean label products.',
  },
  {
    title: 'Sugar Reduction',
    description: 'Advanced sweetener systems for reduced sugar applications.',
  },
]

const InnovationSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Innovation at Ingredion</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {innovations.map((innovation, index) => (
            <motion.div
              key={innovation.title}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <h3 className="text-xl font-semibold mb-2">{innovation.title}</h3>
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 overflow-hidden"
              >
                {innovation.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InnovationSection

