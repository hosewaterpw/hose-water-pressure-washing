import { Suspense } from "react"
import type { Metadata } from "next"
import GalleryClient from "./gallery-client"

export const metadata: Metadata = {
  title: "Before & After Photo Gallery | Southern Maine & NH",
  description:
    "Browse real before-and-after photos of our pressure washing work on houses, decks, patios, roofs, and solar panels across York County, Maine and the NH Seacoast.",
  alternates: {
    canonical: "/gallery",
  },
}

// The gallery itself is a client component (it reads ?category= via useSearchParams),
// so it lives in gallery-client.tsx and this server page supplies the metadata.
export default function GalleryPage() {
  return (
    <Suspense>
      <GalleryClient />
    </Suspense>
  )
}
