import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#333333] text-white">
      <div className="container px-4 sm:px-6 md:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-24 sm:h-10 sm:w-32 overflow-hidden">
                <Image src="/logo.png" alt="Hose Water Pressure Washing LLC Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Professional pressure washing services for residential and commercial properties throughout Southern Maine
              and New Hampshire.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-yellow-400">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-sm hover:text-yellow-400 transition-colors">
                Services
              </Link>
              <Link href="/gallery" className="text-sm hover:text-yellow-400 transition-colors">
                Gallery
              </Link>
              <Link href="/about" className="text-sm hover:text-yellow-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm hover:text-yellow-400 transition-colors">
                Contact
              </Link>
              <Link href="/estimate" className="text-sm hover:text-yellow-400 transition-colors">
                Free Estimate
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-yellow-400">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services#house-washing" className="text-sm hover:text-yellow-400 transition-colors">
                House Washing
              </Link>
              <Link href="/services#deck" className="text-sm hover:text-yellow-400 transition-colors">
                Deck Cleaning
              </Link>
              <Link href="/services#roof" className="text-sm hover:text-yellow-400 transition-colors">
                Roof Cleaning
              </Link>
              <Link href="/services#patio-walkway" className="text-sm hover:text-yellow-400 transition-colors">
                Patio & Walkway Cleaning
              </Link>
              <Link href="/services#commercial" className="text-sm hover:text-yellow-400 transition-colors">
                Commercial Services
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-yellow-400">Contact Us</h3>
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">(207) 370-8667</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm break-all">hosewaterpw@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Serving Southern Maine and New Hampshire</span>
              </div>
              <div className="flex gap-3 sm:gap-4 mt-2">
                <Link href="https://g.co/kgs/ehG2MEi" target="_blank" rel="noopener noreferrer">
                  <div className="h-8 w-8 text-gray-300 hover:text-yellow-400 flex items-center justify-center bg-blue-600 rounded text-xs font-bold transition-colors">
                    G
                  </div>
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=100083339862959"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-8 w-8 text-gray-300 hover:text-yellow-400 transition-colors" />
                </Link>
                <Link
                  href="https://www.instagram.com/hosewaterpressurewashing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-8 w-8 text-gray-300 hover:text-yellow-400 transition-colors" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 border-t border-gray-700 pt-4 sm:pt-6">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} Hose Water Pressure Washing LLC. All rights reserved. Serving Southern Maine
            and New Hampshire.
          </p>
        </div>
      </div>
    </footer>
  )
}
