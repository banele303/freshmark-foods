'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="py-10  px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-2xl pt-[2rem] md:text-4xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Developing the Future of Food
        </motion.h2>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We are committed to empowering you to create consumer-preferred products that offer exceptional eating experiences with the on-trend benefits they desire.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
            <p>Pushing the boundaries of fruit-based products</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quality</h3>
            <p>Ensuring the highest standards in every product</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
            <p>Committed to environmentally friendly practices</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

