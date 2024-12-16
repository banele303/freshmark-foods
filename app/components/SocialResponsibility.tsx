'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const initiatives = [
  {
    title: 'Community Outreach',
    description: 'Supporting local communities through volunteer programs and donations.',
  },
  {
    title: 'Environmental Stewardship',
    description: 'Implementing sustainable practices to reduce our environmental impact.',
  },
  {
    title: 'Diversity & Inclusion',
    description: 'Fostering a diverse and inclusive workplace for all employees.',
  },
  {
    title: 'Ethical Sourcing',
    description: 'Ensuring our supply chain adheres to ethical and sustainable practices.',
  },
]

const SocialResponsibility = () => {
  const [activeInitiative, setActiveInitiative] = useState(0)

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Social Responsibility</h2>
        <div className="flex flex-wrap justify-center mb-8">
          {initiatives.map((initiative, index) => (
            <motion.button
              key={initiative.title}
              className={`m-2 px-4 py-2 rounded-full ${
                activeInitiative === index
                  ? 'bg-green-500 text-white'
                  : 'bg-white text-green-500'
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveInitiative(index)}
            >
              {initiative.title}
            </motion.button>
          ))}
        </div>
        <motion.div
          key={activeInitiative}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4">{initiatives[activeInitiative].title}</h3>
          <p className="text-gray-600">{initiatives[activeInitiative].description}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialResponsibility

