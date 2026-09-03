import Script from "next/script";
import type React from "react"
import { GoogleAnalytics } from "@next/third-parties/google"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Hose Water Pressure Washing | Professional Pressure Washing Services in Southern Maine",
    template: "%s | Hose Water Pressure Washing",
  },
  description:
    "Trusted pressure washing for homes and businesses in Southern Maine and New Hampshire. We offer house washing, deck and patio cleaning, roof washing, fence restoration, window cleaning, and more. Serving a 40-mile radius around North Berwick since 2022.",
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
  metadataBase: new URL("https://hosewaterpw.com"), // Replace with your actual domain
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
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="US-ME" />
        <meta name="geo.placename" content="North Berwick" />
        <meta name="geo.position" content="43.3048;-70.7342" />
        <meta name="ICBM" content="43.3048, -70.7342" />   
        
{/* Google Analytics */}
<GoogleAnalytics gaId="G-SW9ESX4H4G" />
        
{/* Meta Pixel Code */}
<Script
  id="meta-pixel"
  strategy="afterInteractive"
>
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}
    (window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '2844768349066272');
    fbq('track', 'PageView');
  `}
</Script>

<noscript>
  <img
    height="1"
    width="1"
    style={{ display: 'none' }}
    src="https://www.facebook.com/tr?id=2844768349066272&ev=PageView&noscript=1"
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
              name: "Hose Water Pressure Washing",
              image: "https://hosewaterpw.com/logo.png",
              description:
                "Professional pressure washing services for residential and commercial properties throughout Southern Maine and New Hampshire",
              url: "https://hosewaterpw.com",
              telephone: "+1-207-370-8667",
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
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
