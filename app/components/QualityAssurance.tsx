'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const qualityStandards = [
  {
    name: 'ISO 9001',
    description: 'International standard for quality management systems.',
  },
  {
    name: 'FSSC 22000',
    description: 'Food Safety System Certification recognized by the Global Food Safety Initiative.',
  },
  {
    name: 'GFSI',
    description: 'Global Food Safety Initiative benchmarking requirements.',
  },
  {
    name: 'Halal & Kosher',
    description: 'Certifications for specific dietary requirements.',
  },
]

const QualityAssurance = () => {
  const [selectedStandard, setSelectedStandard] = useState(null)

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Quality Assurance</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {qualityStandards.map((standard, index) => (
            <motion.div
              key={standard.name}
              className={`p-4 rounded-lg cursor-pointer ${
                selectedStandard === index ? 'bg-green-500 text-white' : 'bg-white'
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedStandard(selectedStandard === index ? null : index)}
            >
              <h3 className="text-xl font-semibold mb-2">{standard.name}</h3>
              {selectedStandard === index && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm"
                >
                  {standard.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default QualityAssurance

