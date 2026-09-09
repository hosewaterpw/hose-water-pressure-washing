"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { GoogleAnalytics } from "@next/third-parties/google"

const GA_ID = "G-SW9ESX4H4G"
const META_PIXEL_ID = "2844768349066272"

/**
 * Loads the Google Analytics and Facebook tracking code, which is what tells
 * Jon how many people visit and where they came from.
 * It holds off until the visitor scrolls or taps something - or four seconds
 * pass, whichever comes first - because together these weigh about 340KB and
 * were the biggest single thing slowing the site down.
 * The trade-off: someone who leaves within a few seconds without touching
 * anything doesn't get counted.
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
