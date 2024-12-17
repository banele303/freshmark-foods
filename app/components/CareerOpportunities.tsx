'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const jobCategories = [
  { name: 'Research & Development', count: 15 },
  { name: 'Sales & Marketing', count: 10 },
  { name: 'Operations', count: 8 },
  { name: 'Quality Assurance', count: 5 },
]

const CareerOpportunities = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Career Opportunities</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {jobCategories.map((category, index) => (
            <motion.div
              key={category.name}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedCategory === index ? 'bg-blue-500 text-white' : 'bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
              
            >
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p>{category.count} open positions</p>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedCategory !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">
                {jobCategories[selectedCategory].name} Opportunities
              </h3>
              <p className="text-gray-600 mb-4">
                Explore exciting career opportunities in our {jobCategories[selectedCategory].name} department.
                We&apos;re looking for talented individuals to join our team and make a difference.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                View Open Positions
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default CareerOpportunities

