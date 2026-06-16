"use client"

import Script from "next/script"

export default function GoogleReviews() {
  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      <div
        className="elfsight-app-0d9ff567-d078-48ba-8d81-8595002fee4f"
        data-elfsight-app-lazy
      ></div>
    </>
  )
}
