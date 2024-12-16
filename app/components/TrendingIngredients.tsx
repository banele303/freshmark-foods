'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ingredients = [
  { name: 'Pea Protein', image:'/images/juicej.png' },
  { name: 'Stevia', image: '/img/upfood.png' },
  { name: 'Tapioca Starch', image: '/images/condiments.png' },
  { name: 'Allulose', image: '/img/ajimg.webp' },
]

const TrendingIngredients = () => {
  const [hoveredIngredient, setHoveredIngredient] = useState(null)

  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">TRENDING</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              className="relative"
              
            >
              <Image
                src={ingredient.image}
                alt={ingredient.name}
                width={200}
                height={200}
                className="rounded-full mx-auto"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIngredient === index ? 1 : 0 }}
              >
                <p className="text-white text-center">{ingredient.name}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingIngredients

