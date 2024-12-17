'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const researchAreas = [
  {
    title: 'Plant-Based Proteins',
    description: 'Developing innovative plant-based protein solutions for various applications.',
  },
  {
    title: 'Clean Label Ingredients',
    description: 'Researching natural, minimally processed ingredients for clean label products.',
  },
  {
    title: 'Texture Innovation',
    description: 'Exploring new ways to enhance and modify texture in food products.',
  },
  {
    title: 'Sugar Reduction',
    description: 'Investigating novel approaches to reduce sugar while maintaining taste and functionality.',
  },
]

const ResearchDevelopment = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Research & Development</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.03 }}
              
            >
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 overflow-hidden"
              >
                {area.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResearchDevelopment

