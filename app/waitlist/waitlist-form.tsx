/* eslint-disable react/no-unescaped-entities */
"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, CheckCircle } from "lucide-react"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().optional(),
  source: z.enum(["google", "social_media", "friend", "blog", "event", "other"]),
})

type FormValues = z.infer<typeof formSchema>

export function WaitlistForm() {
  const searchParams = useSearchParams()
  const emailFromQuery = searchParams.get("email")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: emailFromQuery || "",
      company: "",
      message: "",
      source: "other",
    },
  })

  // Update email field when query parameter changes
  useEffect(() => {
    if (emailFromQuery) {
      form.setValue("email", emailFromQuery)
    }
  }, [emailFromQuery, form])

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to join waitlist")
      }

      setSubmitSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="space-y-6 max-w-md mx-auto text-center">
        <div className="flex justify-center">
          <div className="bg-primary/10 p-6 rounded-full">
            <CheckCircle className="h-16 w-16 text-primary" />
          </div>
        </div>
        <h2 className="text-2xl font-bold gradient-text">You're on the list!</h2>
        <p className="text-muted-foreground">
          Thank you for joining our waitlist. We'll notify you when we launch and provide early access to our platform.
        </p>
        <Button
          onClick={() => setSubmitSuccess(false)}
          variant="outline"
          className="border-2 hover:border-primary hover:text-primary transition-colors"
        >
          Join with another email
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 gradient-text">Join the SyncMind Waitlist</h1>
        <p className="text-xl text-muted-foreground">Be the first to know when we launch and get early access.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-2 group">
          <div className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-primary/20 transition-colors">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <p>Get early access to our beta program</p>
        </div>
        <div className="flex items-start gap-2 group">
          <div className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-primary/20 transition-colors">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <p>Receive exclusive updates and product news</p>
        </div>
        <div className="flex items-start gap-2 group">
          <div className="bg-primary/10 p-1 rounded-full mt-1 group-hover:bg-primary/20 transition-colors">
            <Check className="h-4 w-4 text-primary" />
          </div>
          <p>Special pricing for early adopters</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-md">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-foreground font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your full name" 
                    className="border-2 focus-visible:ring-accent text-foreground placeholder:text-muted-foreground/70 bg-background/80" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-foreground font-medium">Work Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your work email"
                    className="border-2 focus-visible:ring-accent text-foreground placeholder:text-muted-foreground/70 bg-background/80"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-foreground font-medium">Company Name (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your company name"
                    className="border-2 focus-visible:ring-accent text-foreground placeholder:text-muted-foreground/70 bg-background/80"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="source"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-foreground font-medium">How did you hear about us?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-2 focus-visible:ring-accent text-foreground bg-background/80">
                      <SelectValue placeholder="Select an option" className="text-foreground" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-background border-accent/20">
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="social_media">Social Media</SelectItem>
                    <SelectItem value="friend">Friend or Colleague</SelectItem>
                    <SelectItem value="blog">Blog or Article</SelectItem>
                    <SelectItem value="event">Event or Conference</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-foreground font-medium">Message (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us what you're interested in..."
                    className="resize-none border-2 focus-visible:ring-accent text-foreground placeholder:text-muted-foreground/70 bg-background/80"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-muted-foreground/90">Let us know if you have any specific questions or interests.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-md text-red-800 dark:text-red-300 text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-primary-foreground font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </Button>

          
        </form>
      </Form>
    </div>
  )
}