"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="relative h-8 w-24 sm:h-10 sm:w-32 overflow-hidden">
            <Image src="/logo.png" alt="Hose Water Pressure Washing LLC Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-yellow-600">
            Home
          </Link>
          <Link href="/services" className="transition-colors hover:text-yellow-600">
            Services
          </Link>
          <Link href="/gallery" className="transition-colors hover:text-yellow-600">
            Gallery
          </Link>
          <Link href="/about" className="transition-colors hover:text-yellow-600">
            About
          </Link>
          <Link href="/faq" className="transition-colors hover:text-yellow-600">
            FAQ
          </Link>
          <Link href="/contact" className="transition-colors hover:text-yellow-600">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <Link href="/estimate">
            <Button className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">Get Free Estimate</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="container px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-yellow-600" onClick={closeMenu}>
              Home
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium transition-colors hover:text-yellow-600"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-sm font-medium transition-colors hover:text-yellow-600"
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-yellow-600"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium transition-colors hover:text-yellow-600"
              onClick={closeMenu}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-yellow-600"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link href="/estimate" onClick={closeMenu}>
              <Button className="w-full bg-yellow-400 text-[#333333] hover:bg-yellow-500">Get Free Estimate</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
