"use client"

import { useEffect, useState } from "react"
import { Check, Copy, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export const PHONE_DISPLAY = "(207) 370-8667"
export const PHONE_PLAIN = "207-370-8667"

/**
 * Shows the business phone number with a copy-to-clipboard control.
 * Deliberately does not navigate anywhere — the number is the point.
 */
export default function CopyPhone({ className }: { className?: string }) {
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
      await navigator.clipboard.writeText(PHONE_PLAIN)
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
      <span className="whitespace-nowrap text-base font-medium tabular-nums">{PHONE_DISPLAY}</span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy phone number ${PHONE_DISPLAY} to clipboard`}
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
        {failed ? `Copy failed. The number is ${PHONE_DISPLAY}` : ""}
      </span>
      {failed && (
        <span className="basis-full text-sm text-yellow-400 sm:basis-auto">Copy it manually — {PHONE_DISPLAY}</span>
      )}
    </div>
  )
}
