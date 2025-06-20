"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#333333] shadow-sm">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="relative h-8 w-24 sm:h-10 sm:w-32 overflow-hidden">
            <Image src="/logo.png" alt="Hose Water Pressure Washing LLC Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
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

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link href="/estimate">
            <Button size="sm" className="bg-yellow-400 text-[#333333] hover:bg-yellow-500 font-medium">
              Free Estimate
            </Button>
          </Link>
        </div>

        {/* Mobile CTA + Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/estimate">
            <Button size="sm" className="bg-yellow-400 text-[#333333] hover:bg-yellow-500 text-xs px-3 py-2">
              Quote
            </Button>
          </Link>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#333333] text-white border-gray-600 w-[280px] sm:w-[320px]">
              <div className="flex items-center justify-between mb-8">
                <div className="relative h-8 w-24 overflow-hidden">
                  <Image src="/logo.png" alt="Hose Water Pressure Washing LLC Logo" fill className="object-contain" />
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>

              <nav className="grid gap-4 text-lg font-medium">
                <SheetClose asChild>
                  <Link href="/" className="hover:text-yellow-400 transition-colors py-2 border-b border-gray-600">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/services"
                    className="hover:text-yellow-400 transition-colors py-2 border-b border-gray-600"
                  >
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/gallery"
                    className="hover:text-yellow-400 transition-colors py-2 border-b border-gray-600"
                  >
                    Gallery
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about" className="hover:text-yellow-400 transition-colors py-2 border-b border-gray-600">
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="hover:text-yellow-400 transition-colors py-2 border-b border-gray-600"
                  >
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/estimate" className="mt-4">
                    <Button className="w-full bg-yellow-400 text-[#333333] hover:bg-yellow-500 font-medium">
                      Get Free Estimate
                    </Button>
                  </Link>
                </SheetClose>
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-600">
                <div className="space-y-2 text-sm text-gray-300">
                  <p className="font-medium text-white">Contact Info</p>
                  <p>(207) 370-8667</p>
                  <p>hosewaterpw@gmail.com</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
