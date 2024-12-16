'use client'

import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Our Services</h1>
        <p className="text-xl md:text-2xl text-white">Empowering your fruit business with innovative solutions</p>
      </motion.div>
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-80" />
        <img
          src="/images/condiments.png"
          alt="Fruit processing facility"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  )
}

