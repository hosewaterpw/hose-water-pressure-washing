import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const stories = formData.get("stories") as string
    const exteriorType = formData.get("exteriorType") as string
    const services = formData.getAll("services")
    const description = formData.get("description") as string
    const photos = formData.getAll("photos") as File[]

    // In a real application, you would send this to your email service
    // For now, we'll just log it and redirect
    console.log("Estimate form submission:", {
      name,
      email,
      phone,
      address,
      stories,
      exteriorType,
      services,
      description,
      photoCount: photos.length,
    })

    // Redirect to success page
    return NextResponse.redirect(new URL("/estimate-success", request.url))
  } catch (error) {
    console.error("Estimate form error:", error)
    return NextResponse.redirect(new URL("/estimate?error=true", request.url))
  }
}
