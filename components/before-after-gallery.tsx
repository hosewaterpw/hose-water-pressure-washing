"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data with placeholder images
const galleryItems = [
  {
    id: 1,
    title: "House Exterior",
    before: "/placeholder.svg?height=400&width=600&text=House+Before",
    after: "/placeholder.svg?height=400&width=600&text=House+After",
  },
  {
    id: 3,
    title: "Wooden Deck",
    before: "/placeholder.svg?height=400&width=600&text=Deck+Before",
    after: "/placeholder.svg?height=400&width=600&text=Deck+After",
  },
]

export default function BeforeAfterGallery() {
  const [activeItem, setActiveItem] = useState(galleryItems[0])

  return (
    <div className="w-full">
      <Tabs defaultValue="before-after" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="before-after">Before & After</TabsTrigger>
          <TabsTrigger value="slider">Slider View</TabsTrigger>
        </TabsList>
        <TabsContent value="before-after" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="relative aspect-video overflow-hidden rounded-md">
                  <Image
                    src={activeItem.before || "/placeholder.svg"}
                    alt={`${activeItem.title} before pressure washing`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                    Before
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="relative aspect-video overflow-hidden rounded-md">
                  <Image
                    src={activeItem.after || "/placeholder.svg"}
                    alt={`${activeItem.title} after pressure washing`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">After</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {galleryItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`relative min-w-[100px] h-[60px] rounded-md overflow-hidden border-2 ${
                  activeItem.id === item.id ? "border-yellow-400" : "border-transparent"
                }`}
              >
                <Image src={item.after || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">{item.title}</span>
                </div>
              </button>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="slider" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <div className="relative aspect-video overflow-hidden rounded-md">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative overflow-hidden">
                    <Image
                      src={activeItem.before || "/placeholder.svg"}
                      alt={`${activeItem.title} before pressure washing`}
                      fill
                      className="object-cover object-right"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                      Before
                    </div>
                  </div>
                  <div className="w-1/2 relative overflow-hidden">
                    <Image
                      src={activeItem.after || "/placeholder.svg"}
                      alt={`${activeItem.title} after pressure washing`}
                      fill
                      className="object-cover object-left"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-sm rounded">
                      After
                    </div>
                  </div>
                  <div className="absolute inset-y-0 left-1/2 w-1 bg-white transform -translate-x-1/2"></div>
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
                <Image src={item.after || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-xs font-medium">{item.title}</span>
                </div>
              </button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
