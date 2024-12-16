'use client'

import { motion } from 'framer-motion'
import { BananaIcon as Fruit, Truck, ShieldCheck, FileCheck, FlaskRoundIcon as Flask } from 'lucide-react'
import ServiceCard from './service-card'

const services = [
  {
    title: "Processing and Packaging",
    description: "State-of-the-art facilities for washing, sorting, and packaging your fruits to maintain freshness and extend shelf life. Our advanced technologies ensure optimal handling of your produce.",
    icon: Fruit,
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Distribution and Logistics",
    description: "Efficient and reliable distribution network to deliver your products safely and on time. We offer temperature-controlled transportation and real-time tracking for complete peace of mind.",
    icon: Truck,
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Quality Control and Assurance",
    description: "Rigorous quality checks at every stage of processing to ensure your products meet the highest standards. Our team of experts uses cutting-edge technology for consistent quality assurance.",
    icon: ShieldCheck,
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Regulatory Compliance and Certification",
    description: "Comprehensive support for HACCP, Organic, Kosher, and other certifications. We stay up-to-date with global food safety regulations to ensure your products comply with international standards.",
    icon: FileCheck,
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Research and Development",
    description: "Innovative R&D services for new product development and flavor profiling. Our food scientists work closely with you to create unique, market-ready fruit products that stand out from the competition.",
    icon: Flask,
    image: "/placeholder.svg?height=400&width=600"
  }
]

export default function ServicesList() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Comprehensive Fruit Solutions</h2>
          <p className="text-xl text-gray-600">Discover our range of services designed to elevate your fruit business</p>
        </motion.div>
        <div className="grid gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

