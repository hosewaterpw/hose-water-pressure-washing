"use client"

/**
 * The "Real Results" row of before-and-after photos on the homepage, with the
 * round arrows either side for sliding along it.
 * It shows only the photos Jon has ticked "Show on homepage" in the admin area.
 * On a wide screen four fit exactly, so the arrows hide themselves; on a phone
 * you swipe sideways instead.
 */
import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"


// A sliding row of cards, matching the Google Reviews widget above it. A single
// centred image left large empty margins, because these photos are much narrower
// than the full container width.
type Item = {
  title: string
  image: string
  alt: string
}

// Photos come from /content via the homepage, filtered to those ticked
// "Show on homepage" in the CMS.
export default function BeforeAfterGallery({ galleryItems }: { galleryItems: Item[] }) {
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
            key={item.image}
            // On large screens all four fill the row exactly (3 gaps of 1rem), so
            // there is nothing to scroll and the arrows hide themselves.
            className="w-[260px] flex-shrink-0 snap-start overflow-hidden rounded-xl border bg-white sm:w-[300px] lg:w-[calc((100%-3rem)/4)]"
          >
            <div className="relative h-[200px] w-full bg-gray-100 sm:h-[220px]">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
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
