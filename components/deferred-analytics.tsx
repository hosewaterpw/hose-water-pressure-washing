"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { GoogleAnalytics } from "@next/third-parties/google"

const GA_ID = "G-SW9ESX4H4G"
const META_PIXEL_ID = "2844768349066272"

/**
 * Google Analytics and the Meta Pixel together weigh ~340KB and were the single
 * biggest contributor to Total Blocking Time - more than every image and script
 * of our own combined. Loading them on first interaction (or after a short
 * fallback delay) keeps the main thread free while the page is still painting.
 *
 * Trade-off: a visitor who leaves within the first few seconds without touching
 * anything is not counted. That is a small share of traffic, and the delay is
 * invisible to anyone who actually reads the page.
 */
export default function DeferredAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (shouldLoad) return

    const start = () => setShouldLoad(true)
    const events: (keyof WindowEventMap)[] = ["scroll", "pointerdown", "keydown", "touchstart"]
    events.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }))

    // Fallback so visitors who never interact are still recorded.
    const timer = window.setTimeout(start, 4000)

    return () => {
      events.forEach((e) => window.removeEventListener(e, start))
      window.clearTimeout(timer)
    }
  }, [shouldLoad])

  if (!shouldLoad) return null

  return (
    <>
      <GoogleAnalytics gaId={GA_ID} />
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}
          (window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  )
}
