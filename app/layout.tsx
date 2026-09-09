/**
 * The frame every single page sits inside: the navigation bar at the top, the
 * page itself in the middle, and the pinned footer at the bottom.
 * It also sets the title and description Google shows in its results, and
 * hands Google the business details - phone number, address, opening hours,
 * social profiles - taken from the admin area. Those details are what let a
 * business panel appear beside the search results.
 */
import Script from "next/script";
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import DeferredAnalytics from "@/components/deferred-analytics"
import { getBusiness, getSocial, getSocialUrls } from "@/lib/content"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Hose Water Pressure Washing | Professional Pressure Washing Services in Southern Maine",
    template: "%s | Hose Water Pressure Washing",
  },
  // Kept under ~160 characters so Google shows it in full rather than cutting
  // it off mid-sentence. Same applies to every page's description.
  description:
    "Pressure washing for homes and businesses across Southern Maine and New Hampshire. House, roof, deck and patio cleaning. Free quotes, family-owned since 2022.",
  keywords: [
    "pressure washing North Berwick Maine",
    "house washing York County",
    "roof cleaning Southern Maine",
  ],
  authors: [{ name: "Jonathan P. Bilodeau" }],
  creator: "Hose Water Pressure Washing",
  publisher: "Hose Water Pressure Washing",
  // telephone detection left on so any number not wrapped in an explicit
  // tel: link is still tappable on mobile.
  formatDetection: {
    email: false,
    address: false,
  },
  metadataBase: new URL("https://hosewaterpw.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hosewaterpw.com",
    title: "Hose Water Pressure Washing | Professional Pressure Washing Services North Berwick Maine",
    description:
      "Professional pressure washing services for residential and commercial properties in North Berwick Maine and York County. House washing, patio cleaning, deck restoration, and more.",
    siteName: "Hose Water Pressure Washing",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hose Water Pressure Washing - Professional Pressure Washing Services North Berwick Maine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hose Water Pressure Washing | Professional Pressure Washing Services North Berwick Maine",
    description:
      "Professional pressure washing services for residential and commercial properties in North Berwick Maine and York County.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // To verify in Google Search Console, uncomment and paste the real code:
  // verification: { google: "..." },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const business = getBusiness()
  const social = getSocial()

  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="US-ME" />
        <meta name="geo.placename" content="North Berwick" />
        <meta name="geo.position" content="43.3048;-70.7342" />
        <meta name="ICBM" content="43.3048, -70.7342" />   
        
{/* Analytics load on first interaction - see components/deferred-analytics.tsx */}
        <DeferredAnalytics />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2844768349066272&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "@id": "https://hosewaterpw.com",
              name: business.name,
              image: "https://hosewaterpw.com/logo.png",
              description:
                "Professional pressure washing services for residential and commercial properties throughout Southern Maine and New Hampshire",
              url: "https://hosewaterpw.com",
              telephone: business.phoneDial,
              email: business.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: business.addressLocality,
                addressRegion: business.addressRegion,
                postalCode: business.postalCode,
                addressCountry: business.addressCountry,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.3048",
                longitude: "-70.7342",
              },
              areaServed: [
                {
                  "@type": "AdministrativeArea",
                  name: "Maine",
                },
                {
                  "@type": "AdministrativeArea",
                  name: "New Hampshire",
                },
              ],
              serviceType: [
                "Pressure Washing",
                "Power Washing",
                "House Washing",
                "Patio Cleaning",
                "Deck Cleaning",
                "Roof Cleaning",
                "Commercial Cleaning",
              ],
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: business.hoursDays,
                  opens: business.hoursOpens,
                  closes: business.hoursCloses,
                },
              ],
              founder: {
                "@type": "Person",
                name: business.ownerName,
              },
              foundingDate: business.foundingYear,
              sameAs: getSocialUrls(),
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            {/* Reserves room for the fixed footer. --footer-h is published by the
                footer itself; the fallback covers the moment before hydration. */}
            <main className="flex-1" style={{ paddingBottom: "var(--footer-h, 165px)" }}>
              {children}
            </main>
            <Footer business={business} social={social} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
