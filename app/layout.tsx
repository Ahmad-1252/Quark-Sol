import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { FloatingActions } from "@/components/floating-actions"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "QUARKSOL - Engineering at the Quark Level",
  description: "Premium digital solutions crafted with precision engineering and cutting-edge technology.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  )
}
