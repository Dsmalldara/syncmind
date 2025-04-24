import { type NextRequest, NextResponse } from "next/server"
import { addToWaitlist } from "@/lib/waitlist"
import { z } from "zod"

// Define validation schema
const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(1, "Name is required"),
  company: z.string().optional(),
  message: z.string().optional(),
  source: z.enum(["google", "social_media", "friend", "blog", "event", "other"]).optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request body
    const result = waitlistSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ success: false, error: result.error.format() }, { status: 400 })
    }

    // Add to waitlist
    const response = await addToWaitlist({
      ...result.data,
      status: "pending",
    })

    if (!response.success) {
      return NextResponse.json({ success: false, error: "Failed to add to waitlist" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data: response.data })
  } catch (error) {
    console.error("Waitlist API error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
