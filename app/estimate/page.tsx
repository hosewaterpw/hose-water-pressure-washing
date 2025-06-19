"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Camera, Check, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function EstimatePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")
  const [houseType, setHouseType] = useState("")
  const [stories, setStories] = useState("")
  const [exteriorType, setExteriorType] = useState("")
  const [services, setServices] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])

      // Create preview URLs
      const newPreviews = newFiles.map((file) => URL.createObjectURL(file))
      setPreviews((prev) => [...prev, ...newPreviews])
    }
  }

  const removeFile = (index: number) => {
    // Revoke the object URL to avoid memory leaks
    URL.revokeObjectURL(previews[index])

    setFiles(files.filter((_, i) => i !== index))
    setPreviews(previews.filter((_, i) => i !== index))
  }

  const handleServiceChange = (service: string) => {
    setServices((prev) => {
      if (prev.includes(service)) {
        return prev.filter((s) => s !== service)
      } else {
        return [...prev, service]
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!address) {
      toast({
        title: "Address required",
        description: "Please provide your property address for an accurate estimate.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // In a real application, you would upload the files and form data to your server
    // This is a mock implementation
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Estimate request submitted!",
        description: "We'll get back to you with a free estimate soon.",
      })

      // Clear form and redirect
      setName("")
      setEmail("")
      setPhone("")
      setAddress("")
      setDescription("")
      setHouseType("")
      setStories("")
      setExteriorType("")
      setServices([])
      setFiles([])
      setPreviews([])

      // Redirect to thank you page
      router.push("/estimate/thank-you")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address</Label>
                    <Input id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                  </div>
                </div>

                <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                  <h3 className="text-lg font-medium">Property Details</h3>

                  <div className="space-y-3">
                    <Label>House Type</Label>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                      <div
                        className={`cursor-pointer rounded-lg border p-3 text-center hover:border-primary ${
                          houseType === "single-family" ? "border-primary bg-primary/5" : ""
                        }`}
                        onClick={() => setHouseType("single-family")}
                      >
                        <div className="relative mx-auto mb-2 h-20 w-20">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Single Family Home"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium">Single Family</span>
                      </div>
                      <div
                        className={`cursor-pointer rounded-lg border p-3 text-center hover:border-primary ${
                          houseType === "townhouse" ? "border-primary bg-primary/5" : ""
                        }`}
                        onClick={() => setHouseType("townhouse")}
                      >
                        <div className="relative mx-auto mb-2 h-20 w-20">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Townhouse"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium">Townhouse</span>
                      </div>
                      <div
                        className={`cursor-pointer rounded-lg border p-3 text-center hover:border-primary ${
                          houseType === "multi-family" ? "border-primary bg-primary/5" : ""
                        }`}
                        onClick={() => setHouseType("multi-family")}
                      >
                        <div className="relative mx-auto mb-2 h-20 w-20">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Multi-Family"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium">Multi-Family</span>
                      </div>
                      <div
                        className={`cursor-pointer rounded-lg border p-3 text-center hover:border-primary ${
                          houseType === "ranch" ? "border-primary bg-primary/5" : ""
                        }`}
                        onClick={() => setHouseType("ranch")}
                      >
                        <div className="relative mx-auto mb-2 h-20 w-20">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Ranch"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium">Ranch</span>
                      </div>
                      <div
                        className={`cursor-pointer rounded-lg border p-3 text-center hover:border-primary ${
                          houseType === "colonial" ? "border-primary bg-primary/5" : ""
                        }`}
                        onClick={() => setHouseType("colonial")}
                      >
                        <div className="relative mx-auto mb-2 h-20 w-20">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Colonial"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium">Colonial</span>
                      </div>
                      <div
                        className={`cursor-pointer rounded-lg border p-3 text-center hover:border-primary ${
                          houseType === "other" ? "border-primary bg-primary/5" : ""
                        }`}
                        onClick={() => setHouseType("other")}
                      >
                        <div className="relative mx-auto mb-2 h-20 w-20">
                          <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Other House Type"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-sm font-medium">Other</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="stories">Number of Stories</Label>
                    <Select value={stories} onValueChange={setStories}>
                      <SelectTrigger id="stories">
                        <SelectValue placeholder="Select number of stories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Story</SelectItem>
                        <SelectItem value="1.5">1.5 Stories</SelectItem>
                        <SelectItem value="2">2 Stories</SelectItem>
                        <SelectItem value="2.5">2.5 Stories</SelectItem>
                        <SelectItem value="3">3+ Stories</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="exteriorType">Exterior Type</Label>
                    <Select value={exteriorType} onValueChange={setExteriorType}>
                      <SelectTrigger id="exteriorType">
                        <SelectValue placeholder="Select exterior type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vinyl">Vinyl Siding</SelectItem>
                        <SelectItem value="brick">Brick</SelectItem>
                        <SelectItem value="wood">Wood</SelectItem>
                        <SelectItem value="stucco">Stucco</SelectItem>
                        <SelectItem value="stone">Stone</SelectItem>
                        <SelectItem value="hardie">Hardie Board/Fiber Cement</SelectItem>
                        <SelectItem value="mixed">Mixed Materials</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Services Needed (Select all that apply)</Label>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="house-washing"
                          checked={services.includes("house-washing")}
                          onCheckedChange={() => handleServiceChange("house-washing")}
                        />
                        <Label htmlFor="house-washing" className="text-sm font-normal">
                          House Washing
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="driveway"
                          checked={services.includes("driveway")}
                          onCheckedChange={() => handleServiceChange("driveway")}
                        />
                        <Label htmlFor="driveway" className="text-sm font-normal">
                          Driveway Cleaning
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="deck"
                          checked={services.includes("deck")}
                          onCheckedChange={() => handleServiceChange("deck")}
                        />
                        <Label htmlFor="deck" className="text-sm font-normal">
                          Deck/Patio Cleaning
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="roof"
                          checked={services.includes("roof")}
                          onCheckedChange={() => handleServiceChange("roof")}
                        />
                        <Label htmlFor="roof" className="text-sm font-normal">
                          Roof Cleaning
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="fence"
                          checked={services.includes("fence")}
                          onCheckedChange={() => handleServiceChange("fence")}
                        />
                        <Label htmlFor="fence" className="text-sm font-normal">
                          Fence Washing
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="gutters"
                          checked={services.includes("gutters")}
                          onCheckedChange={() => handleServiceChange("gutters")}
                        />
                        <Label htmlFor="gutters" className="text-sm font-normal">
                          Gutter Cleaning
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
                  <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {previews.map((preview, index) => (
                      <div key={index} className="relative aspect-square rounded-md overflow-hidden border">
                        <Image
                          src={preview || "/placeholder.svg"}
                          alt={`Property photo ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="absolute top-1 right-1 rounded-full bg-black/70 p-1 text-white"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    <label className="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md border border-dashed bg-muted/50 hover:bg-muted">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <Camera className="h-8 w-8 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">Add Photo</span>
                      </div>
                      <Input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Additional Information</Label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about any special requirements or areas that need attention..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Submitting..." : "Submit for Free Estimate"}
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
