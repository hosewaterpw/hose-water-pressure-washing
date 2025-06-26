import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Hose Water Pressure Washing LLC",
  description:
    "Get answers to common questions about our pressure washing services in North Berwick Maine. Learn about pricing, scheduling, service areas, and what to expect from our professional cleaning services.",
  keywords: [
    "pressure washing FAQ North Berwick Maine",
    "pressure washing questions York County",
    "house washing FAQ Maine",
    "pressure washing cost Maine",
    "pressure washing service area North Berwick",
    "pressure washing scheduling Maine",
    "pressure washing preparation tips",
  ],
  openGraph: {
    title: "Pressure Washing FAQ | Hose Water Pressure Washing LLC",
    description:
      "Common questions and answers about professional pressure washing services in North Berwick Maine and York County.",
  },
}

const faqData = [
  {
    category: "Services & Pricing",
    questions: [
      {
        question: "What pressure washing services do you offer?",
        answer:
          "We offer comprehensive pressure washing services including house washing, deck cleaning and restoration, patio and walkway cleaning, roof cleaning, solar panel and window cleaning, fence cleaning, and commercial property cleaning. We serve both residential and commercial properties throughout Southern Maine and New Hampshire.",
      },
      {
        question: "How much do your services cost?",
        answer:
          "Our pricing varies based on the size of the property, type of service, and specific cleaning requirements. We provide free, no-obligation estimates for all services. Contact us or fill out our online estimate form to receive a customized quote for your property.",
      },
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes! We provide completely free, no-obligation estimates for all our services. You can request an estimate through our online form, call us at (207) 370-8667, or email us at hosewaterpw@gmail.com.",
      },
      {
        question: "What's included in a typical house washing service?",
        answer:
          "Our house washing service includes cleaning exterior surfaces of your home including siding, trim, windows, doors, and accessible areas. We remove dirt, mold, mildew, algae, and other organic growth. We use appropriate pressure settings and cleaning solutions safe for your home's exterior materials.",
      },
    ],
  },
  {
    category: "Service Area & Scheduling",
    questions: [
      {
        question: "What areas do you serve?",
        answer:
          "We serve Southern Maine and New Hampshire within a 40-mile radius of North Berwick, Maine. This includes York County communities like Wells, Kennebunk, Sanford, Biddeford, and extends into New Hampshire areas like Portsmouth and surrounding communities. Contact us to confirm service availability in your specific location.",
      },
      {
        question: "How far in advance should I schedule service?",
        answer:
          "We recommend scheduling 1-2 weeks in advance, especially during our busy spring and summer seasons. However, we often have availability for urgent requests. Contact us to check our current schedule and availability.",
      },
      {
        question: "What are your operating hours?",
        answer:
          "We typically operate Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 4:00 PM. We're closed on Sundays. However, we can sometimes accommodate special scheduling requests for commercial properties or urgent situations.",
      },
      {
        question: "Do you work year-round?",
        answer:
          "Our main operating season is from spring through fall when temperatures are consistently above freezing. We typically operate from March through November, depending on weather conditions. Winter services may be available for certain commercial applications - contact us to discuss your specific needs.",
      },
    ],
  },
  {
    category: "Preparation & Safety",
    questions: [
      {
        question: "Do I need to be home during the service?",
        answer:
          "You don't need to be home during most services, but we do recommend being available for the initial walkthrough and final inspection. We'll discuss access requirements and any special instructions during our estimate appointment.",
      },
      {
        question: "What should I do to prepare for pressure washing?",
        answer:
          "Please close all windows and doors, remove or secure outdoor furniture and decorations, trim back vegetation near the house, and ensure we have access to water and electrical outlets. We'll provide a detailed preparation checklist when we schedule your service.",
      },
      {
        question: "Is pressure washing safe for my home and landscaping?",
        answer:
          "Yes, when performed by professionals. We use appropriate pressure settings for different surfaces and materials. We also take precautions to protect your landscaping by pre-wetting plants and using eco-friendly cleaning solutions when possible.",
      },
      {
        question: "Are your cleaning solutions safe?",
        answer:
          "We use professional-grade, biodegradable cleaning solutions that are safe for your family, pets, and landscaping when used properly. We follow all manufacturer guidelines and industry best practices for safe application.",
      },
    ],
  },
  {
    category: "Weather & Timing",
    questions: [
      {
        question: "What happens if it rains on my scheduled service day?",
        answer:
          "Light rain usually doesn't prevent us from working, but heavy rain or storms will cause us to reschedule for safety reasons. We monitor weather forecasts closely and will contact you in advance if we need to reschedule due to weather conditions.",
      },
      {
        question: "What's the best time of year for pressure washing?",
        answer:
          "Spring and fall are ideal times for pressure washing. Spring cleaning removes winter buildup and prepares your property for the warmer months. Fall cleaning removes summer growth and prepares surfaces for winter. However, we can provide services throughout our operating season based on your needs.",
      },
      {
        question: "How long does the cleaning process take?",
        answer:
          "Service time varies based on property size and services requested. A typical house washing takes 2-4 hours, while smaller services like patio cleaning might take 1-2 hours. We'll provide an estimated timeframe when we schedule your service.",
      },
    ],
  },
  {
    category: "Results & Maintenance",
    questions: [
      {
        question: "How long do the results last?",
        answer:
          "Results typically last 1-2 years for most services, depending on environmental factors like shade, moisture, and local climate conditions. Properties in heavily shaded or humid areas may need more frequent cleaning. We can recommend a maintenance schedule based on your specific property.",
      },
      {
        question: "Will pressure washing damage my surfaces?",
        answer:
          "When performed correctly by professionals, pressure washing should not damage your surfaces. We adjust pressure settings and techniques based on the material being cleaned. We have experience with all common exterior materials including vinyl, wood, concrete, brick, and composite materials.",
      },
      {
        question: "What if I'm not satisfied with the results?",
        answer:
          "Customer satisfaction is our top priority. If you're not completely satisfied with our work, please contact us within 24 hours and we'll return to address any concerns at no additional charge. We stand behind our work and want every customer to be happy with the results.",
      },
      {
        question: "Do you offer maintenance programs?",
        answer:
          "Yes! We can set up regular maintenance schedules for both residential and commercial properties. Regular maintenance helps keep your property looking its best year-round and can be more cost-effective than one-time services. Contact us to discuss a maintenance plan that fits your needs and budget.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <>
      {/* Structured Data for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.flatMap((category) =>
              category.questions.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            ),
          }),
        }}
      />

      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl">
              Get answers to common questions about our professional pressure washing services in Southern Maine and New
              Hampshire.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h2 className="text-2xl font-bold text-[#333333] border-b-2 border-yellow-400 pb-2">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, faqIndex) => (
                  <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                    <AccordionTrigger className="text-left hover:text-yellow-600">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 py-12 px-6 bg-[#333333] text-white rounded-lg">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Still Have Questions?</h2>
            <p className="max-w-[600px]">
              Can't find the answer you're looking for? We're here to help! Contact us directly or request a free
              estimate to discuss your specific needs.
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
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-300">
                Call us at{" "}
                <a href="tel:207-370-8667" className="text-yellow-400 hover:underline">
                  (207) 370-8667
                </a>{" "}
                or email{" "}
                <a href="mailto:hosewaterpw@gmail.com" className="text-yellow-400 hover:underline">
                  hosewaterpw@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
