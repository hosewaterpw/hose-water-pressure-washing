import { Suspense } from "react"
import type { Metadata } from "next"
import GalleryClient from "./gallery-client"
import { getGallery } from "@/lib/content"

export const metadata: Metadata = {
  alternates: {
    canonical: "/gallery",
  },
  title: "Before & After Photo Gallery | Southern Maine & NH",
  description:
    "Browse real before-and-after photos of our pressure washing work on houses, decks, patios, roofs, and solar panels across York County, Maine and the NH Seacoast.",
}

// The gallery is a client component (it reads ?filter= via useSearchParams), so
// this server page loads the photos from /content and passes them down. That
// keeps the page static HTML and crawlable.
export default function GalleryPage() {
  const galleryItems = getGallery()

  return (
    <Suspense>
      <GalleryClient galleryItems={galleryItems} />
    </Suspense>
  )
}
