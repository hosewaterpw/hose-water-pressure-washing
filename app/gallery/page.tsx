"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

// Updated gallery data - added solar panel & window cleaning category
const galleryItems = [
  // Houses (4 photos)
  {
    id: 1,
    category: "house",
    title: "House Exterior",
    photo: "/house-exterior-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 2,
    category: "house",
    title: "Vinyl Siding",
    photo: "/vinyl-siding-beforeafter.jpg",
    orientation: "vertical",
  },
  {
    id: 3,
    category: "house",
    title: "House Exterior",
    photo: "/house-exterior-2-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 4,
    category: "house",
    title: "House Exterior",
    photo: "/house-exterior-3-beforeafter.jpg",
    orientation: "vertical",
  },
  // Decks (3 photos)
  {
    id: 5,
    category: "deck",
    title: "Wooden Steps",
    photo: "/wooden-deck-1-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 6,
    category: "deck",
    title: "Wooden Deck",
    photo: "/wooden-deck-2-beforeafter.jpg",
    orientation: "vertical",
  },
  {
    id: 7,
    category: "deck",
    title: "Wooden Deck",
    photo: "/wooden-deck-3-beforeafter.jpg",
    orientation: "horizontal",
  },
  // Patios & Walkways (2 photos)
  {
    id: 8,
    category: "patio-walkway",
    title: "Patio Fireplace",
    photo: "/patio-fireplace-beforeafter.jpg",
    orientation: "vertical",
  },
  {
    id: 9,
    category: "patio-walkway",
    title: "Concrete Walkway",
    photo: "/concrete-walkway-beforeafter.jpg",
    orientation: "vertical",
  },
  // Solar Panels & Windows (2 photos)
  {
    id: 10,
    category: "solar-window",
    title: "Solar Panel Cleaning",
    photo: "/solar-panel-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 11,
    category: "solar-window",
    title: "Exterior Window Cleaning",
    photo: "/exterior-window-beforeafter.jpg",
    orientation: "vertical",
  },
  // Roofs (1 photo)
  {
    id: 12,
    category: "roof",
    title: "Asphalt Roof",
    photo: "/asphalt-roof-beforeafter.jpg",
    orientation: "horizontal",
  },
  // Commercial (1 photo)
  {
    id: 13,
    category: "commercial",
    title: "Commercial Garage with Rental Unit",
    photo: "/commercial-garage-rental-beforeafter.jpg",
    orientation: "horizontal",
  },
]

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)
  const filterParam = searchParams.get("filter")

  // Set the active tab based on URL parameter
  useEffect(() => {
    if (filterParam && ["house", "deck", "patio-walkway", "solar-window", "roof", "commercial"].includes(filterParam)) {
      setActiveTab(filterParam)
    } else if (filterParam === "deck-patio") {
      setActiveTab("deck")
    } else if (filterParam === "fence") {
      setActiveTab("patio-walkway")
    }
  }, [filterParam])

  // Get the service name for the header
  const getServiceName = () => {
    switch (activeTab) {
      case "house":
        return "House Washing"
      case "deck":
        return "Deck Cleaning"
      case "patio-walkway":
        return "Patio & Walkway Cleaning"
      case "solar-window":
        return "Solar Panel & Window Cleaning"
      case "roof":
        return "Roof Cleaning"
      case "commercial":
        return "Commercial Services"
      default:
        return "Before & After Gallery"
    }
  }

  // Function to get the appropriate aspect ratio class
  const getAspectRatio = (orientation: string) => {
    return orientation === "vertical" ? "aspect-[3/4]" : "aspect-video"
  }

  // Function to get the appropriate label text
  const getLabelText = (orientation: string) => {
    return orientation === "vertical" ? "Before/After" : "Before & After"
  }

  // Handle image click
  const handleImageClick = (item: (typeof galleryItems)[0]) => {
    setSelectedImage(item)
  }

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal()
      }
    }

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [selectedImage])

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{getServiceName()}</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            See the dramatic difference our pressure washing services can make on properties throughout our service
            area. Click any photo to view it larger.
          </p>
        </div>
      </div>

      {filterParam && (
        <div className="mt-6 flex justify-center">
          <Link
            href={`/services#${filterParam === "deck" ? "deck" : filterParam === "patio-walkway" ? "patio-walkway" : filterParam === "solar-window" ? "solar-window" : filterParam}`}
          >
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to {getServiceName()}
            </Button>
          </Link>
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-12">
        <div className="flex justify-center overflow-x-auto">
          <TabsList className="grid grid-cols-3 md:grid-cols-7 min-w-max">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="house">Houses</TabsTrigger>
            <TabsTrigger value="deck">Decks</TabsTrigger>
            <TabsTrigger value="patio-walkway">Patios & Walkways</TabsTrigger>
            <TabsTrigger value="solar-window">Solar & Windows</TabsTrigger>
            <TabsTrigger value="roof">Roofs</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-4">
                <div
                  className={`relative ${getAspectRatio(item.orientation)} overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity`}
                  onClick={() => handleImageClick(item)}
                >
                  <Image
                    src={item.photo || "/placeholder.svg"}
                    alt={`${item.title} before and after pressure washing`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                    {getLabelText(item.orientation)}
                  </div>
                  <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded">
                    Click to enlarge
                  </div>
                </div>
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
            ))}
          </div>
        </TabsContent>

        {["house", "deck", "patio-walkway", "solar-window", "roof", "commercial"].map((category) => (
          <TabsContent key={category} value={category} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <div key={item.id} className="flex flex-col gap-4">
                    <div
                      className={`relative ${getAspectRatio(item.orientation)} overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity`}
                      onClick={() => handleImageClick(item)}
                    >
                      <Image
                        src={item.photo || "/placeholder.svg"}
                        alt={`${item.title} before and after pressure washing`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                        {getLabelText(item.orientation)}
                      </div>
                      <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded">
                        Click to enlarge
                      </div>
                    </div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={handleCloseModal}>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div
              className={`relative ${getAspectRatio(selectedImage.orientation)} w-full max-w-4xl`}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.photo || "/placeholder.svg"}
                alt={`${selectedImage.title} before and after pressure washing - enlarged view`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg">
              <h3 className="text-lg font-medium text-center">{selectedImage.title}</h3>
              <p className="text-sm text-gray-300 text-center">{getLabelText(selectedImage.orientation)}</p>
            </div>
          </div>
        </div>
      )}

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
