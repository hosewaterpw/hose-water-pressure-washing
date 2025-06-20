import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ServiceCard from "@/components/service-card"
import BeforeAfterGallery from "@/components/before-after-gallery"

export const metadata: Metadata = {
  title: "Professional Pressure Washing Services North Berwick Maine | Hose Water Pressure Washing LLC",
  description:
    "Transform your property with professional pressure washing services in North Berwick Maine and York County. House washing, patio cleaning, deck restoration, roof cleaning. Free estimates. Family-owned since 2022.",
  keywords: [
    "pressure washing North Berwick Maine",
    "power washing services York County",
    "house washing North Berwick",
    "patio cleaning Maine",
    "deck restoration North Berwick",
    "roof cleaning services Maine",
    "residential pressure washing York County",
    "commercial pressure washing North Berwick",
    "exterior cleaning Maine 03906",
  ],
  openGraph: {
    title: "Professional Pressure Washing Services North Berwick Maine | Hose Water Pressure Washing LLC",
    description:
      "Transform your property with professional pressure washing services in North Berwick Maine. House washing, patio cleaning, deck restoration, and more.",
    images: ["/house-washing.png"],
  },
}

export default function Home() {
  return (
    <>
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Pressure Washing Services",
            provider: {
              "@type": "LocalBusiness",
              name: "Hose Water Pressure Washing LLC",
            },
            areaServed: [
              {
                "@type": "City",
                name: "North Berwick",
                containedInPlace: {
                  "@type": "AdministrativeArea",
                  name: "Maine",
                },
              },
              {
                "@type": "AdministrativeArea",
                name: "York County",
              },
            ],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Pressure Washing Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "House Washing",
                    description: "Professional house washing services to remove dirt, mold, and mildew",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Patio & Walkway Cleaning",
                    description: "Concrete patio and walkway pressure washing services",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Deck Cleaning",
                    description: "Deck cleaning and restoration services",
                  },
                },
              ],
            },
          }),
        }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-b from-[#333333] to-gray-800 text-white">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-tight">
                    Professional Pressure Washing Services
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-[600px] mx-auto lg:mx-0">
                    Transform your property with our expert pressure washing services. We make the dirty surfaces of
                    your home look brand new again. Family-owned and operated since 2022, serving residential and
                    commercial properties throughout southern maine and new hampshire.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start">
                  <Link href="/estimate" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto gap-2 bg-yellow-400 text-[#333333] hover:bg-yellow-500 text-base px-6 py-3"
                    >
                      Get Free Estimate <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto text-white border-white hover:bg-white/10 bg-transparent text-base px-6 py-3"
                    >
                      Call (207) 370-8667
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mt-6 lg:mt-0">
                <Image
                  src="/house-washing.png"
                  alt="Professional pressure washing services in North Berwick Maine - house washing in progress"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                  Our Pressure Washing Services
                </h2>
                <p className="max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed">
                  We offer a variety of professional pressure washing services to keep your property looking its best.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <ServiceCard
                title="House Washing"
                description="Remove dirt, mold, and mildew from your home's exterior surfaces with our professional house washing service."
                icon="home"
                imageSrc="/house-washing-service.png"
                serviceId="house-washing"
              />
              <ServiceCard
                title="Deck Cleaning"
                description="Revitalize your outdoor deck spaces and remove weathering with our professional deck cleaning service."
                icon="layout"
                imageSrc="/deck-cleaning.png"
                serviceId="deck"
              />
              <ServiceCard
                title="Roof Cleaning"
                description="Safely remove black streaks, moss, and algae from your roof with our professional roof cleaning."
                icon="home"
                imageSrc="/roof-cleaning.png"
                serviceId="roof"
              />
              <ServiceCard
                title="Fence Washing"
                description="Restore the appearance of wooden, vinyl, or metal fences with our fence washing service."
                icon="square"
                imageSrc="/fence-cleaning.png"
                serviceId="fence"
              />
              <ServiceCard
                title="Commercial Pressure Washing"
                description="Maintain your business property's appearance and safety with our commercial pressure washing services."
                icon="building"
                imageSrc="/commercial-cleaning.png"
                serviceId="commercial"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                  Why Choose Hose Water Pressure Washing
                </h2>
                <p className="max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed">
                  Hose Water Pressure Washing LLC is committed to excellence in every aspect of our pressure washing
                  service.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="text-center">
                <CardContent className="flex flex-col items-center p-4 sm:p-6">
                  <div className="mb-4 rounded-full bg-yellow-400/10 p-3">
                    <Check className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Experienced Professionals</h3>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    Our team has years of experience in the pressure washing industry serving York County Maine
                    residents.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="flex flex-col items-center p-4 sm:p-6">
                  <div className="mb-4 rounded-full bg-yellow-400/10 p-3">
                    <Check className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Professional Equipment</h3>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    We use commercial-grade pressure washing equipment to deliver superior cleaning results.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center md:col-span-2 lg:col-span-1">
                <CardContent className="flex flex-col items-center p-4 sm:p-6">
                  <div className="mb-4 rounded-full bg-yellow-400/10 p-3">
                    <Check className="h-6 w-6 text-yellow-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    We're not happy until you're happy with the results of our pressure washing work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Before & After Gallery Preview */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                  Pressure Washing Before & After Results
                </h2>
                <p className="max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed">
                  See the dramatic difference our professional pressure washing services can make on your property.
                </p>
              </div>
            </div>
            <div className="mb-6 sm:mb-8">
              <BeforeAfterGallery />
            </div>
            <div className="flex justify-center">
              <Link href="/gallery">
                <Button variant="outline" size="lg" className="text-base px-6 py-3">
                  View Full Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Our Service Area</h2>
                <p className="max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed">
                  We provide professional pressure washing services throughout Southern Maine and New Hampshire.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                  What Our North Berwick Customers Say
                </h2>
                <p className="max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                  Read reviews from satisfied customers in York County Maine.
                </p>
              </div>
              <Link href="https://g.co/kgs/ehG2MEi" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="gap-2 bg-yellow-400 text-[#333333] hover:bg-yellow-500 text-base px-6 py-3"
                >
                  Read Our Google Reviews <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-[#333333] text-white">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                  Ready to Transform Your Property?
                </h2>
                <p className="max-w-[700px] text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                  Get a free pressure washing estimate today by answering a few simple questions about your property.
                </p>
              </div>
              <Link href="/estimate" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 bg-yellow-400 text-[#333333] hover:bg-yellow-500 text-base px-6 py-3"
                >
                  Get Free Estimate <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
