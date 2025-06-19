import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#333333] text-white">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-32 overflow-hidden">
                <Image src="/logo.png" alt="Hose Water Pressure Washing LLC Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-sm text-gray-300 mt-2">
              Professional pressure washing services for residential and commercial properties throughout Southern Maine
              and New Hampshire.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-yellow-400">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-yellow-400">
                Home
              </Link>
              <Link href="/services" className="text-sm hover:text-yellow-400">
                Services
              </Link>
              <Link href="/gallery" className="text-sm hover:text-yellow-400">
                Gallery
              </Link>
              <Link href="/about" className="text-sm hover:text-yellow-400">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:text-yellow-400">
                Contact
              </Link>
              <Link href="/estimate" className="text-sm hover:text-yellow-400">
                Free Estimate
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-yellow-400">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services#house-washing" className="text-sm hover:text-yellow-400">
                House Washing
              </Link>
              <Link href="/services#patio" className="text-sm hover:text-yellow-400">
                Patio & Walkway Cleaning
              </Link>
              <Link href="/services#deck" className="text-sm hover:text-yellow-400">
                Deck Cleaning
              </Link>
              <Link href="/services#roof" className="text-sm hover:text-yellow-400">
                Roof Cleaning
              </Link>
              <Link href="/services#fence" className="text-sm hover:text-yellow-400">
                Fence Washing
              </Link>
              <Link href="/services#commercial" className="text-sm hover:text-yellow-400">
                Commercial Services
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4 text-yellow-400">Contact Us</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-yellow-400 mt-0.5" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-yellow-400 mt-0.5" />
                <span className="text-sm">info@hosewaterpw.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-yellow-400 mt-0.5" />
                <span className="text-sm">Serving Southern Maine and New Hampshire within 40-mile radius</span>
              </div>
              <div className="flex gap-4 mt-2">
                <Link href="https://g.co/kgs/ehG2MEi" target="_blank" rel="noopener noreferrer">
                  <div className="h-5 w-5 text-gray-300 hover:text-yellow-400 flex items-center justify-center bg-blue-600 rounded text-xs font-bold">
                    G
                  </div>
                </Link>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-gray-300 hover:text-yellow-400" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 text-gray-300 hover:text-yellow-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Hose Water Pressure Washing LLC. All rights reserved. Serving Southern Maine
            and New Hampshire.
          </p>
        </div>
      </div>
    </footer>
  )
}
