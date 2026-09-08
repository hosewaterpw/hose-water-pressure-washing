/**
 * The FAQ page - the questions that expand when clicked, grouped under
 * headings. All of it comes from the admin area, so Jon can add or reword a
 * question himself.
 * It also hands Google a tidy list of every question and answer, which is how
 * they can end up shown directly on the search results page.
 */
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"
import { getBusiness, getFaqsByCategory } from "@/lib/content"

export const metadata: Metadata = {
  alternates: {
    canonical: "/faq",
  },
  title: "Pressure Washing FAQ | North Berwick, Maine",
  description:
    "Find answers to frequently asked questions about our pressure washing services in North Berwick, Maine. Learn about pricing, scheduling, preparation, and what to expect from our house washing, roof cleaning, and exterior services in York County and beyond.",
  keywords: [
    "pressure washing FAQ North Berwick",
    "house washing questions Maine",
    "power washing cost York County"
  ],
  openGraph: {
    title: "Pressure Washing FAQ | Hose Water Pressure Washing",
    description:
      "Answers to the most common questions about pressure washing in Southern Maine & New Hampshire. Learn about pricing, scheduling, what to expect, and more.",
  },
}

const faqData = getFaqsByCategory()

export default function FAQPage() {
  const business = getBusiness()

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

      <div className="container px-4 py-8 sm:px-6 md:px-8 md:py-10 lg:py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
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
                <a href={`tel:${business.phoneDial}`} className="text-yellow-400 hover:underline">
                  {business.phoneDisplay}
                </a>{" "}
                or email{" "}
                <a href={`mailto:${business.email}`} className="text-yellow-400 hover:underline">
                  {business.email}
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
