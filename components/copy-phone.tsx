"use client"

import { useEffect, useState } from "react"
import { Check, Copy, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * The phone number with a "Copy" button next to it, shown near the top of the
 * homepage. Tapping Copy puts the number on the clipboard and briefly says
 * "Copied"; if the browser refuses, it shows the number to copy by hand.
 * The number is passed in from the admin area, so it updates everywhere at
 * once when Jon changes it.
 */
export default function CopyPhone({ phone, className }: { phone: string; className?: string }) {
  const [copied, setCopied] = useState(false)
  const [failed, setFailed] = useState(false)

  // Clear the "Copied" state after a moment.
  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  async function handleCopy() {
    setFailed(false)
    try {
      await navigator.clipboard.writeText(phone)
      setCopied(true)
    } catch {
      // Clipboard API needs a secure context and can be blocked by permissions.
      // Surface a hint rather than failing silently.
      setFailed(true)
    }
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-x-2 gap-y-1", className)}>
      <Phone className="h-4 w-4 flex-shrink-0 text-yellow-400" aria-hidden="true" />
      <span className="whitespace-nowrap text-base font-medium tabular-nums">{phone}</span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy phone number ${phone} to clipboard`}
        className="inline-flex flex-shrink-0 items-center gap-1 rounded px-2 py-1 text-sm underline-offset-2 transition-colors hover:bg-white/10 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-yellow-400" aria-hidden="true" />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" aria-hidden="true" />
            Copy
          </>
        )}
      </button>
      {/* Announce the result to screen readers without moving focus. */}
      <span aria-live="polite" className="sr-only">
        {copied ? "Phone number copied to clipboard" : ""}
        {failed ? `Copy failed. The number is ${phone}` : ""}
      </span>
      {failed && (
        <span className="basis-full text-sm text-yellow-400 sm:basis-auto">Copy it manually — {phone}</span>
      )}
    </div>
  )
}
