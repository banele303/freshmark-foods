'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    {
      image: '/placeholder.svg?height=600&width=1200',
      title: 'Innovating Food & Beverage Solutions',
      description: 'Discover how Ingredion is shaping the future of ingredients.'
    },
    {
      image: '/placeholder.svg?height=600&width=1200',
      title: 'Sustainable Sourcing',
      description: 'Our commitment to environmentally friendly practices.'
    },
    {
      image: '/placeholder.svg?height=600&width=1200',
      title: 'Global Reach, Local Touch',
      description: 'Serving customers worldwide with tailored solutions.'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Hero

