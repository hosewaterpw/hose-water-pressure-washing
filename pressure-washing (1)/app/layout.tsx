import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Hose Water Pressure Washing LLC | Professional Pressure Washing Services Southern Maine",
    template: "%s | Hose Water Pressure Washing LLC",
  },
  description:
    "Professional pressure washing services for residential and commercial properties throughout Southern Maine and New Hampshire. House washing, patio cleaning, deck restoration, roof cleaning, and more. Serving within 40-mile radius of North Berwick since 2022.",
  keywords: [
    "pressure washing North Berwick Maine",
    "power washing York County",
    "house washing North Berwick",
    "patio cleaning Maine",
    "deck cleaning North Berwick",
    "roof cleaning York County",
    "fence washing Maine",
    "commercial pressure washing North Berwick",
    "exterior cleaning Maine",
    "residential pressure washing York County",
    "pressure washing 03906",
    "Wells Maine pressure washing",
    "Kennebunk pressure washing",
    "Portsmouth NH pressure washing",
  ],
  authors: [{ name: "Jonathan P. Bilodeau" }],
  creator: "Hose Water Pressure Washing LLC",
  publisher: "Hose Water Pressure Washing LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hosewaterpw.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hosewaterpw.com",
    title: "Hose Water Pressure Washing LLC | Professional Pressure Washing Services North Berwick Maine",
    description:
      "Professional pressure washing services for residential and commercial properties in North Berwick Maine and York County. House washing, patio cleaning, deck restoration, and more.",
    siteName: "Hose Water Pressure Washing LLC",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hose Water Pressure Washing LLC - Professional Pressure Washing Services North Berwick Maine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hose Water Pressure Washing LLC | Professional Pressure Washing Services North Berwick Maine",
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hosewaterpw.com" />
        <meta name="geo.region" content="US-ME" />
        <meta name="geo.placename" content="North Berwick" />
        <meta name="geo.position" content="43.3048;-70.7342" />
        <meta name="ICBM" content="43.3048, -70.7342" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://hosewaterpw.com",
              name: "Hose Water Pressure Washing LLC",
              image: "https://hosewaterpw.com/logo.png",
              description:
                "Professional pressure washing services for residential and commercial properties throughout Southern Maine and New Hampshire",
              url: "https://hosewaterpw.com",
              telephone: "207-370-8667", // Replace with your actual phone number
              email: "hosewaterpw@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "North Berwick",
                addressRegion: "ME",
                postalCode: "03906",
                addressCountry: "US",
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
              openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
              founder: {
                "@type": "Person",
                name: "Jonathan P. Bilodeau",
              },
              foundingDate: "2022",
              sameAs: [
                "https://g.co/kgs/ehG2MEi",
                "https://www.facebook.com/hosewaterpw",
                "https://www.instagram.com/hosewaterpw",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "12", // Update with actual review count from Google
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
