"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const roles = ["building interfaces", "exploring systems", "breaking barriers", "forging ideas", "crafting code"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetText = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < targetText.length) {
            setDisplayText(targetText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Text */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                Vexora <span className="text-primary">Studios</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Fivem Scripting, framework customization & feature creation
              </p>
            </div>

            <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-muted-foreground">
              We are a tight-knit collective of FiveM developers crafting high-performance, fully optimized scripts and custom interior environments exclusively for Qbox and ESX.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="rounded-lg bg-primary px-8 py-4 font-mono text-sm text-primary-foreground transition-all hover:bg-primary/90"
              >
                View Scripts
              </a>
              <a
                href="https://discord.gg/vexora"
                className="rounded-lg border border-border px-8 py-4 font-mono text-sm text-foreground transition-all hover:bg-secondary"
              >
                Discord Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
