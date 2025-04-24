"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroEmailForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return
    setIsSubmitting(true)
    // Navigate to waitlist page with email as query parameter
    router.push(`/waitlist?email=${encodeURIComponent(email)}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto space-x-2">
      <Input
        type="email"
        placeholder="Enter your email"
        className="flex-1 border-2 focus-visible:ring-accent"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button
        type="submit"
        className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
        disabled={isSubmitting}
      >
        Join Waitlist
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </form>
  )
}
