"use client"

import type React from "react"

import { ArrowRight, Mail, Phone, MapPin, Clock, Send, Crown, Menu, X, CheckCircle, Globe, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasScrolledToForm, setHasScrolledToForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const contactFormRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Enhanced scroll logic with session tracking
  useEffect(() => {
    const startProject = searchParams.get("start-project")
    const sessionKey = "quarksol-scrolled-to-form"

    if (startProject === "true" && !hasScrolledToForm && contactFormRef.current) {
      // Check if we've already scrolled in this session
      const hasScrolledInSession = sessionStorage.getItem(sessionKey)

      if (!hasScrolledInSession) {
        // Mark that we're about to scroll
        setHasScrolledToForm(true)
        sessionStorage.setItem(sessionKey, "true")

        // Delay to ensure page is fully loaded
        const timer = setTimeout(() => {
          const targetElement = contactFormRef.current
          if (targetElement) {
            const targetPosition = targetElement.offsetTop - 100
            const startPosition = window.pageYOffset
            const distance = targetPosition - startPosition
            const duration = 1500
            let start: number | null = null

            const easeInOutCubic = (t: number): number => {
              return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
            }

            const animation = (currentTime: number) => {
              if (start === null) start = currentTime
              const timeElapsed = currentTime - start
              const progress = Math.min(timeElapsed / duration, 1)
              const ease = easeInOutCubic(progress)

              window.scrollTo(0, startPosition + distance * ease)

              if (timeElapsed < duration) {
                requestAnimationFrame(animation)
              } else {
                // Add subtle highlight effect
                if (targetElement) {
                  targetElement.style.transform = "scale(1.02)"
                  targetElement.style.transition = "transform 0.3s ease-out"
                  setTimeout(() => {
                    targetElement.style.transform = "scale(1)"
                  }, 300)
                }
              }
            }

            requestAnimationFrame(animation)
          }
        }, 500)

        return () => clearTimeout(timer)
      }
    }
  }, [searchParams, hasScrolledToForm])

  // Clear session storage when user navigates away
  useEffect(() => {
    const handleBeforeUnload = () => {
      const startProject = searchParams.get("start-project")
      if (startProject !== "true") {
        sessionStorage.removeItem("quarksol-scrolled-to-form")
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => window.removeEventListener("beforeunload", handleBeforeUnload)
  }, [searchParams])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 light:from-slate-50 light:via-slate-100 light:to-slate-200 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-xl border-b border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 shadow-lg shadow-slate-900/20 dark:shadow-slate-900/20 light:shadow-slate-100/20"
            : "bg-slate-950/80 dark:bg-slate-950/80 light:bg-white/80 backdrop-blur-sm border-b border-slate-700/30 dark:border-slate-700/30 light:border-slate-200/30"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative group cursor-pointer">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25 group-hover:shadow-blue-600/40 transition-all duration-300 group-hover:scale-105">
                  <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-transparent bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text font-bold text-sm sm:text-lg">
                      Q
                    </span>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-slate-200 dark:from-white dark:to-slate-200 light:from-slate-900 light:to-slate-700 bg-clip-text text-transparent">
                  QUARKSOL
                </span>
                <div className="text-xs text-amber-400 font-semibold tracking-wider hidden sm:block">
                  ENGINEERING AT THE QUARK LEVEL
                </div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-all duration-300 font-medium relative group py-2 ${
                    item.href === "/contact" ? "text-white dark:text-white light:text-slate-900" : ""
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
                      item.href === "/contact" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />

              <Link href="/contact?start-project=true">
                <Button className="hidden sm:flex bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-6 py-2 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-105">
                  <Crown className="w-4 h-4 mr-2" />
                  Start Project
                </Button>
              </Link>

              <Link href="/contact?start-project=true">
                <Button className="sm:hidden bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-4 py-2 rounded-xl shadow-lg shadow-blue-600/25 text-sm">
                  <Crown className="w-3 h-3 mr-1" />
                  Start
                </Button>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white dark:text-white light:text-slate-900 hover:text-blue-400 transition-colors duration-300 relative z-50"
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 relative">
                  <Menu
                    className={`w-6 h-6 absolute transition-all duration-300 ${
                      isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                    }`}
                  />
                  <X
                    className={`w-6 h-6 absolute transition-all duration-300 ${
                      isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-xl transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`flex flex-col items-center justify-center min-h-screen space-y-8 transition-all duration-500 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "About", href: "/about" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className={`text-2xl sm:text-3xl font-semibold text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-all duration-300 relative group py-3 ${
                  isMenuOpen ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-full border border-green-500/20 mb-6 sm:mb-8 backdrop-blur-sm">
              <Mail className="w-3 sm:w-4 h-3 sm:h-4 text-green-400 mr-2" />
              <span className="text-green-300 font-medium text-xs sm:text-sm">Let's Connect</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-white dark:text-white light:text-slate-900">Ready to Start Your</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Next Project?
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 dark:text-slate-300 light:text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your vision and create something extraordinary together. We're here to turn your ideas into
              reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-16 px-4 sm:px-6" ref={contactFormRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-slate-800/80 dark:to-slate-900/80 light:from-white/80 light:to-slate-50/80 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 shadow-2xl shadow-green-500/10">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl flex items-center justify-center">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white dark:text-white light:text-slate-900">
                        Start Your Project
                      </h2>
                      <p className="text-green-400 font-medium">Let's build something amazing together</p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-slate-700/50 dark:bg-slate-700/50 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-400 dark:placeholder-slate-400 light:placeholder-slate-500 focus:border-green-400 focus:ring-green-400/20 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-slate-700/50 dark:bg-slate-700/50 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-400 dark:placeholder-slate-400 light:placeholder-slate-500 focus:border-green-400 focus:ring-green-400/20 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2"
                        >
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-slate-700/50 dark:bg-slate-700/50 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-400 dark:placeholder-slate-400 light:placeholder-slate-500 focus:border-green-400 focus:ring-green-400/20 transition-colors"
                          placeholder="Your Company"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2"
                        >
                          Service Needed
                        </label>
                        <Select onValueChange={(value) => handleSelectChange("service", value)}>
                          <SelectTrigger className="bg-slate-700/50 dark:bg-slate-700/50 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 focus:border-green-400">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-800 dark:bg-slate-800 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200">
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                            <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                            <SelectItem value="web-scraping">Web Scraping & Data Extraction</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2"
                      >
                        Project Budget
                      </label>
                      <Select onValueChange={(value) => handleSelectChange("budget", value)}>
                        <SelectTrigger className="bg-slate-700/50 dark:bg-slate-700/50 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 focus:border-green-400">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 dark:bg-slate-800 light:bg-white border-slate-700 dark:border-slate-700 light:border-slate-200">
                          <SelectItem value="3k-5k">$3,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2"
                      >
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-slate-700/50 dark:bg-slate-700/50 light:bg-white border-slate-600 dark:border-slate-600 light:border-slate-300 text-white dark:text-white light:text-slate-900 placeholder-slate-400 dark:placeholder-slate-400 light:placeholder-slate-500 focus:border-green-400 focus:ring-green-400/20 transition-colors resize-none"
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold py-4 rounded-xl shadow-lg shadow-green-600/25 hover:shadow-green-600/40 transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Project Details
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-slate-800/80 dark:to-slate-900/80 light:from-white/80 light:to-slate-50/80 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900">
                        Email Us
                      </h3>
                      <p className="text-slate-300 dark:text-slate-300 light:text-slate-600">hello@quarksol.com</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">
                    Send us an email and we'll get back to you within 24 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-slate-800/80 dark:to-slate-900/80 light:from-white/80 light:to-slate-50/80 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900">Call Us</h3>
                      <p className="text-slate-300 dark:text-slate-300 light:text-slate-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">
                    Available Monday to Friday, 9 AM to 6 PM EST.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-slate-800/80 dark:to-slate-900/80 light:from-white/80 light:to-slate-50/80 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-700 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900">
                        Visit Us
                      </h3>
                      <p className="text-slate-300 dark:text-slate-300 light:text-slate-600">San Francisco, CA</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">
                    123 Innovation Drive, Suite 100, San Francisco, CA 94105
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-slate-800/80 dark:to-slate-900/80 light:from-white/80 light:to-slate-50/80 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-700 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900">
                        Response Time
                      </h3>
                      <p className="text-slate-300 dark:text-slate-300 light:text-slate-600">Within 24 hours</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-500">
                    We typically respond to all inquiries within one business day.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl mx-auto">
              Get quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "What's included in your web development service?",
                answer:
                  "Our web development includes custom design, responsive development, CMS integration, SEO optimization, testing, deployment, and 3 months of free maintenance and support.",
              },
              {
                question: "Do you provide ongoing support and maintenance?",
                answer:
                  "Yes! We offer comprehensive maintenance packages including security updates, performance monitoring, content updates, and technical support to keep your project running smoothly.",
              },
              {
                question: "Can you work with our existing brand guidelines?",
                answer:
                  "We can work within your existing brand guidelines and style guides, or help you develop new ones if needed. We ensure all deliverables align with your brand identity.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Vercel. We choose the best tech stack for each project's specific needs.",
              },
              {
                question: "How do you handle project communication?",
                answer:
                  "We use collaborative tools like Slack, Figma, and project management platforms. You'll have regular check-ins, progress updates, and direct access to your project team throughout development.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 dark:from-slate-800/60 dark:to-slate-900/60 light:from-white/60 light:to-slate-50/60 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-6 sm:mb-8">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {" "}
                Digital Presence?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 mb-8 sm:mb-12 leading-relaxed">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact?start-project=true">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-green-600/25 hover:shadow-green-600/40 transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-slate-600 dark:border-slate-600 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-100/50 bg-transparent backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:border-green-500 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-all duration-300"
                >
                  <Globe className="mr-2 w-5 h-5" />
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-900 dark:to-slate-950 light:from-slate-100 light:to-slate-200 py-12 sm:py-16 px-4 sm:px-6 border-t border-slate-800/50 dark:border-slate-800/50 light:border-slate-200/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="sm:col-span-2">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="relative">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25">
                    <div className="w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-transparent bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text font-bold text-sm sm:text-lg">
                        Q
                      </span>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"></div>
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-slate-200 dark:from-white dark:to-slate-200 light:from-slate-900 light:to-slate-700 bg-clip-text text-transparent">
                    QUARKSOL
                  </span>
                  <div className="text-xs text-amber-400 font-semibold tracking-wider">
                    ENGINEERING AT THE QUARK LEVEL
                  </div>
                </div>
              </Link>
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
                Crafting extraordinary digital experiences that transform businesses and create lasting impact in the
                digital world.
              </p>
              <div className="text-slate-400 dark:text-slate-400 light:text-slate-500 text-xs sm:text-sm">
                © 2024 QUARKSOL. All rights reserved.
              </div>
            </div>

            <div>
              <h4 className="text-white dark:text-white light:text-slate-900 font-bold text-base sm:text-lg mb-4 sm:mb-6">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-slate-300 dark:text-slate-300 light:text-slate-600">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Mobile Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white dark:text-white light:text-slate-900 font-bold text-base sm:text-lg mb-4 sm:mb-6">
                Company
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-slate-300 dark:text-slate-300 light:text-slate-600">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
