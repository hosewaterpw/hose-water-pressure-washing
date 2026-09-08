/**
 * What a visitor sees if they land on an address that doesn't exist - a
 * mistyped link, or an old page someone bookmarked years ago.
 * Rather than a dead end, it points them at the pages that matter: the
 * services, the photos, and the estimate form.
 */
import Link from "next/link"
import { ArrowRight, SearchX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBusiness } from "@/lib/content"

export default function NotFound() {
  const business = getBusiness()

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16 sm:px-6 md:px-8 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <div className="rounded-full bg-yellow-400/10 p-4">
          <SearchX className="h-12 w-12 text-yellow-500" aria-hidden="true" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Page Not Found</h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl">
            That page doesn&apos;t exist - it may have moved, or the link may have a typo in it.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/estimate">
            <Button size="lg" className="gap-2 bg-yellow-400 text-[#333333] hover:bg-yellow-500">
              Get a Free Estimate <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline">
              Return to Home
            </Button>
          </Link>
        </div>

        <div className="pt-4">
          <p className="text-sm text-gray-500">
            Looking for something in particular? Try our{" "}
            <Link href="/services" className="font-medium underline underline-offset-2 hover:text-yellow-600">
              services
            </Link>
            ,{" "}
            <Link href="/gallery" className="font-medium underline underline-offset-2 hover:text-yellow-600">
              before &amp; after photos
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-medium underline underline-offset-2 hover:text-yellow-600">
              contact page
            </Link>
            .
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Or just call{" "}
            <a href={`tel:${business.phoneDial}`} className="font-medium hover:text-yellow-600 hover:underline">
              {business.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
