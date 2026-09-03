import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Droplets, FileText, ThumbsUp, Wrench } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import GoogleReviews from "@/components/google-reviews"
import BeforeAfterGallery from "@/components/before-after-gallery"
import CopyPhone from "@/components/copy-phone"

export const metadata: Metadata = {
  title: "Pressure Washing & Roof Cleaning in North Berwick, ME | Hose Water",
  description:
    "Get top-rated pressure washing in North Berwick, Maine. Hose Water Pressure Washing offers expert house washing, roof cleaning, deck restoration, patio cleaning, and more throughout York County, Southern Maine, and New Hampshire. Family-owned and trusted since 2022.",
  keywords: [
    "pressure washing North Berwick Maine",
    "house washing York County",
    "roof cleaning Southern Maine"
  ],
  openGraph: {
    title: "Professional Pressure Washing Services North Berwick Maine | Hose Water Pressure Washing",
    description:
      "Revitalize your property with our professional pressure washing services. At Hose Water Pressure Washing, we restore the beauty of your home or business—removing years of dirt, grime, and buildup to leave surfaces looking like new. Family-owned and operated since 2022, we proudly serve residential and commercial clients across Southern Maine and New Hampshire.",
    images: ["/og-image.png"],
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
              name: "Hose Water Pressure Washing",
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
        <section className="w-full py-8 md:py-10 lg:py-12 bg-gradient-to-b from-[#333333] to-gray-800 text-white">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-3">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-tight">
                    Professional Pressure Washing Services in North Berwick, ME
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
                      Contact Me
                    </Button>
                  </Link>
                </div>
                <CopyPhone className="justify-center lg:justify-start text-gray-200" />
              </div>
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden mt-6 lg:mt-0">
                <Image
                  src="/house-washing.jpg"
                  alt="Professional pressure washing services in North Berwick Maine - house washing in progress"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-8 md:py-10 lg:py-12">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-8">
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
                imageSrc="/house-washing-service.jpg"
                serviceId="house-washing"
              />
              <ServiceCard
                title="Deck Cleaning"
                description="Revitalize your outdoor deck spaces and remove weathering with our professional deck cleaning service."
                icon="layout"
                imageSrc="/deck-cleaning.jpg"
                serviceId="deck"
              />
              <ServiceCard
                title="Solar Panel & Window Cleaning"
                description="Professional solar panel and exterior window cleaning using water-fed pole system with deionized water for spot-free results."
                icon="square"
                imageSrc="/solar-window-cleaning.jpg"
                serviceId="solar-window"
              />
              <ServiceCard
                title="Roof Cleaning"
                description="Safely remove black streaks, moss, and algae from your roof with our professional roof cleaning."
                icon="home"
                imageSrc="/roof-cleaning.jpg"
                serviceId="roof"
              />
              <ServiceCard
                title="Patio & Walkway Cleaning"
                description="Restore concrete, stone, and brick patios and walkways by removing dirt, stains, and organic growth."
                icon="square"
                imageSrc="/patio-walkway-cleaning.jpg"
                serviceId="patio-walkway"
              />
              <ServiceCard
                title="Commercial Pressure Washing"
                description="Maintain your business property's appearance and safety with our commercial pressure washing services."
                icon="building"
                imageSrc="/commercial-cleaning.jpg"
                serviceId="commercial"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-8 md:py-10 lg:py-12 bg-gray-50">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8 sm:mb-8">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                  Why Choose Hose Water Pressure Washing
                </h2>
                <p className="max-w-[700px] text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed">
                  Hose Water Pressure Washing is committed to excellence in every aspect of our pressure washing
                  service.
                </p>
              </div>
            </div>
            {/* Three across, then two centred beneath on desktop. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex flex-col items-center rounded-xl bg-teal-50 p-4 text-center sm:p-5">
                <Award className="h-6 w-6 text-teal-700" aria-hidden="true" />
                <h3 className="mt-3 text-base sm:text-lg font-bold text-teal-900">Experienced Professionals</h3>
                <p className="mt-1.5 text-sm text-teal-800 leading-relaxed">
                  Our team has years of experience in the pressure washing industry serving Southern Maine & New
                  Hampshire residents.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-sky-50 p-4 text-center sm:p-5">
                <Wrench className="h-6 w-6 text-sky-700" aria-hidden="true" />
                <h3 className="mt-3 text-base sm:text-lg font-bold text-sky-900">Professional Equipment</h3>
                <p className="mt-1.5 text-sm text-sky-800 leading-relaxed">
                  We use commercial-grade pressure washing equipment to deliver superior cleaning results.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-amber-50 p-4 text-center sm:p-5">
                <ThumbsUp className="h-6 w-6 text-amber-700" aria-hidden="true" />
                <h3 className="mt-3 text-base sm:text-lg font-bold text-amber-900">Satisfaction Guaranteed</h3>
                <p className="mt-1.5 text-sm text-amber-800 leading-relaxed">
                  We're not happy until you're happy with the results of our pressure washing work.
                </p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-6 md:mx-auto md:max-w-[66%] md:grid-cols-2">
              <div className="flex flex-col items-center rounded-xl bg-violet-50 p-4 text-center sm:p-5">
                <Droplets className="h-6 w-6 text-violet-700" aria-hidden="true" />
                <h3 className="mt-3 text-base sm:text-lg font-bold text-violet-900">Safe Soft Wash Methods</h3>
                <p className="mt-1.5 text-sm text-violet-800 leading-relaxed">
                  We adjust our technique to the surface, using low-pressure soft washing where it matters to protect
                  your property.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-xl bg-rose-50 p-4 text-center sm:p-5">
                <FileText className="h-6 w-6 text-rose-700" aria-hidden="true" />
                <h3 className="mt-3 text-base sm:text-lg font-bold text-rose-900">Free, No-Obligation Quotes</h3>
                <p className="mt-1.5 text-sm text-rose-800 leading-relaxed">
                  Request an estimate online or call us. Detailed pricing with nothing owed up front.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="w-full py-8 md:py-10 lg:py-12 bg-gray-50">
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
        <section className="w-full py-8 md:py-10 lg:py-12 bg-gray-50">
  <div className="container px-4 sm:px-6 md:px-8">
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
        What Our Customers Say
      </h2>

      <p className="max-w-[700px] text-gray-500 text-base sm:text-lg">
        Real reviews from homeowners and businesses throughout Southern Maine and New Hampshire.
      </p>
    </div>

    <GoogleReviews />
  </div>
</section>

        {/* Before & After Gallery */}
<section className="w-full py-8 md:py-10 lg:py-12 bg-white">
  <div className="container px-4 sm:px-6 md:px-8">
    <div className="flex flex-col items-center text-center mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
        Real Results
      </h2>

      <p className="max-w-[700px] text-gray-500 text-base sm:text-lg mt-4">
        See the difference professional exterior cleaning can make.
        These are real transformations completed throughout Southern Maine
        and New Hampshire.
      </p>
    </div>

    <BeforeAfterGallery />

    <div className="mt-8 flex justify-center">
      <Link href="/gallery">
        <Button variant="outline" size="lg" className="gap-2">
          See All Before &amp; Afters <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  </div>
</section>
        
        {/* CTA Section - brand yellow so it reads as part of the page, not the dark footer */}
        <section className="w-full py-6 md:py-7 bg-yellow-400 text-[#333333]">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center justify-center gap-3 text-center">
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Ready to Transform Your Property?</h2>
                {/* max-w-none so the sentence sits on one line on desktop */}
                <p className="max-w-none text-base leading-snug">
                  Get a free pressure washing estimate today by answering a few simple questions about your property.
                </p>
              </div>
              <Link href="/estimate" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 bg-[#333333] text-white hover:bg-[#1f1f1f] text-base px-6 py-3"
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
