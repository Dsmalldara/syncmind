/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import { Bot, Home, Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 container max-w-6xl py-12 md:py-24 flex flex-col items-center justify-center relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-5 -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl -z-10"></div>

        <div className="w-full max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="relative">
                <div className="text-[10rem] font-bold text-primary/10">404</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Bot className="h-24 w-24 text-primary animate-bounce-slow" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">Page Not Found</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Oops! It seems we  couldn't find the page you're looking for.
            </p>
          </div>

          <div className="bg-background rounded-xl border p-6 max-w-md mx-auto">
            <div className="space-y-4">
              <p className="text-muted-foreground">Here are some helpful links instead:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <Home className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>Home Page</span>
                </Link>
                <Link
                  href="/features"
                  className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors group"
                >
                  <Search className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  <span>Features</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default" className="bg-gradient-to-r from-primary to-accent">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-2 hover:border-primary hover:text-primary">
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
