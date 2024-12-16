'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const services = [
  'Fruit-based ingredient solutions',
  'Custom formulations',
  'Technical support',
  'Quality assurance',
  'Sustainable sourcing',
]

export default function ServicesComparison() {
  return (
    <section className="py-20 px-4">
     
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Services</h3>
            <ul>
              {services.map((service, index) => (
                <motion.li 
                  key={service}
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CheckCircle className="text-green-500 mr-2" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

