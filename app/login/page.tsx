/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Bot, ArrowRight, Mail, Bell, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ComingSoonPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    setIsSubmitting(true)

    // Navigate to waitlist page with email as query parameter
    router.push(`/waitlist?email=${encodeURIComponent(email)}`)
  }

  // Handle feature card clicks
  const handleFeatureCardClick = (path: string) => {
    router.push(path)
  }

  // Set launch date to June 8, 2025
  useEffect(() => {
    // Set a fixed launch date (June 8, 2025)
    const launchDate = new Date("2025-06-08T00:00:00Z")

    const timer = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      // Handle case where launch date has passed
      if (difference < 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        clearInterval(timer)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b py-4">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary animate-pulse-slow" />
            <span className="text-xl font-bold gradient-text">Syncmind</span>
          </Link>
          <Link
            href="/"
            className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
        </div>
      </header>

      <div className="flex-1 container max-w-6xl py-12 md:py-24 flex flex-col items-center justify-center relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-5 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] md:w-[800px] h-[800px] bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="w-full max-w-3xl mx-auto text-center space-y-12">
          <ScrollReveal>
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Bot className="h-12 w-12 text-primary animate-pulse-slow" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text">Coming Soon</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're working hard to bring you the best AI-powered knowledge assistant. Login functionality will be
                available soon.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
              <CountdownItem value={countdown.days} label="Days" />
              <CountdownItem value={countdown.hours} label="Hours" />
              <CountdownItem value={countdown.minutes} label="Minutes" />
              <CountdownItem value={countdown.seconds} label="Seconds" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <div onClick={() => handleFeatureCardClick("/waitlist")} className="cursor-pointer">
                <FeatureCard
                  icon={<Mail className="h-6 w-6 text-primary" />}
                  title="Early Access"
                  description="Be the first to try our platform"
                />
              </div>
              <div onClick={() => handleFeatureCardClick("/waitlist")} className="cursor-pointer">
                <FeatureCard
                  icon={<Bell className="h-6 w-6 text-primary" />}
                  title="Notifications"
                  description="Get notified when we launch"
                />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email for updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-2 focus-visible:ring-accent"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Redirecting..." : "Notify Me"}
                </Button>
              </div>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <Button asChild variant="outline" className="border-2 hover:border-primary hover:text-primary">
              <Link href="/">
                Back to Home
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

function CountdownItem({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-xl border shadow-sm p-4 text-center"
    >
      <motion.div
        key={value}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="text-3xl md:text-4xl font-bold gradient-text"
      >
        {value}
      </motion.div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-background rounded-xl border p-6 text-center space-y-2 hover:shadow-md transition-shadow">
      <div className="flex justify-center">
        <div className="bg-primary/10 p-2 rounded-full">{icon}</div>
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
