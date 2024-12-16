'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const applications = [
  {
    name: 'Bakery',
    description: 'Innovative ingredients for breads, cakes, and pastries.',
  },
  {
    name: 'Beverages',
    description: 'Solutions for both alcoholic and non-alcoholic drinks.',
  },
  {
    name: 'Dairy',
    description: 'Enhancing texture and flavor in dairy products.',
  },
  {
    name: 'Snacks',
    description: 'Creating crunchy, flavorful, and healthier snack options.',
  },
]

const ApplicationAreas = () => {
  const [selectedApp, setSelectedApp] = useState(null)

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Application Areas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {applications.map((app, index) => (
            <motion.button
              key={app.name}
              className={`p-4 rounded-lg ${
                selectedApp === index ? 'bg-purple-500 text-white' : 'bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedApp(selectedApp === index ? null : index)}
            >
              {app.name}
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          {selectedApp !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-md"
            >
              <p className="text-gray-600">{applications[selectedApp].description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ApplicationAreas

