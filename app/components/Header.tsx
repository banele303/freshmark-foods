'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">Ingredion</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#products" className="text-gray-600 hover:text-blue-600">Products</Link>
          <Link href="#innovation" className="text-gray-600 hover:text-blue-600">Innovation</Link>
          <Link href="#sustainability" className="text-gray-600 hover:text-blue-600">Sustainability</Link>
          <Link href="#about" className="text-gray-600 hover:text-blue-600">About Us</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link href="#products" className="text-gray-600 hover:text-blue-600">Products</Link>
            <Link href="#innovation" className="text-gray-600 hover:text-blue-600">Innovation</Link>
            <Link href="#sustainability" className="text-gray-600 hover:text-blue-600">Sustainability</Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600">About Us</Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

