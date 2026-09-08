"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

/**
 * The "What Our Customers Say" section on the homepage - Jon's real Google
 * reviews, supplied by an outside service called Elfsight.
 * It's a heavy thing to load, so it waits until the visitor scrolls near it,
 * and the space is held open in advance so the page doesn't jump.
 * The five-second timer below is a safety net: if the scroll trigger ever
 * fails, the reviews load anyway rather than silently vanishing.
 */
export default function GoogleReviews() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    // Start loading a little before it reaches the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "300px" },
    )
    observer.observe(el)

    // Safety net: if the observer never fires (zero-size viewport, an odd
    // browser, or the element never scrolled to), load anyway. Jon's reviews
    // must not silently disappear for the sake of a performance score.
    const fallback = window.setTimeout(() => setInView(true), 5000)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [inView])

  return (
    <div ref={ref} className="min-h-[400px]">
      {inView && (
        <>
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-0d9ff567-d078-48ba-8d81-8595002fee4f" data-elfsight-app-lazy></div>
        </>
      )}
    </div>
  )
}
