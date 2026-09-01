"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Homepage preview only: one photo per main service, with the full set on /gallery.
// Kept to four deliberately - every thumbnail here is a full-size image download.
const galleryItems = [
  {
    id: 1,
    title: "House Wash - North Berwick",
    photo: "/house-exterior-beforeafter.jpg",
    orientation: "vertical",
  },
  {
    id: 2,
    title: "Roof Cleaning - Wells",
    photo: "/asphalt-roof-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 3,
    title: "Deck Cleaning - Lebanon",
    photo: "/deck-cleaning-lebanon-beforeafter.jpg",
    orientation: "horizontal",
  },
  {
    id: 4,
    title: "Patio Cleaning - Kittery",
    photo: "/patio-beforeafter.jpg",
    orientation: "vertical",
  },
]
export default function BeforeAfterGallery() {
  const [activeItem, setActiveItem] = useState(galleryItems[0])

  // Fixed viewer height rather than an aspect ratio: a 3/4 box at full container
  // width rendered over 1500px tall on desktop. object-contain keeps portrait and
  // landscape photos fully visible in the same frame.
  const viewerHeight = "h-[280px] sm:h-[380px] lg:h-[460px]"

  // Function to get the appropriate label text
  const getLabelText = (orientation: string) => {
    return orientation === "vertical" ? "Before/After" : "Before & After"
  }

  return (
    <div className="w-full">
      <Card>
        <CardContent className="p-4">
          <div className={`relative ${viewerHeight} overflow-hidden rounded-md bg-gray-100`}>
            <Image
              src={activeItem.photo || "/placeholder.svg"}
              alt={`${activeItem.title} before and after pressure washing`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain"
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
