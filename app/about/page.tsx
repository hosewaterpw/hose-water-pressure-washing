import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Calendar, CheckCircle, Clock, Heart, Star, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Jonathan Bilodeau | Owner of Hose Water Pressure Washing LLC",
  description:
    "Meet Jonathan Bilodeau, owner of Hose Water Pressure Washing LLC. Family-owned pressure washing business serving Southern Maine and New Hampshire since 2022. Personal service, honest work, quality results.",
  keywords: [
    "Jonathan Bilodeau",
    "Hose Water Pressure Washing owner",
    "pressure washing [Your City]",
    "family owned pressure washing",
    "local pressure washing business",
    "[Your City] pressure washing company",
  ],
  openGraph: {
    title: "About Jonathan Bilodeau | Owner of Hose Water Pressure Washing LLC",
    description:
      "Meet the owner of Hose Water Pressure Washing LLC. Family-owned business serving Southern Maine and New Hampshire with personal service and quality results.",
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Structured Data for Person/Business Owner */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jonathan P. Bilodeau",
            jobTitle: "Owner",
            worksFor: {
              "@type": "LocalBusiness",
              name: "Hose Water Pressure Washing LLC",
            },
            description:
              "Owner of Hose Water Pressure Washing LLC, providing professional pressure washing services in Southern Maine and New Hampshire since 2022",
            url: "https://hosewaterpw.com/about",
            sameAs: ["https://www.facebook.com/hosewaterpw", "https://www.instagram.com/hosewaterpw"],
          }),
        }}
      />

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Hose Water Pressure Washing LLC
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Meet Jonathan Bilodeau, the owner and operator providing personal pressure washing services throughout
              Southern Maine and New Hampshire.
            </p>
          </div>
        </div>

        {/* Owner Introduction */}
        <section className="mt-16">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src="/owner-portrait.png"
                alt="Jonathan P. Bilodeau, Owner of Hose Water Pressure Washing LLC"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Jonathan P. Bilodeau</h2>
                <p className="text-xl text-gray-500">Owner, Hose Water Pressure Washing LLC</p>
              </div>
              <div className="space-y-4">
                <p>
                  Hi, I'm the owner of Hose Water Pressure Washing LLC — a hands-on, down-to-earth guy who enjoys hard
                  work, being outdoors, and making things look like new again throughout Southern Maine and New
                  Hampshire.
                </p>
                <p>
                  I started this pressure washing business in 2022 with a simple mission: offer reliable, honest
                  exterior cleaning services that people throughout York County and surrounding counties can trust. I didn't start with a huge
                  team or a fleet of trucks — just a strong work ethic, the right tools, and a belief that if you do a
                  job right and treat people fairly, the rest will follow.
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="/contact">
                  <Button className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">Contact Me</Button>
                </Link>
                <Link href="/estimate">
                  <Button variant="outline" className="gap-2 bg-transparent hover:bg-gray-50">
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Approach</h2>
            <p className="mt-2 text-gray-500 max-w-2xl mx-auto">
              What makes Hose Water Pressure Washing different from other services in Southern Maine and New Hampshire.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-yellow-400/10 p-3">
                  <CheckCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold">Personal Service</h3>
                <p className="mt-2 text-gray-500">
                  "I show up, I do the work myself, and I treat every home like it's my own."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-yellow-400/10 p-3">
                  <ThumbsUp className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold">Honest Work</h3>
                <p className="mt-2 text-gray-500">
                  "I'm not here to upsell or overpromise — just to give you a straightforward experience."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-yellow-400/10 p-3">
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold">Quality Results</h3>
                <p className="mt-2 text-gray-500">
                  "I bring attention to detail and a real sense of pride to every job."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Owner Story */}
        <section className="mt-24">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-center mb-8">My Story</h2>
              <p>
                What makes me different is simple: I show up, I do the work myself, and I treat every home like it's my
                own. I'm not here to upsell or overpromise — just to give you a straightforward experience and results
                you'll notice. Whether it's siding, walkways, decks, patios, or solar panels, I bring attention to
                detail and a real sense of pride to every job throughout York County Maine.
              </p>
              <p>
                When I'm not on the clock, I'm usually outside. I love to hunt, fish, forage, and play disc golf. I'm a
                father of three, and I spend a lot of time with my kids around a backyard fire — it's one of our
                favorite things to do together. And I get it — those little outdoor spaces matter. Having a clean place
                to relax, gather, and enjoy life makes a difference. That's part of what drives me in this business:
                helping people take care of their homes so they can enjoy them more.
              </p>
              <p>
                I'm not trying to be the biggest company out there — just one of the most dependable. If you're looking
                for someone real who will treat your property with respect and do the job right the first time, I'd be
                glad to earn your business anywhere in York County Maine.
              </p>
              <p className="font-medium">
                Thanks for visiting Hose Water Pressure Washing LLC. I look forward to working with you.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="font-bold">— Jonathan P. Bilodeau</p>
                <p className="text-gray-500">Owner, Hose Water Pressure Washing LLC</p>
              </div>
            </div>
          </div>
        </section>

        {/* Business Details */}
        <section className="mt-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-yellow-400/10 p-3">
                <Calendar className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold">Established</h3>
              <p className="mt-2 text-gray-500">Founded in 2022</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-yellow-400/10 p-3">
                <Award className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold">Service Area</h3>
              <p className="mt-2 text-gray-500">Serving Southern Maine and New Hampshire</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-yellow-400/10 p-3">
                <Heart className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold">Family Owned</h3>
              <p className="mt-2 text-gray-500">Father of three</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-yellow-400/10 p-3">
                <Clock className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold">Reliable Service</h3>
              <p className="mt-2 text-gray-500">On time, every time</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-24 py-12 px-6 bg-[#333333] text-white rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to Work Together?</h2>
            <p className="max-w-[600px]">
              Contact me today to schedule a service or request a free estimate for your pressure washing needs anywhere
              in York County Maine.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/estimate">
                <Button size="lg" className="bg-yellow-400 text-[#333333] hover:bg-yellow-500">
                  Get a Free Estimate
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10 bg-transparent"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
