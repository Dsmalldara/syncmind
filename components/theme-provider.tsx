// components/theme-provider.tsx
"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  return (
    <NextThemesProvider 
      attribute="class" // This is crucial - it tells next-themes to use the 'class' attribute
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {mounted && children}
    </NextThemesProvider>
  )
}