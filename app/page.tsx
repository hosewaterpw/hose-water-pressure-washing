import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ServiceCard from "@/components/service-card"

export const metadata: Metadata = {
  title: "Pressure Washing North Berwick Maine | House, Roof, & Deck Cleaning | Hose Water Pressure Washing LLC",
  description:
    "Get top-rated pressure washing in North Berwick, Maine. Hose Water Pressure Washing LLC offers expert house washing, roof cleaning, deck restoration, patio cleaning, and more throughout York County, Southern Maine, and New Hampshire. Family-owned and trusted since 2022.",
  keywords: [
    // Local + Core Services
    "pressure washing North Berwick Maine",
    "house washing North Berwick",
    "roof cleaning services Maine",
    "deck restoration North Berwick",
    "patio cleaning Maine",
    "window cleaning North Berwick",
    "soft wash North Berwick",
    "power washing services York County",
    "residential pressure washing York County",
    "commercial pressure washing North Berwick",
    "exterior cleaning Maine 03906",
    
    // Service Extensions
    "gutter cleaning North Berwick",
    "vinyl siding cleaning Maine",
    "driveway cleaning York County",
    "sidewalk pressure washing North Berwick",
    "fence pressure washing Maine",
    "solar panel cleaning Maine",
    "low pressure roof cleaning Maine",
    "concrete cleaning services Maine",
    "mildew removal North Berwick",
    "algae removal pressure washing",
    "brick cleaning services Maine",

    // Service Area Expansion
    "pressure washing Wells Maine",
    "pressure washing South Berwick ME",
    "pressure washing Kittery Maine",
    "pressure washing Eliot ME",
    "pressure washing Ogunquit Maine",
    "pressure washing Sanford ME",
    "pressure washing York Maine",
    "pressure washing Southern Maine",
    "power washing New Hampshire",
    "pressure washing Portsmouth NH",
    "house washing Seacoast NH",

    // Buyer Intent + Phrases
    "best pressure washing in Maine",
    "top-rated pressure washing near me",
    "affordable power washing York County",
    "trusted pressure washing company North Berwick",
    "licensed pressure washing service Maine",
    "professional house washing near me",
    "home exterior cleaning Maine",
    "safe roof washing service",
    "eco-friendly pressure washing company",
    "family-owned pressure washing Maine",

    // Alternate Phrase Matches
    "pressure cleaning North Berwick",
    "home washing services ME",
    "mobile pressure washing York County",
    "local power washing contractor Maine",
    "surface restoration North Berwick",
    "building washing York County",
    "driveway and patio cleaning Maine"
  ],
  openGraph: {
    title: "Professional Pressure Washing Services North Berwick Maine | Hose Water Pressure Washing LLC",
    description:
      "Revitalize your property with our professional pressure washing services. At Hose Water Pressure Washing, we restore the beauty of your home or business—removing years of dirt, grime, and buildup to leave surfaces looking like new. Family-owned and operated since 2022, we proudly serve residential and commercial clients across Southern Maine and New Hampshire.",
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
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Solar Panel & Window Cleaning",
                    description: "Professional solar panel and exterior window cleaning with deionized water system",
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
                    Revitalize your property with our professional pressure washing services. At Hose Water Pressure Washing, we restore the beauty of your home or business—removing years of dirt, grime, and buildup to leave surfaces looking like new. Family-owned and operated since 2022, we proudly serve residential and commercial clients across Southern Maine and New Hampshire.
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
                orientation="horizontal"
                serviceId="house-washing"
              />
              <ServiceCard
                title="Deck Cleaning"
                description="Revitalize your outdoor deck spaces and remove weathering with our professional deck cleaning service."
                icon="layout"
                imageSrc="/deck-cleaning.png"
                orientation="vertical"
                serviceId="deck"
              />
              <ServiceCard
                title="Solar Panel & Window Cleaning"
                description="Professional solar panel and exterior window cleaning using water-fed pole system with deionized water for spot-free results."
                icon="square"
                imageSrc="/solar-window-cleaning.png"
                orientation="horizontal"
                serviceId="solar-window"
              />
              <ServiceCard
                title="Roof Cleaning"
                description="Safely remove black streaks, moss, and algae from your roof with our professional roof cleaning."
                icon="home"
                imageSrc="/roof-cleaning.png"
                orientation="vertical"
                serviceId="roof"
              />
              <ServiceCard
                title="Patio & Walkway Cleaning"
                description="Restore concrete, stone, and brick patios and walkways by removing dirt, stains, and organic growth."
                icon="square"
                imageSrc="/patio-walkway-cleaning.png"
                orientation="vertical"
                serviceId="patio-walkway"
              />
              <ServiceCard
                title="Commercial Pressure Washing"
                description="Maintain your business property's appearance and safety with our commercial pressure washing services."
                icon="building"
                imageSrc="/commercial-cleaning.png"
                orientation="horizontal"
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

              {/* Service Area Towns */}
              <div className="mt-8 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Maine Communities</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                      <span>North Berwick</span>
                      <span>South Berwick</span>
                      <span>Berwick</span>
                      <span>Sanford</span>
                      <span>Eliot</span>
                      <span>Lebanon</span>
                      <span>York Harbor</span>
                      <span>Kennebunk</span>
                      <span>Kennebunkport</span>
                      <span>Hollis Center</span>
                      <span>Saco</span>
                      <span>Old Orchard Beach</span>
                      <span>Newfield</span>
                      <span>Limington</span>
                      <span>Waterboro</span>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">New Hampshire Communities</h3>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                      <span>Portsmouth</span>
                      <span>New Castle</span>
                      <span>Greenland</span>
                      <span>Dover</span>
                      <span>Durham</span>
                      <span>Milton</span>
                      <span>Lee</span>
                      <span>Barrington</span>
                      <span>Farmington</span>
                      <span>Rye</span>
                      <span>Nottingham</span>
                      <span>Northwood</span>
                      <span>Epping</span>
                      <span>Strafford</span>
                      <span>Fremont</span>
                      <span>Wakefield</span>
                      <span>Exeter</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-6 leading-relaxed">
                  Professional pressure washing services available in all listed communities and surrounding areas.
                  Contact us to confirm service availability in your specific location.
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
                  What Our Customers Say
                </h2>
                <p className="max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                  Read reviews from satisfied customers in Southern Maine & New Hampshire.
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
