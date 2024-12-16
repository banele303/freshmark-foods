'use client'

import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: LucideIcon
    image: string
  }
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          <div className="md:w-1/2">
            <motion.img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="md:w-1/2 p-6">
            <CardHeader>
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-purple-500 mr-2" />
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{service.description}</CardDescription>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

