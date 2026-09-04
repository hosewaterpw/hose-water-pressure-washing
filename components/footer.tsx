"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import type { Business, Social } from "@/lib/content"

// Pinned to the viewport bottom. Its height changes as the contact row wraps at
// different widths, so it publishes its own height as --footer-h and <main> pads
// by that. Hardcoding the padding per breakpoint was off by 25px at some widths.
export default function Footer({ business, social }: { business: Business; social: Social }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const setHeight = () => document.documentElement.style.setProperty("--footer-h", `${el.offsetHeight}px`)
    setHeight()
    const observer = new ResizeObserver(setHeight)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <footer
      ref={ref}
      className="fixed bottom-0 left-0 right-0 z-40 w-full border-t border-gray-700 bg-[#333333] text-white"
    >
      <div className="container px-4 py-3 sm:px-6 md:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          {/* Logo on the left */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-12 w-36 overflow-hidden sm:h-14 sm:w-40">
              <Image
                src="/logo.png"
                alt={`${business.name} Logo`}
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
          </Link>

          <div className="min-w-0 flex-1">
            {/* Line 1 - contact details and social icons */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
              <span className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0 text-yellow-400" aria-hidden="true" />
                <a href={`tel:${business.phoneDial}`} className="text-base transition-colors hover:text-yellow-400">
                  {business.phoneDisplay}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 text-yellow-400" aria-hidden="true" />
                <a
                  href={`mailto:${business.email}`}
                  className="break-all text-base transition-colors hover:text-yellow-400"
                >
                  {business.email}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 text-yellow-400" aria-hidden="true" />
                <span className="text-base">{business.serviceArea}</span>
              </span>

              <span className="flex items-center gap-3">
                <Link
                  href={social.google || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded bg-blue-600 text-sm font-bold text-white transition-colors hover:bg-blue-500">
                    G
                  </span>
                </Link>
                <Link
                  href={social.facebook || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${business.name} on Facebook`}
                >
                  <Facebook className="h-7 w-7 text-gray-300 transition-colors hover:text-yellow-400" />
                </Link>
                <Link
                  href={social.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${business.name} on Instagram`}
                >
                  <Instagram className="h-7 w-7 text-gray-300 transition-colors hover:text-yellow-400" />
                </Link>
              </span>
            </div>

            {/* Line 2 - copyright */}
            <div className="mt-1 flex justify-center">
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} {business.name}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
