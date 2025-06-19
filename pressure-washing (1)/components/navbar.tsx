"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[#333333]">
      <div className="container flex h-16 items-center px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-32 overflow-hidden">
            <Image src="/logo.png" alt="Hose Water Pressure Washing LLC Logo" fill className="object-contain" />
          </div>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-white transition-colors hover:text-yellow-400">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium text-white transition-colors hover:text-yellow-400">
            Services
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-white transition-colors hover:text-yellow-400">
            Gallery
          </Link>
          <Link href="/about" className="text-sm font-medium text-white transition-colors hover:text-yellow-400">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white transition-colors hover:text-yellow-400">
            Contact
          </Link>
        </nav>
        <div className="ml-auto md:ml-4">
          <Link href="/estimate">
            <Button size="sm" className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">
              Free Estimate
            </Button>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-2 md:hidden border-white text-white">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#333333] text-white">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="hover:text-yellow-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/services"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/gallery"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/estimate"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Estimate
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
