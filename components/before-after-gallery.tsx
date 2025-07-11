"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Updated sample data for homepage preview - supports both orientations
const galleryItems = [
  {
    id: 1,
    title: "House Exterior",
    photo: "/house-exterior-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 3,
    title: "Wooden Deck",
    photo: "/wooden-deck-1-beforeafter.jpg",
    orientation: "vertical",
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
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
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
