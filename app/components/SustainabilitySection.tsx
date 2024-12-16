'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const initiatives = [
  {
    title: 'Sustainable Sourcing',
    description: 'We work closely with farmers to ensure sustainable agricultural practices.',
  },
  {
    title: 'Water Conservation',
    description: 'Implementing water-saving technologies across our production facilities.',
  },
  {
    title: 'Renewable Energy',
    description: 'Transitioning to renewable energy sources in our operations.',
  },
]

const SustainabilitySection = () => {
  const [selectedInitiative, setSelectedInitiative] = useState(null)

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Sustainability Initiatives</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedInitiative === index ? 'bg-green-500 text-white' : 'bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedInitiative(selectedInitiative === index ? null : index)}
            >
              <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedInitiative !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-md"
            >
              <p className="text-gray-600">{initiatives[selectedInitiative].description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default SustainabilitySection

