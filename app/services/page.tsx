import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pressure Washing Services North Berwick Maine | House, Patio, Deck, Roof, Solar Panel & Window Cleaning",
  description:
    "Professional pressure washing services in North Berwick Maine and York County. House washing, patio cleaning, deck restoration, roof cleaning, solar panel cleaning, window cleaning, walkway cleaning, and commercial services. Free estimates available.",
  keywords: [
    "pressure washing services North Berwick Maine",
    "house washing North Berwick",
    "patio cleaning service Maine",
    "walkway cleaning North Berwick",
    "deck restoration North Berwick",
    "roof cleaning service York County",
    "solar panel cleaning Maine",
    "window cleaning North Berwick",
    "exterior window cleaning Maine",
    "fence washing Maine",
    "commercial pressure washing North Berwick",
    "exterior cleaning services 03906",
  ],
  openGraph: {
    title: "Professional Pressure Washing Services North Berwick Maine | Hose Water Pressure Washing LLC",
    description:
      "Complete pressure washing services including house washing, patio cleaning, walkway cleaning, deck restoration, solar panel cleaning, window cleaning, and more in North Berwick Maine and York County.",
  },
}

// Service data with orientations
const services = [
  {
    id: "house-washing",
    title: "House Washing Services",
    image: "/house-washing.png",
    orientation: "horizontal",
    description:
      "Our professional house washing service removes dirt, mold, mildew, and other organic material from your home's exterior surfaces. We use professional-grade equipment and techniques to safely clean vinyl siding, brick, stucco, and other exterior materials.",
    features: [
      "Removes dirt, mold, mildew, and algae from house exteriors",
      "Safe for all exterior surfaces including vinyl, brick, and stucco",
      "Improves curb appeal and property value",
      "Prevents damage from built-up contaminants",
    ],
    galleryFilter: "house",
  },
  {
    id: "deck",
    title: "Deck Cleaning & Restoration",
    image: "/deck-cleaning.png",
    orientation: "horizontal",
    description:
      "Our deck cleaning service revitalizes your outdoor deck spaces by removing dirt, mold, mildew and other organic growth. We carefully adjust our pressure washing techniques based on the material of your deck to ensure safe and effective cleaning.",
    features: [
      "Removes dirt, mold, and weathering from deck surfaces",
      "Safe for wood, composite, and stone deck surfaces",
      "Prepares deck surfaces for staining or sealing",
      "Extends the life of your outdoor deck spaces",
    ],
    galleryFilter: "deck",
  },
  {
    id: "patio-walkway",
    title: "Patio & Walkway Cleaning",
    image: "/patio-walkway-cleaning.png",
    orientation: "vertical",
    description:
      "Our patio and walkway cleaning service restores concrete, stone, and brick surfaces by removing dirt, stains, mold, and algae. We use appropriate pressure settings and techniques to clean without damaging your hardscape surfaces.",
    features: [
      "Removes dirt, stains, and organic growth from concrete surfaces",
      "Safe for concrete, stone, brick, and paver surfaces",
      "Improves safety by removing slippery algae and moss",
      "Restores original appearance of outdoor living spaces",
      "Also available: fence cleaning for vinyl and metal fences",
    ],
    galleryFilter: "patio-walkway",
  },
  {
    id: "solar-window",
    title: "Solar Panel & Window Cleaning",
    image: "/solar-window-cleaning.png",
    orientation: "horizontal",
    description:
      "Our specialized solar panel and exterior window cleaning service uses a water-fed pole system with deionized water to ensure a spot-free, streak-free finish. This method is safe for delicate surfaces and provides superior cleaning results.",
    features: [
      "Water-fed pole system for safe, ground-based cleaning",
      "Deionized water system leaves no spots or streaks",
      "Improves solar panel efficiency and energy output",
      "Crystal clear windows with professional results",
      "Safe cleaning method that won't damage panels or glass",
      "Extends the life of solar panels and windows",
    ],
    galleryFilter: "solar-window",
  },
  {
    id: "roof",
    title: "Roof Cleaning",
    image: "/roof-cleaning.png",
    orientation: "horizontal",
    description:
      "Our roof cleaning service safely removes black streaks, moss, and algae from your roof. We use low-pressure washing techniques and appropriate cleaning solutions to protect your roof while effectively removing unsightly growth and stains.",
    features: [
      "Removes black streaks, moss, and algae from roofs",
      "Prevents damage from organic growth",
      "Extends roof life and improves appearance",
    ],
    galleryFilter: "roof",
  },
  {
    id: "commercial",
    title: "Commercial Pressure Washing Services",
    image: "/commercial-cleaning.png",
    orientation: "horizontal",
    description:
      "Our commercial pressure washing services help maintain your rental properties, apartment buildings, and multi-unit properties' appearance and value.",
    features: [
      "Apartment building and duplex exterior cleaning",
      "Rental property maintenance and cleaning",
      "Multi-unit property exterior restoration",
      "Property management company services",
    ],
    galleryFilter: "commercial",
  },
]

export default function ServicesPage() {
  // Function to get the appropriate aspect ratio class
  const getAspectRatio = (orientation: string) => {
    return orientation === "vertical" ? "aspect-[3/4]" : "aspect-video"
  }

  return (
    <>
      {/* Structured Data for Service Pages */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: services.map((service, index) => ({
              "@type": "Service",
              position: index + 1,
              name: service.title,
              description: service.description,
              provider: {
                "@type": "LocalBusiness",
                name: "Hose Water Pressure Washing LLC",
              },
            })),
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

        {services.map((service, index) => (
          <section key={service.id} id={service.id} className="mt-16 scroll-mt-20">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div
                className={`relative ${getAspectRatio(service.orientation)} overflow-hidden rounded-lg ${index % 2 === 1 ? "order-1 md:order-2" : ""}`}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} in North Berwick Maine`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className={`space-y-4 ${index % 2 === 1 ? "order-2 md:order-1" : ""}`}>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-gray-500">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className="text-yellow-500 font-bold">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-4">
                  <Link href="/estimate">
                    <Button className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">Get a Quote</Button>
                  </Link>
                  <Link href={`/gallery?filter=${service.galleryFilter}`}>
                    <Button variant="outline" className="gap-2">
                      View Before & After <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}

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
