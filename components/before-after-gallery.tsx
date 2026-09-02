"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Homepage preview only: one photo per main service, with the full set on /gallery.
// Kept to four deliberately - each one is a full-size image download.
const galleryItems = [
  {
    id: 1,
    title: "House Wash - North Berwick",
    photo: "/house-exterior-beforeafter.jpg",
  },
  {
    id: 2,
    title: "Roof Cleaning - Wells",
    photo: "/asphalt-roof-beforeafter.jpg",
  },
  {
    id: 3,
    title: "Deck Cleaning - Lebanon",
    photo: "/deck-cleaning-lebanon-beforeafter.jpg",
  },
  {
    id: 4,
    title: "Patio Cleaning - Kittery",
    photo: "/patio-beforeafter.jpg",
  },
]

// A sliding row of cards, matching the Google Reviews widget above it. A single
// centred image left large empty margins, because these photos are much narrower
// than the full container width.
export default function BeforeAfterGallery() {
  const scroller = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateArrows = useCallback(() => {
    const el = scroller.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateArrows()
    window.addEventListener("resize", updateArrows)
    return () => window.removeEventListener("resize", updateArrows)
  }, [updateArrows])

  const scrollByCard = (direction: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    const card = el.querySelector("li")
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * step, behavior: "smooth" })
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        disabled={atStart}
        aria-label="Previous photos"
        className="absolute -left-2 top-[110px] z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-white text-[#333333] shadow transition-opacity hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-0 md:-left-4"
      >
        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        disabled={atEnd}
        aria-label="Next photos"
        className="absolute -right-2 top-[110px] z-10 flex h-9 w-9 items-center justify-center rounded-full border bg-white text-[#333333] shadow transition-opacity hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-0 md:-right-4"
      >
        <ChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>

      <ul
        ref={scroller}
        onScroll={updateArrows}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {galleryItems.map((item, i) => (
          <li
            key={item.id}
            // On large screens all four fill the row exactly (3 gaps of 1rem), so
            // there is nothing to scroll and the arrows hide themselves.
            className="w-[260px] flex-shrink-0 snap-start overflow-hidden rounded-xl border bg-white sm:w-[300px] lg:w-[calc((100%-3rem)/4)]"
          >
            <div className="relative h-[200px] w-full bg-gray-100 sm:h-[220px]">
              <Image
                src={item.photo || "/placeholder.svg"}
                alt={`${item.title} before and after pressure washing`}
                fill
                sizes="300px"
                className="object-contain"
                priority={i === 0}
              />
              <span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                Before &amp; After
              </span>
            </div>
            <p className="px-3 py-2.5 text-center text-sm font-medium">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
