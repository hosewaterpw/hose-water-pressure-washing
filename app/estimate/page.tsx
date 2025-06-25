"use client"

import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function EstimatePage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get a Free Estimate</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Answer a few simple questions about your property and we'll provide you with a free, no-obligation estimate.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <Card>
          <CardContent className="p-6">
            <form
              name="estimate-form"
              method="POST"
              action="/estimate-success/"
              encType="multipart/form-data"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="estimate-form" />
              <p className="hidden">
                <label>
                  Don't fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address</Label>
                    <Input id="address" name="address" required />
                  </div>
                </div>

                <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium">Property Details</h3>

                  <div className="space-y-3">
                    <Label htmlFor="stories">Number of Stories</Label>
                    <select
                      id="stories"
                      name="stories"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select number of stories</option>
                      <option value="1">1 Story</option>
                      <option value="1.5">1.5 Stories</option>
                      <option value="2">2 Stories</option>
                      <option value="2.5">2.5 Stories</option>
                      <option value="3">3+ Stories</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="exteriorType">Exterior Type</Label>
                    <select
                      id="exteriorType"
                      name="exteriorType"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select exterior type</option>
                      <option value="vinyl">Vinyl Siding</option>
                      <option value="brick">Brick</option>
                      <option value="wood">Wood</option>
                      <option value="stucco">Stucco</option>
                      <option value="stone">Stone</option>
                      <option value="hardie">Hardie Board/Fiber Cement</option>
                      <option value="mixed">Mixed Materials</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* New Exterior House Dimensions Section */}
                  <div className="space-y-4 p-4 bg-white/50 rounded-md border border-gray-200">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-medium">Exterior House Dimensions (Optional)</h4>
                      <Link href="/estimate/measurement-guide" target="_blank" rel="noopener noreferrer">
                        <Button type="button" variant="outline" size="sm" className="text-xs">
                          Measurement Guide
                        </Button>
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Providing approximate dimensions helps us give you a more accurate estimate. Don't worry if you're
                      not sure - we can always adjust later!
                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="houseLength">House Length (feet)</Label>
                        <Input
                          id="houseLength"
                          name="houseLength"
                          type="number"
                          placeholder="e.g. 40"
                          min="1"
                          max="200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="houseWidth">House Width (feet)</Label>
                        <Input
                          id="houseWidth"
                          name="houseWidth"
                          type="number"
                          placeholder="e.g. 30"
                          min="1"
                          max="200"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="wallHeight">Average Wall Height (feet)</Label>
                      <Input
                        id="wallHeight"
                        name="wallHeight"
                        type="number"
                        placeholder="e.g. 10 (per story)"
                        min="1"
                        max="50"
                      />
                      <p className="text-xs text-muted-foreground">
                        Typical single story: 8-12 feet, Two story: 16-24 feet total
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Services Needed (Select all that apply)</Label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="house-washing"
                          name="services"
                          value="house-washing"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="house-washing" className="text-sm font-normal">
                          House Washing
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="deck"
                          name="services"
                          value="deck"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="deck" className="text-sm font-normal">
                          Deck/Patio Cleaning
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="solar-window"
                          name="services"
                          value="solar-window"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="solar-window" className="text-sm font-normal">
                          Solar Panel/Window Cleaning
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="roof"
                          name="services"
                          value="roof"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="roof" className="text-sm font-normal">
                          Roof Cleaning
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="fence"
                          name="services"
                          value="fence"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="fence" className="text-sm font-normal">
                          Fence Washing
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="gutters"
                          name="services"
                          value="gutters"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="gutters" className="text-sm font-normal">
                          Gutter Cleaning
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="other"
                          name="services"
                          value="other"
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <Label htmlFor="other" className="text-sm font-normal">
                          Other
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Upload a Photo of Your House (Optional)</Label>
                  <p className="text-sm text-muted-foreground">
                    A photo helps us provide a more accurate estimate. You can upload a photo from the street view or
                    from Google Maps.
                  </p>
                  <input
                    type="file"
                    name="photos"
                    accept="image/*"
                    multiple
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Additional Information</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Tell us about any special requirements or areas that need attention..."
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button type="submit" className="w-full">
                  Submit for Free Estimate
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  By submitting this form, you agree to be contacted about our services.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 space-y-6">
          <h2 className="text-2xl font-bold">Why Get a Free Estimate?</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">No Obligation</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Our estimates are completely free with no obligation to book our services.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Accurate Pricing</h3>
              <p className="text-sm text-muted-foreground mt-2">
                By providing details about your property, we can give you an accurate price tailored to your needs.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium">Quick Response</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We typically respond with estimates within 24-48 hours of receiving your request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
