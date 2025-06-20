import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSuccessPage() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-24 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <CheckCircle className="h-12 w-12 text-primary" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Thank You for Contacting Us!</h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl">
            We've received your message and will get back to you within 24 hours.
          </p>
          <p className="text-gray-500">
            For urgent matters, please call us at <strong>207-370-8667</strong>
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link href="/">
            <Button>Return to Home</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline">View Our Services</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
