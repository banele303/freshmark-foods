'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const partnershipTypes = [
  {
    name: 'Research Collaborations',
    description: 'Partner with academic institutions and research centers to drive innovation.',
  },
  {
    name: 'Supplier Partnerships',
    description: 'Build strong relationships with suppliers to ensure quality and sustainability.',
  },
  {
    name: 'Customer Co-Creation',
    description: 'Collaborate with customers to develop tailored solutions for their needs.',
  },
  {
    name: 'Startup Accelerator',
    description: 'Support and mentor food tech startups to foster industry growth.',
  },
]

const PartnershipPrograms = () => {
  const [selectedPartnership, setSelectedPartnership] = useState(null)

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Partnership Programs</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {partnershipTypes.map((partnership, index) => (
            <motion.div
              key={partnership.name}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedPartnership === index ? 'bg-purple-500 text-white' : 'bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPartnership(selectedPartnership === index ? null : index)}
            >
              <h3 className="text-xl font-semibold mb-2">{partnership.name}</h3>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedPartnership !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-8 p-6 bg-white rounded-lg shadow-md"
            >
              <p className="text-gray-600">{partnershipTypes[selectedPartnership].description}</p>
              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
                Learn More
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default PartnershipPrograms

