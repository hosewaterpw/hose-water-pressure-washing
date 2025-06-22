"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
          <p className="max-w-[700px] text-gray-500 md:text-xl">
            Have questions or ready to schedule a service? Get in touch with our team serving Southern Maine and New
            Hampshire.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <form action="/api/contact" method="POST" className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="flex flex-col justify-center space-y-8">
          <div className="flex items-start space-x-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Phone</h3>
              <p className="text-gray-500 mt-1">207-370-8667</p>
              <p className="text-sm text-muted-foreground mt-1">
                Monday - Saturday: 9:00 AM - 5:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="rounded-full bg-primary/10 p-3">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Email</h3>
              <p className="text-gray-500 mt-1">hosewaterpw@gmail.com</p>
              <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="rounded-full bg-primary/10 p-3">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Service Area</h3>
              <p className="text-gray-500 mt-1">Southern Maine and New Hampshire</p>
              <p className="text-sm text-muted-foreground mt-1">
                We service residential and commercial properties throughout Southern Maine and New Hampshire
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
