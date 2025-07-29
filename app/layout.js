import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingActions from "@/components/floating-actions"
import { Navbar } from "@/components/navbar" // Import Navbar

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar /> {/* Render Navbar here */}
          {children}
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  )
}
