'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const supplyChainSteps = [
  { name: 'Sourcing', icon: '🌾' },
  { name: 'Production', icon: '🏭' },
  { name: 'Quality Control', icon: '🔬' },
  { name: 'Packaging', icon: '📦' },
  { name: 'Distribution', icon: '🚚' },
]

const SupplyChain = () => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Supply Chain</h2>
        <div className="flex justify-center mb-8">
          {supplyChainSteps.map((step, index) => (
            <motion.div
              key={step.name}
              className={`flex flex-col items-center mx-4 cursor-pointer ${
                activeStep === index ? 'text-yellow-600' : 'text-gray-400'
              }`}
              whileHover={{ scale: 1.1 }}
              onClick={() => setActiveStep(index)}
            >
              <span className="text-4xl mb-2">{step.icon}</span>
              <span className="text-sm">{step.name}</span>
              {index < supplyChainSteps.length - 1 && (
                <div className="w-8 h-0.5 bg-gray-300 mt-2" />
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-2">{supplyChainSteps[activeStep].name}</h3>
          <p className="text-gray-600">
            Detailed information about the {supplyChainSteps[activeStep].name.toLowerCase()} process in our supply chain.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SupplyChain

