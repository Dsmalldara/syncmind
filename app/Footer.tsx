import React from 'react'
import Link from "next/link"
import Image from "next/image"
function Footer() {
  return (
    <footer className="border-t py-12 bg-muted">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 ">
               <Image src="/syncmind.png" alt="title"  className="flex scale-130"  height={30} width={30}/>
            <span className="text-xl font-bold gradient-text">SyncMind</span>
          </div>
          <p className="text-muted-foreground">
            AI-powered knowledge assistant for teams. Get instant answers from your company's documents.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-sm mb-4">Product</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Roadmap
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-sm mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-sm mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Syncmind. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer