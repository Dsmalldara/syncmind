"use client"
import { ThemeToggle } from "@/components/theme-toggle"
import { Bot } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      // Prevent default link behavior
      event?.preventDefault()

      // Smooth scroll to the section
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/syncmind.png" alt="title"  className="flex scale-130"  height={30} width={30}/>
            <span className="text-xl font-bold gradient-text">SyncMind</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("features")
            }}
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("how-it-works")
            }}
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("pricing")
            }}
          >
            Pricing
          </a>
          <a
            href="#faq"
            className="text-sm font-medium hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("faq")
            }}
          >
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/login">
          <Button variant="outline" size="sm" className="transition-all hover:border-primary hover:text-primary">
            Log in
          </Button>
          
        </Link>
         <Link href="/waitlist">
         <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            Join Waitlist
          </Button>
         </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
