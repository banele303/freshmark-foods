"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import MainImage from "../../../public/images/img5.png"

export function OurStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section ref={ref} className="pb-16 mt-[-9rem] md:mt-1 bg-[#f4f4f4]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div>
            <motion.h2 variants={childVariants} className="text-sm font-bold pt-10 mb-4 text-green-600">
              Our Story
            </motion.h2>
            <motion.h2
              variants={childVariants}
              className="text-2xl md:text-4xl font-bold mb-12 text-[#2c3e50]"
            >
              Introduction to Freshmark Foods
            </motion.h2>
            <motion.p variants={childVariants} className="text-lg text-[#34495e] leading-relaxed">
              Welcome to Freshmark Foods, we&apos;re passionate about 
              delivering high-quality, sustainable food solutions that
               nourish our communities and protect the planet. With
                a commitment to innovation, customer satisfaction, 
                and environmental stewardship, we&apos;ve established
                 ourselves as a trusted leader in the food industry.<br/><br/>
              Freshmark Foods has been at the forefront of the fresh produce industry since 1987. Our journey began with a simple yet powerful vision: to provide the freshest, highest quality fruits and vegetables to our customers.
            </motion.p>
            <motion.p 
              variants={childVariants}
              className="mt-4 text-lg text-[#34495e] leading-relaxed"
            >
              Over the years, we&apos;ve grown from a small local supplier to a national leader in fresh produce distribution, never losing sight of our commitment to quality, sustainability, and customer satisfaction.
            </motion.p>
          </div>
          <motion.div
            variants={childVariants}
            className="relative w-full md:w-3/4 mx-auto"
          >
            <Image
              src={MainImage}
              alt="Freshmark Foods farm"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

