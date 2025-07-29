"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"
import { ThemeToggle } from "./theme-toggle"
import { Button, Menu, X } from "./ui-elements" // Assuming Menu and X are exported from ui-elements
import { usePathname } from "next/navigation"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  const headerClasses = `
    fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out
    ${scrolled ? (theme === "dark" ? "bg-slate-950/0" : "bg-white/0") : "bg-transparent"}
  `

  const innerContainerClasses = `
    relative flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6
    transition-all duration-300 ease-in-out mx-auto
    ${scrolled ? "max-w-[80%] rounded-b-xl shadow-lg" : "max-w-full rounded-none shadow-none"}
    ${
      theme === "dark"
        ? scrolled
          ? "bg-slate-900/80 backdrop-blur-md border border-slate-800/50"
          : "bg-transparent"
        : scrolled
          ? "bg-white/80 backdrop-blur-md border border-slate-200/50"
          : "bg-transparent"
    }
  `

  const linkClasses = `
    text-lg font-medium transition-colors duration-300 hover:text-blue-500
    ${theme === "dark" ? "text-slate-200" : "text-slate-700"}
  `

  const mobileMenuClasses = `
    fixed inset-0 z-50 flex flex-col items-center justify-center space-y-8
    ${theme === "dark" ? "bg-slate-950 text-white" : "bg-white text-slate-900"}
    transform transition-transform duration-300 ease-in-out
    ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}
  `

  return (
    <header className={headerClasses}>
      <div className={innerContainerClasses}>
        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
          <div className="relative group cursor-pointer">
            <div
              className={`w-10 sm:w-12 h-10 sm:h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105
              ${
                theme === "dark"
                  ? "bg-gradient-to-br from-blue-600 to-indigo-700 shadow-blue-600/25 group-hover:shadow-blue-600/40"
                  : "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/25 group-hover:shadow-blue-500/40"
              }`}
            >
              <Image
                src="/images/quarksol-logo.png"
                alt="QUARKSOL Logo"
                width={32}
                height={32}
                className="w-6 sm:w-8 h-6 sm:h-8"
              />
            </div>
          </div>
          <span
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight
            ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            QUARKSOL
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative group py-2 ${linkClasses} ${
                pathname === link.href ? "font-bold text-blue-500" : "" // Active link styling
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
          <ThemeToggle />
          <Link href="/contact">
            <Button
              className={`font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105
              ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-blue-600/25 hover:shadow-blue-600/40"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-blue-500/25 hover:shadow-blue-500/40"
              }`}
            >
              Let's Talk
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className={`transition-colors duration-300 ${theme === "dark" ? "text-white" : "text-slate-900"}`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={mobileMenuClasses}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close mobile menu"
          className="absolute top-6 right-6"
        >
          <X className="h-8 w-8" />
        </Button>
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-3xl font-bold ${linkClasses}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact">
            <Button
              size="lg"
              className={`font-semibold px-8 py-4 rounded-full shadow-md transition-all duration-300 hover:scale-105
              ${
                theme === "dark"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-blue-600/25 hover:shadow-blue-600/40"
                  : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-blue-500/25 hover:shadow-blue-500/40"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Let's Talk
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
