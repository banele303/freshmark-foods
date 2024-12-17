"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HomeHero() {
  const [scrollY, setScrollY] = useState(0)
  const [isVideoBackground, setIsVideoBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      {isVideoBackground ? (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <source src="/onlyvideos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/fd1.png")',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <motion.div 
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ingredion: Leading the way in sustainability
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
Corporate Sustainability, highlights FreshMark&apos;s commitment to sustainability through innovative solutions and strategic partnerships.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              className="bg-[#8DC63F] hover:bg-[#7ab32f] text-white px-8 py-6 text-lg rounded-none transition-all duration-300 transform hover:scale-105"
            >
              Learn more
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Toggle Background Button */}
      <Button
        className="absolute bottom-4 right-4 bg-white/20 hover:bg-white/40 text-white"
        onClick={() => setIsVideoBackground(!isVideoBackground)}
      >
        Toggle Background
      </Button>
    </div>
  )
}

