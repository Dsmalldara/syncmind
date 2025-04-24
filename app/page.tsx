"use client"

import { useScrollToHash } from "@/components/scroll-to-section"
import HomeComponent  from "@/app/home-component"

export default function Home() {
  // Handle scrolling to section if URL has a hash
  useScrollToHash()

  return <HomeComponent />
}
