'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const products = [
  { title: 'Fruit Juices', img:'/images/bv3.png', description: 'Citrus, tropical, berries', icon: '🍹' },
  { title: 'Fruit Purees',  img:'/images/bv5.png', description: 'Citrus, tropical, berries', icon: '🥤' },
  { title: 'Fruit Sauces', img:'/images/condiments.png', description: 'Apple, berry, apricot', icon: '🍎' },
  { title: 'Fruit Jams and Preserves',  img:'/images/img5.png', description: 'Strawberry, grape', icon: '🍓' },
]

export default function ProductsSection() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-4xl mr-2">{product.icon}</span>
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>

              <div className="p-4 border rounded-lg shadow">
                    <Image
                        src={product.img}
                        alt={product.title}
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    </div>


                <CardDescription>{product.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

