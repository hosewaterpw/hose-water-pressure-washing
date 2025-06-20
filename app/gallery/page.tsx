"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

// Sample data with placeholder images
const galleryItems = [
  {
    id: 1,
    category: "house",
    title: "House Exterior",
    before: "/placeholder.svg?height=400&width=600&text=House+Before",
    after: "/placeholder.svg?height=400&width=600&text=House+After",
  },
  {
    id: 2,
    category: "driveway",
    title: "Concrete Driveway",
    before: "/placeholder.svg?height=400&width=600&text=Driveway+Before",
    after: "/placeholder.svg?height=400&width=600&text=Driveway+After",
  },
  {
    id: 3,
    category: "deck",
    title: "Wooden Deck",
    before: "/placeholder.svg?height=400&width=600&text=Deck+Before",
    after: "/placeholder.svg?height=400&width=600&text=Deck+After",
  },
  {
    id: 4,
    category: "house",
    title: "Vinyl Siding",
    before: "/placeholder.svg?height=400&width=600&text=Siding+Before",
    after: "/placeholder.svg?height=400&width=600&text=Siding+After",
  },
  {
    id: 5,
    category: "driveway",
    title: "Brick Patio",
    before: "/placeholder.svg?height=400&width=600&text=Patio+Before",
    after: "/placeholder.svg?height=400&width=600&text=Patio+After",
  },
  {
    id: 6,
    category: "fence",
    title: "Wooden Fence",
    before: "/placeholder.svg?height=400&width=600&text=Fence+Before",
    after: "/placeholder.svg?height=400&width=600&text=Fence+After",
  },
  {
    id: 7,
    category: "roof",
    title: "Asphalt Roof",
    before: "/placeholder.svg?height=400&width=600&text=Roof+Before",
    after: "/placeholder.svg?height=400&width=600&text=Roof+After",
  },
  {
    id: 8,
    category: "commercial",
    title: "Storefront",
    before: "/placeholder.svg?height=400&width=600&text=Commercial+Before",
    after: "/placeholder.svg?height=400&width=600&text=Commercial+After",
  },
  {
    id: 9,
    category: "commercial",
    title: "Restaurant Patio",
    before: "/placeholder.svg?height=400&width=600&text=Restaurant+Before",
    after: "/placeholder.svg?height=400&width=600&text=Restaurant+After",
  },
]

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("all")
  const filterParam = searchParams.get("filter")

  // Set the active tab based on URL parameter
  useEffect(() => {
    if (filterParam && ["house", "driveway", "deck", "roof", "fence", "commercial"].includes(filterParam)) {
      setActiveTab(filterParam)
    }
  }, [filterParam])

  // Get the service name for the header
  const getServiceName = () => {
    switch (activeTab) {
      case "house":
        return "House Washing"
      case "driveway":
        return "Driveway & Sidewalk Cleaning"
      case "deck":
        return "Deck & Patio Restoration"
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
          <Link href={`/services#${filterParam}`}>
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to {getServiceName()}
            </Button>
          </Link>
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12">
        <div className="flex justify-center">
          <TabsList className="grid grid-cols-2 md:grid-cols-7">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="house">Houses</TabsTrigger>
            <TabsTrigger value="driveway">Driveways</TabsTrigger>
            <TabsTrigger value="deck">Decks</TabsTrigger>
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
                    src={item.before || "/placeholder.svg"}
                    alt={`${item.title} before pressure washing`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                    Before
                  </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-md">
                  <Image
                    src={item.after || "/placeholder.svg"}
                    alt={`${item.title} after pressure washing`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">After</div>
                </div>
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
        </TabsContent>

        {["house", "driveway", "deck", "roof", "fence", "commercial"].map((category) => (
          <TabsContent key={category} value={category} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <div key={item.id} className="flex flex-col gap-4">
                    <div className="relative aspect-video overflow-hidden rounded-md">
                      <Image
                        src={item.before || "/placeholder.svg"}
                        alt={`${item.title} before pressure washing`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                        Before
                      </div>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-md">
                      <Image
                        src={item.after || "/placeholder.svg"}
                        alt={`${item.title} after pressure washing`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                        After
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
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-[#333333]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
