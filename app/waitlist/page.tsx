
import { ArrowLeft, Bot } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { WaitlistForm } from "./waitlist-form"

export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-5 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl -z-10"></div>

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

      <main className="flex-1 container py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
        <div className="bg-background rounded-xl p-8 md:p-12 border shadow-sm">
          <WaitlistForm />
        </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-muted rounded-xl p-8 border shadow-sm hidden md:block gradient-border">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full text-primary-foreground">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">KnowledgeAI Assistant</h3>
                  <p className="text-sm text-muted-foreground">Your team's knowledge at your fingertips</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4 border">
                  <p className="text-sm font-medium mb-1">Question:</p>
                  <p>What's our company's policy on remote work?</p>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm font-medium mb-1">KnowledgeAI:</p>
                  <p>
                    According to our updated policy from March 2023, employees can work remotely up to 3 days per week.
                    Team leads have discretion to adjust this based on project needs. All employees must be available
                    during core hours (10am-3pm in their local time zone) and attend the weekly team meeting in person
                    once a month.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Sources: Remote Work Policy.pdf (updated March 2023), Employee Handbook Section 4.2
                  </p>
                </div>

                <div className="bg-background rounded-lg p-4 border">
                  <p className="text-sm font-medium mb-1">Question:</p>
                  <p>Do we have any special equipment allowance for remote work?</p>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm font-medium mb-1">KnowledgeAI:</p>
                  <p>
                    Yes, the company provides a one-time $500 home office setup allowance for all full-time employees.
                    Additionally, there's a $100 monthly stipend for internet and utilities. Equipment purchased with
                    the allowance remains company property. Submit receipts through the expense portal with the category
                    "Remote Work Allowance".
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Sources: Benefits Package 2023.pdf, Remote Work Policy Section 3.4
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </main>
    </div>
  )
}
