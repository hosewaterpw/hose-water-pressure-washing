import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pressure Washing Services North Berwick Maine | House, Patio, Deck, Roof Cleaning",
  description:
    "Professional pressure washing services in North Berwick Maine and York County. House washing, patio cleaning, deck restoration, roof cleaning, fence washing, and commercial services. Free estimates available.",
  keywords: [
    "pressure washing services North Berwick Maine",
    "house washing North Berwick",
    "patio cleaning service Maine",
    "deck restoration North Berwick",
    "roof cleaning service York County",
    "fence washing Maine",
    "commercial pressure washing North Berwick",
    "exterior cleaning services 03906",
  ],
  openGraph: {
    title: "Professional Pressure Washing Services North Berwick Maine | Hose Water Pressure Washing LLC",
    description:
      "Complete pressure washing services including house washing, patio cleaning, deck restoration, and more in North Berwick Maine and York County.",
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
                name: "Patio & Walkway Cleaning",
                description:
                  "Concrete patio and walkway pressure washing to remove oil stains and grime in York County",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Hose Water Pressure Washing LLC",
                },
              },
              {
                "@type": "Service",
                position: 3,
                name: "Deck Cleaning",
                description:
                  "Deck cleaning and restoration service to revitalize outdoor living spaces in North Berwick",
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
              Professional Pressure Washing Services in Southern Maine
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
                Our professional house washing service removes dirt, mold, mildew, and other contaminants from your
                home's exterior surfaces. We use professional-grade equipment and techniques to safely clean vinyl
                siding, brick, stucco, and other exterior materials throughout our service area.
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
                  <span>Improves curb appeal and property value throughout York County</span>
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

        {/* Patio & Walkway Cleaning */}
        <section id="patio" className="mt-24 scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="order-1 md:order-2 relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/patio-cleaning.png"
                alt="Patio and walkway cleaning service in North Berwick Maine"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-1 space-y-4">
              <h2 className="text-3xl font-bold">Patio & Walkway Cleaning</h2>
              <p className="text-gray-500">
                Our concrete cleaning service removes dirt, grime, and other unsightly marks from patios, walkways, and
                sidewalks throughout our service area. We use surface cleaners and appropriate pressure to ensure a
                thorough, even clean without damaging the concrete.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Removes dirt and grime from concrete surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Prevents slippery surfaces from mold and algae buildup</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Extends the life of concrete patios and walkways</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Improves overall property appearance and curb appeal</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/estimate">
                  <Button className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">Get a Quote</Button>
                </Link>
                <Link href="/gallery?filter=patio">
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
                ensure safe and effective cleaning throughout our service area.
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
                <Link href="/gallery?filter=deck">
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
            <div className="order-1 md:order-2 relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/roof-cleaning.png"
                alt="Roof cleaning service in North Berwick Maine"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-1 space-y-4">
              <h2 className="text-3xl font-bold">Roof Cleaning</h2>
              <p className="text-gray-500">
                Our roof cleaning service safely removes black streaks, moss, and algae from your roof. We use
                low-pressure washing techniques and appropriate cleaning solutions to protect your roof while
                effectively removing unsightly growth and stains throughout our service area.
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
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Safe for all roof types</span>
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

        {/* Fence Washing */}
        <section id="fence" className="mt-24 scroll-mt-20">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/fence-cleaning.png"
                alt="Fence washing service in North Berwick Maine"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Fence Washing</h2>
              <p className="text-gray-500">
                Our fence washing service restores the appearance of wooden, vinyl, or metal fences by removing dirt,
                mold, mildew, and algae. We adjust our cleaning techniques based on your fence material to ensure safe
                and effective cleaning throughout our service area.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Removes dirt, mold, and algae from fence surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Restores original fence appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Extends fence life and durability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Prepares wooden fences for staining or sealing</span>
                </li>
              </ul>
              <div className="flex gap-4">
                <Link href="/estimate">
                  <Button className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">Get a Quote</Button>
                </Link>
                <Link href="/gallery?filter=fence">
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
                Our commercial pressure washing services help maintain your business property's appearance and safety
                throughout our service area. We offer flexible scheduling to minimize disruption to your business
                operations and can create a customized cleaning plan for your specific needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Storefront and building exterior cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Parking lot and sidewalk cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Dumpster pad cleaning and sanitizing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">•</span>
                  <span>Graffiti removal services</span>
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
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Transform Your York County Property?</h2>
            <p className="max-w-[600px]">
              Contact us today to schedule pressure washing services or request a free estimate for your York County
              property.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/estimate">
                <Button size="lg" className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">
                  Get a Free Estimate
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
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
