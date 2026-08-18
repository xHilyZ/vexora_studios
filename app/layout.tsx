import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eindev.ir'),
  title: {
    default: "Vexora Studios — Premium FiveM Scripts & Custom MLOs",
    template: "%s | Vexora Studios",
  },
  description:
    "Vexora Studios provides high-performance, optimized FiveM scripts and custom map level objects (MLOs) for Qbox and ESX servers.",
  keywords: ["FiveM", "GTAV", "Scripts", "MLO", "Web Development", "Next.js", "React", "TypeScript", "Vexora Studios"],
  authors: [{ name: "Vexora Studios", url: "https://github.com/vexora-studios" }],
  creator: "Vexora Studios",
  publisher: "Vexora Studios",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Vexora Studios — Premium FiveM Scripts & Custom MLOs",
    description: "Vexora Studios provides high-performance, optimized FiveM scripts and custom map level objects (MLOs) for Qbox and ESX servers.",
    siteName: "Vexora Studios",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vexora Studios — Premium FiveM Scripts & Custom MLOs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vexora Studios — Premium FiveM Scripts & Custom MLOs",
    description: "High-performance, optimized FiveM scripts and custom interior environments.",
    creator: "@vexora_studios",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
