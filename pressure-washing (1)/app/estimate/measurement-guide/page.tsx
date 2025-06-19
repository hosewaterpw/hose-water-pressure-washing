import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import MeasurementGuide from "@/components/measurement-guide"

export default function MeasurementGuidePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
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
              <span className="font-medium">Phone:</span> (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <span className="font-medium">Email:</span> info@hosewaterpw.com
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
