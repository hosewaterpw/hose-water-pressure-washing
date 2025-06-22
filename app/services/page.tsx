import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pressure Washing Services North Berwick Maine | House, Patio, Deck, Roof Cleaning",
  description:
    "Professional pressure washing services in North Berwick Maine and York County. House washing, patio cleaning, deck restoration, roof cleaning, walkway cleaning, and commercial services. Free estimates available.",
  keywords: [
    "pressure washing services North Berwick Maine",
    "house washing North Berwick",
    "patio cleaning service Maine",
    "walkway cleaning North Berwick",
    "deck restoration North Berwick",
    "roof cleaning service York County",
    "fence washing Maine",
    "commercial pressure washing North Berwick",
    "exterior cleaning services 03906",
  ],
  openGraph: {
    title: "Professional Pressure Washing Services North Berwick Maine | Hose Water Pressure Washing LLC",
    description:
      "Complete pressure washing services including house washing, patio cleaning, walkway cleaning, deck restoration, and more in North Berwick Maine and York County.",
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* Structured Data for Service Pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "Service",
                position: 1,
                name: "House Washing",
                description:
                  "Professional house washing service to remove dirt, mold, and mildew from exterior surfaces in North Berwick Maine",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Hose Water Pressure Washing LLC",
                },
              },
              {
                "@type": "Service",
                position: 2,
                name: "Deck Cleaning",
                description:
                  "Deck cleaning and restoration service to revitalize outdoor living spaces in North Berwick",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Hose Water Pressure Washing LLC",
                },
              },
              {
                "@type": "Service",
                position: 3,
                name: "Patio and Walkway Cleaning",
                description:
                  "Patio and walkway pressure washing services for concrete, stone, and brick surfaces in North Berwick Maine",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Hose Water Pressure Washing LLC",
                },
              },
              {
                "@type": "Service",
                position: 4,
                name: "Commercial Pressure Washing",
                description:
                  "Commercial pressure washing services for apartment buildings, duplexes, and rental properties in North Berwick Maine",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Hose Water Pressure Washing LLC",
                },
              },
            ],
          }),
        }}
      />

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Professional Pressure Washing Services
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Complete pressure washing services for residential and commercial properties throughout Southern Maine and
              New Hampshire.
            </p>
          </div>
        </div>

        {/* House Washing */}
        <section id="house-washing" className="mt-16 scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/house-washing.png"
                alt="Professional house washing service in North Berwick Maine"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">House Washing Services</h2>
              <p className="text-gray-500">
                Our professional house washing service removes dirt, mold, mildew, and other organic material from your
                home's exterior surfaces. We use professional-grade equipment and techniques to safely clean vinyl
                siding, brick, stucco, and other exterior materials.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Removes dirt, mold, mildew, and algae from house exteriors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Safe for all exterior surfaces including vinyl, brick, and stucco</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Improves curb appeal and property value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Prevents damage from built-up contaminants</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/estimate">
                  <Button className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">Get a Quote</Button>
                </Link>
                <Link href="/gallery?filter=house">
                  <Button variant="outline" className="gap-2">
                    View Before & After <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Deck Cleaning */}
        <section id="deck" className="mt-24 scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/deck-cleaning.png"
                alt="Deck cleaning service in North Berwick Maine"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Deck Cleaning & Restoration</h2>
              <p className="text-gray-500">
                Our deck cleaning service revitalizes your outdoor deck spaces by removing dirt, mold, mildew, and
                weathering. We carefully adjust our pressure washing techniques based on the material of your deck to
                ensure safe and effective cleaning.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Removes dirt, mold, and weathering from deck surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Safe for wood, composite, and stone deck surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Prepares deck surfaces for staining or sealing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Extends the life of your outdoor deck spaces</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/estimate">
                  <Button className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">Get a Quote</Button>
                </Link>
                <Link href="/gallery?filter=deck-patio">
                  <Button variant="outline" className="gap-2">
                    View Before & After <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Patio & Walkway Cleaning */}
        <section id="patio-walkway" className="mt-24 scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="order-1 md:order-2 relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/patio-walkway-cleaning.png"
                alt="Patio and walkway cleaning service in North Berwick Maine"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-1 space-y-4">
              <h2 className="text-3xl font-bold">Patio & Walkway Cleaning</h2>
              <p className="text-gray-500">
                Our patio and walkway cleaning service restores concrete, stone, and brick surfaces by removing dirt,
                stains, mold, and algae. We use appropriate pressure settings and techniques to clean without damaging
                your hardscape surfaces.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Removes dirt, stains, and organic growth from concrete surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Safe for concrete, stone, brick, and paver surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Improves safety by removing slippery algae and moss</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Restores original appearance of outdoor living spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Also available: fence cleaning for vinyl and metal fences</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/estimate">
                  <Button className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">Get a Quote</Button>
                </Link>
                <Link href="/gallery?filter=patio-walkway">
                  <Button variant="outline" className="gap-2">
                    View Before & After <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Roof Cleaning */}
        <section id="roof" className="mt-24 scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/roof-cleaning.png"
                alt="Roof cleaning service in North Berwick Maine"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Roof Cleaning</h2>
              <p className="text-gray-500">
                Our roof cleaning service safely removes black streaks, moss, and algae from your roof. We use
                low-pressure washing techniques and appropriate cleaning solutions to protect your roof while
                effectively removing unsightly growth and stains.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Removes black streaks, moss, and algae from roofs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Prevents damage from organic growth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Extends roof life and improves appearance</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/estimate">
                  <Button className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">Get a Quote</Button>
                </Link>
                <Link href="/gallery?filter=roof">
                  <Button variant="outline" className="gap-2">
                    View Before & After <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Services */}
        <section id="commercial" className="mt-24 scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="order-1 md:order-2 relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/commercial-cleaning.png"
                alt="Commercial pressure washing service in North Berwick Maine"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-1 space-y-4">
              <h2 className="text-3xl font-bold">Commercial Pressure Washing Services</h2>
              <p className="text-gray-500">
                Our commercial pressure washing services help maintain your rental properties, apartment buildings, and
                multi-unit properties' appearance and value.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Apartment building and duplex exterior cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Rental property maintenance and cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Multi-unit property exterior restoration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Property management company services</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/estimate">
                  <Button className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">Get a Quote</Button>
                </Link>
                <Link href="/gallery?filter=commercial">
                  <Button variant="outline" className="gap-2">
                    View Before & After <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 py-12 px-6 bg-[#333333] text-white rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Transform Your Property?</h2>
            <p className="max-w-[600px]">
              Contact us today to schedule pressure washing services or request a free estimate for your property.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/estimate">
                <Button size="lg" className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">
                  Get a Free Estimate
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
