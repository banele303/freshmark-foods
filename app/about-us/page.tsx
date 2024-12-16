"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutUs() {
  return (
    <motion.div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-green-600 text-white py-16">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Freshmark Foods
          </h1>
          <p className="text-xl md:text-2xl">
            Delivering fresh produce since 1987
          </p>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Our Story Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-8">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4">
                Freshmark Foods has been at the forefront of the fresh produce
                industry since 1987. Our journey began with a simple yet powerful
                vision: to provide the freshest, highest quality fruits and
                vegetables to our customers.
              </p>
              <p className="text-lg">
                Over the years, we&apos;ve grown from a small local supplier to a
                national leader in fresh produce distribution, never losing sight
                of our commitment to quality, sustainability, and customer
                satisfaction.
              </p>
            </div>
            <motion.div
              className="relative h-[300px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/img/manufacturing.jpeg"
                alt="Freshmark Foods history"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Freshness Guaranteed", description: "We ensure that every product we deliver is as fresh as the day it was harvested." },
              { title: "Nationwide Reach", description: "Our extensive network allows us to deliver top-quality produce anywhere in the country." },
              { title: "Customer-Centric Approach", description: "We prioritize the needs of our customers above all else." },
            ].map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p>{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Milestones Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8">Our Milestones</h2>
          <ul className="space-y-4">
            {[
              { year: "1987", milestone: "Founded as a small produce supplier." },
              { year: "1995", milestone: "Expanded to multiple regions nationwide." },
              { year: "2005", milestone: "Launched our first sustainability initiative." },
              { year: "2020", milestone: "Surpassed 1,000 satisfied corporate clients." },
            ].map((item, index) => (
              <motion.li
                key={item.year}
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <div className="text-green-600 font-bold text-2xl">
                  {item.year}
                </div>
                <p className="text-lg">{item.milestone}</p>
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Customer Testimonials Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Emily R.", feedback: "Freshmark Foods has never let us down. Their produce is always fresh and their service is outstanding!" },
              { name: "Michael B.", feedback: "I’ve been a customer for years, and I can confidently say that they are the best in the business." },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              >
                <p className="text-lg mb-4">"{testimonial.feedback}"</p>
                <h3 className="font-semibold text-green-600">
                  - {testimonial.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join Our Team */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-lg mb-6">
                We&apos;re always looking for passionate individuals to join our
                growing team. If you&apos;re interested in a career with Freshmark
                Foods, we&apos;d love to hear from you.
              </p>
              <Button size="lg">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.section>
      </main>
    </motion.div>
  )
}
