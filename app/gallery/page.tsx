/**
 * The Gallery page. This half collects the photo list from the admin area's
 * files and hands it to gallery-client, which draws the grid.
 * Splitting it in two matters: it means the photos are baked into the page
 * itself rather than fetched afterwards, which is what lets Google see all of
 * them. Without it the gallery is invisible in search.
 */
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
    "Real before-and-after photos of our pressure washing work on houses, decks, patios, roofs and solar panels across York County and the NH Seacoast.",
}

export default function GalleryPage() {
  const galleryItems = getGallery()

  return (
    <Suspense>
      <GalleryClient galleryItems={galleryItems} />
    </Suspense>
  )
}
