'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const resources = [
  {
    title: 'Webinars',
    description: 'Join our expert-led webinars on various topics in food science and technology.',
    icon: '🖥️',
  },
  {
    title: 'White Papers',
    description: 'Access in-depth research and analysis on industry trends and innovations.',
    icon: '📄',
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step guides on using our products and solutions.',
    icon: '🎥',
  },
  {
    title: 'Recipe Database',
    description: 'Explore our collection of recipes and formulations using Ingredion products.',
    icon: '🍽️',
  },
]

const EducationResources = () => {
  const [expandedResource, setExpandedResource] = useState(null)

  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education Resources</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setExpandedResource(expandedResource === index ? null : index)}
            >
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedResource === index ? 'auto' : 0,
                  opacity: expandedResource === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 overflow-hidden"
              >
                {resource.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationResources

