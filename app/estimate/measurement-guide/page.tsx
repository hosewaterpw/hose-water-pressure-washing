import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import MeasurementGuide from "@/components/measurement-guide"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "How to Measure Your House for a Wash Quote",
  description:
    "A simple step-by-step guide to measuring your home's exterior so you can get an accurate house washing quote. Includes a diagram and worked example.",
  alternates: {
    canonical: "/estimate/measurement-guide",
  },
}

export default function MeasurementGuidePage() {
  return (
    <div className="container px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">House Measurement Guide</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Simple instructions to help you measure your house for a pressure washing estimate.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-3xl">
        <MeasurementGuide />
        <div className="mt-8 flex justify-center">
          <Link href="/estimate">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Estimate Form
            </Button>
          </Link>
        </div>
        <div className="mt-12 p-6 bg-muted/30 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Need Help?</h2>
          <p className="mb-4">
            If you're having trouble measuring your house or have questions, don't hesitate to contact us:
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+12073708667" className="hover:text-primary hover:underline">
                (207) 370-8667
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:info@hosewaterpw.com" className="hover:text-primary hover:underline">
                info@hosewaterpw.com
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            We're happy to help you get an accurate estimate for your pressure washing needs.
          </p>
        </div>
      </div>
    </div>
  )
}
