"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

// Updated gallery data - single photos with before/after combined
const galleryItems = [
  {
    id: 1,
    category: "house",
    title: "House Exterior",
    photo: "/house-exterior-beforeafter.jpg",
  },
  {
    id: 2,
    category: "house",
    title: "Vinyl Siding",
    photo: "/vinyl-siding-beforeafter.jpg",
  },
  {
    id: 3,
    category: "deck-patio",
    title: "Wooden Deck #1",
    photo: "/wooden-deck-1-beforeafter.jpg",
  },
  {
    id: 4,
    category: "deck-patio",
    title: "Wooden Deck #2",
    photo: "/wooden-deck-2-beforeafter.jpg",
  },
  {
    id: 5,
    category: "deck-patio",
    title: "Wooden Deck #3",
    photo: "/wooden-deck-3-beforeafter.jpg",
  },
  {
    id: 6,
    category: "deck-patio",
    title: "Patio",
    photo: "/patio-beforeafter.jpg",
  },
  {
    id: 7,
    category: "roof",
    title: "Asphalt Roof",
    photo: "/asphalt-roof-beforeafter.jpg",
  },
  {
    id: 8,
    category: "fence",
    title: "Vinyl Fence",
    photo: "/vinyl-fence-beforeafter.jpg",
  },
  {
    id: 9,
    category: "commercial",
    title: "Commercial Garage with Rental Unit",
    photo: "/commercial-garage-rental-beforeafter.jpg",
  },
]

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("all")
  const filterParam = searchParams.get("filter")

  // Set the active tab based on URL parameter
  useEffect(() => {
    if (filterParam && ["house", "deck-patio", "roof", "fence", "commercial"].includes(filterParam)) {
      setActiveTab(filterParam)
    } else if (filterParam === "deck") {
      // Redirect old "deck" filter to new "deck-patio"
      setActiveTab("deck-patio")
    }
  }, [filterParam])

  // Get the service name for the header
  const getServiceName = () => {
    switch (activeTab) {
      case "house":
        return "House Washing"
      case "deck-patio":
        return "Deck & Patio Cleaning"
      case "roof":
        return "Roof Cleaning"
      case "fence":
        return "Fence Washing"
      case "commercial":
        return "Commercial Services"
      default:
        return "Before & After Gallery"
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{getServiceName()}</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            See the dramatic difference our pressure washing services can make on properties throughout our service
            area.
          </p>
        </div>
      </div>

      {filterParam && (
        <div className="mt-6 flex justify-center">
          <Link href={`/services#${filterParam === "deck-patio" ? "deck" : filterParam}`}>
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to {getServiceName()}
            </Button>
          </Link>
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12">
        <div className="flex justify-center">
          <TabsList className="grid grid-cols-2 md:grid-cols-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="house">Houses</TabsTrigger>
            <TabsTrigger value="deck-patio">Decks & Patios</TabsTrigger>
            <TabsTrigger value="roof">Roofs</TabsTrigger>
            <TabsTrigger value="fence">Fences</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <div className="relative aspect-video overflow-hidden rounded-md">
                  <Image
                    src={item.photo || "/placeholder.svg"}
                    alt={`${item.title} before and after pressure washing`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                    Before & After
                  </div>
                </div>
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
        </TabsContent>

        {["house", "deck-patio", "roof", "fence", "commercial"].map((category) => (
          <TabsContent key={category} value={category} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <div key={item.id} className="flex flex-col gap-4">
                    <div className="relative aspect-video overflow-hidden rounded-md">
                      <Image
                        src={item.photo || "/placeholder.svg"}
                        alt={`${item.title} before and after pressure washing`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                        Before & After
                      </div>
                    </div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* CTA Section */}
      <section className="mt-24 py-12 px-6 bg-[#333333] text-white rounded-lg">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to See These Results on Your Property?</h2>
          <p className="max-w-[600px]">
            Contact us today to schedule a service or request a free estimate for your pressure washing needs.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/estimate">
              <Button size="lg" className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">
                Get a Free Estimate
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 bg-transparent">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
