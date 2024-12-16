'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'John Doe',
    company: 'FoodTech Inc.',
    testimonial: 'Ingredion\'s innovative solutions have transformed our product line.',
  },
  {
    name: 'Jane Smith',
    company: 'Global Beverages',
    testimonial: 'The quality and consistency of Ingredion\'s ingredients are unmatched.',
  },
  {
    name: 'Mike Johnson',
    company: 'Snack Masters',
    testimonial: 'Working with Ingredion has significantly improved our product development process.',
  },
]

const CustomerTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
        <div className="relative h-64">
          <AnimatePresence>
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-xl mb-4">"{testimonials[currentTestimonial].testimonial}"</p>
              <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
              <p className="text-sm text-gray-600">{testimonials[currentTestimonial].company}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonials

