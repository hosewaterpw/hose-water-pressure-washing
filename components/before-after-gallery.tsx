"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Updated sample data for homepage preview - supports both orientations
const galleryItems = [
  {
    id: 1,
    title: "House Wash",
    photo: "/house-exterior-beforeafter.jpg",
    orientation: "vertical",
  },
  {
    id: 2,
    title: "House Wash",
    photo: "/house-exterior-2-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 3,
    title: "House Wash",
    photo: "/house-exterior-3-beforeafter.jpg",
    orientation: "vertical",
  },
  {
    id: 4,
    title: "Patio Cleaning",
    photo: "/patio-beforeafter.jpg",
    orientation: "Vertical",
  },
  {
    id: 5,
    title: "Concrete Cleaning",
    photo: "/concrete-walkway-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 6,
    title: "Roof Cleaning",
    photo: "/asphalt-roof-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 7,
    title: "Window Cleaning",
    photo: "/exterior-window-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 8,
    title: "Commercial Cleaning",
    photo: "/commercial-garage-rental-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
  id: 9,
  title: "House Wash - Wells",
  photo: "/house-wash-wells-beforeafter.png",
  orientation: "horizontal",
},
]
export default function BeforeAfterGallery() {
  const [activeItem, setActiveItem] = useState(galleryItems[0])

  // Function to get the appropriate aspect ratio class
  const getAspectRatio = (orientation: string) => {
    return orientation === "vertical" ? "aspect-[3/4]" : "aspect-video"
  }

  // Function to get the appropriate label text
  const getLabelText = (orientation: string) => {
    return orientation === "vertical" ? "Before/After" : "Before & After"
  }

  return (
    <div className="w-full">
      <Card>
        <CardContent className="p-4">
          <div className={`relative ${getAspectRatio(activeItem.orientation)} overflow-hidden rounded-md`}>
            <Image
              src={activeItem.photo || "/placeholder.svg"}
              alt={`${activeItem.title} before and after pressure washing`}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
              {getLabelText(activeItem.orientation)}
            </div>
            {/* Optional: Add orientation indicator */}
            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 text-xs rounded">
              {activeItem.orientation === "vertical" ? "↕" : "↔"}
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        {galleryItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item)}
            className={`relative min-w-[100px] h-[60px] rounded-md overflow-hidden border-2 ${
              activeItem.id === item.id ? "border-yellow-400" : "border-transparent"
            }`}
          >
            <Image src={item.photo || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xs font-medium">{item.title}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
