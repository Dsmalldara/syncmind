import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/app/Footer"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SyncMind - AI Assistant for Teams",
  description: "AI-powered knowledge assistant for teams. Get instant answers from your company's documents.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
         
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
