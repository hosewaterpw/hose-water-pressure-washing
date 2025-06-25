import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    // In a real application, you would send this to your email service
    // For now, we'll just log it and redirect
    console.log("Contact form submission:", { name, email, phone, message })

    // Redirect to success page
    return NextResponse.redirect(new URL("/contact-success", request.url))
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.redirect(new URL("/contact?error=true", request.url))
  }
}
