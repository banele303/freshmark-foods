'use client';

import { motion } from 'framer-motion';
import { BananaIcon as Fruit, Truck, ShieldCheck, FileCheck, FlaskRoundIcon as Flask } from 'lucide-react';
import ServiceCard from './service-card';

const services = [
  {
    title: "Processing and Packaging",
    description: "State-of-the-art facilities for washing, sorting, and packaging your fruits to maintain freshness and extend shelf life. Our advanced technologies ensure optimal handling of your produce.",
    icon: Fruit,
    image: "/img/aimg2.webp"
  },
  {
    title: "Distribution and Logistics",
    description: "Efficient and reliable distribution network to deliver your products safely and on time. We offer temperature-controlled transportation and real-time tracking for complete peace of mind.",
    icon: Truck,
    image: "/images/destribution.png"
  },
  {
    title: "Quality Control and Assurance",
    description: "Rigorous quality checks at every stage of processing to ensure your products meet the highest standards. Our team of experts uses cutting-edge technology for consistent quality assurance.",
    icon: ShieldCheck,
    image: "/images/bv6.png"
  },
  {
    title: "Regulatory Compliance and Certification",
    description: "Comprehensive support for HACCP, Organic, Kosher, and other certifications. We stay up-to-date with global food safety regulations to ensure your products comply with international standards.",
    icon: FileCheck,
    image: "/img/upfood.png"
  },
  {
    title: "Research and Development",
    description: "Innovative R&D services for new product development and flavor profiling. Our food scientists work closely with you to create unique, market-ready fruit products that stand out from the competition.",
    icon: Flask,
    image: "/images/research.png"
  }
];

export default function ServicesList() {
  return (
    <section className="py-20 px-2 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Comprehensive Fruit Solutions</h2>
          <p className="text-xl text-gray-600">Discover our range of services designed to elevate your fruit business</p>
        </motion.div>
        <div className="grid gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-lg bg-white"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ServiceCard service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
