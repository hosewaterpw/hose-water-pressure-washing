/**
 * The Services page: all six services listed one after another, each with its
 * photo, description, bullet points, and buttons for a quote or the matching
 * before-and-after photos.
 * The services come from the admin area, so anything Jon adds there appears
 * here on its own - nobody needs to edit this file.
 */
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { getServices } from "@/lib/content"

export const metadata: Metadata = {
  alternates: {
    canonical: "/services",
  },
  title: "Pressure Washing Services | North Berwick, Maine",
  description:
    "Get top-rated pressure washing in North Berwick, Maine. Hose Water Pressure Washing offers expert house washing, roof cleaning, deck restoration, patio cleaning, and more throughout York County, Southern Maine, and New Hampshire. Family-owned and trusted since 2022.",
  keywords: [
    "pressure washing services North Berwick",
    "house washing Maine",
    "deck restoration York County",
    "roof cleaning services Maine"
  ],
  openGraph: {
    title: "Professional Pressure Washing Services North Berwick Maine | Hose Water Pressure Washing",
    description:
      "Complete pressure washing services including house washing, patio cleaning, walkway cleaning, deck restoration, solar panel cleaning, window cleaning, and more in North Berwick Maine and York County.",
  },
}

const services = getServices()

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

      <div className="container px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:py-12">
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
          <section key={service.id} id={service.id} className="mt-12 md:mt-16 scroll-mt-20">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div
                className={`relative ${"aspect-video"} overflow-hidden rounded-lg ${index % 2 === 1 ? "order-1 md:order-2" : ""}`}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} in North Berwick Maine`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
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
        <section className="mt-12 md:mt-16 py-12 px-6 bg-[#333333] text-white rounded-lg">
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
