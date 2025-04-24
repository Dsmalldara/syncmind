"use client"

import type React from "react"

import { useEffect } from "react"

export function useScrollToHash() {
  useEffect(() => {
    // Check if there's a hash in the URL when the component mounts
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)

      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [])
}

export function scrollToSection(sectionId: string, event?: React.MouseEvent) {
  event?.preventDefault()

  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })

    // Update URL hash without causing a page jump
    window.history.pushState({}, "", `#${sectionId}`)
  }
}
