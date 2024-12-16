"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, MapPin, Menu, Phone } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-[#3B332E] text-white py-6 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
          <div className="flex text-[17px] items-center gap-2 mb-2 lg:mb-0">
            <span className="text-[17px]">Need Help?</span>
            <Link 
              href="/contact" 
              className="text-[#8DC63F] hover:text-[#7ab32f] transition-colors"
            >
              Contact Us →
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#8DC63F]" />
              <Link href="mailto:info@freshmarkfoods.co.za" className="hover:text-[#8DC63F] transition-colors text-[17px]">
                info@freshmarkfoods.co.za
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#8DC63F] text-[17px]" />
              <span>33 Ballyclare Drive, Sandton, Bryanston, 2191</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img 
                src="/img/logo.png" 
                alt="Freshmark Foods" 
                className="h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link 
                href="/" 
                className="text-[17px] hover:text-[#8DC63F] transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/about-us" 
                className="text-[17px] hover:text-[#8DC63F] transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="/services" 
                className="text-[17px] hover:text-[#8DC63F] transition-colors"
              >
                Services
              </Link>
              <Link 
                href="/products" 
                className="text-[17px] hover:text-[#8DC63F] transition-colors"
              >
                Products
              </Link>
              <Link 
                href="/news" 
                className="text-[17px] hover:text-[#8DC63F] transition-colors"
              >
                News
              </Link>
              <Link 
                href="/contact" 
                className="text-[17px] hover:text-[#8DC63F] transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Phone Number - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="text-[17px]">+27 10 500 6454</span>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  <Link 
                    href="/" 
                    className="text-lg font-medium hover:text-[#8DC63F] transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/about-us" 
                    className="text-lg font-medium hover:text-[#8DC63F] transition-colors"
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/services" 
                    className="text-lg font-medium hover:text-[#8DC63F] transition-colors"
                  >
                    Services
                  </Link>
                  <Link 
                    href="/products" 
                    className="text-lg font-medium hover:text-[#8DC63F] transition-colors"
                  >
                    Products
                  </Link>
                  <Link 
                    href="/news" 
                    className="text-lg font-medium hover:text-[#8DC63F] transition-colors"
                  >
                    News
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-lg font-medium hover:text-[#8DC63F] transition-colors"
                  >
                    Contact Us
                  </Link>
                  <div className="flex items-center gap-2 pt-4">
                    <Phone className="h-5 w-5" />
                    <span className="text-[17px]">+27 10 500 6454</span>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}

