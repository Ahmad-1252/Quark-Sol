"use client"

import { ArrowRight, ExternalLink, Github, Eye, Star, Crown, Menu, X, Globe, Rocket, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function PortfolioPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  const portfolioItems = [
    {
      id: 1,
      title: "TechFlow SaaS Platform",
      category: "Web Development",
      description: "A comprehensive SaaS platform for project management with real-time collaboration features.",
      image: "/placeholder.svg?height=400&width=600&text=TechFlow+SaaS+Platform",
      tags: ["React", "Node.js", "MongoDB", "WebSocket"],
      link: "/portfolio/techflow-saas",
      github: "#",
      featured: true,
    },
    {
      id: 2,
      title: "EcoShop E-commerce",
      category: "E-commerce",
      description: "Sustainable shopping platform with advanced filtering and personalized recommendations.",
      image: "/placeholder.svg?height=400&width=600&text=EcoShop+E-commerce",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      link: "/portfolio/ecoshop-ecommerce",
      github: "#",
      featured: true,
    },
    {
      id: 3,
      title: "FinanceTracker Mobile App",
      category: "Mobile App",
      description: "Personal finance management app with AI-powered insights and budget tracking.",
      image: "/placeholder.svg?height=400&width=600&text=FinanceTracker+Mobile+App",
      tags: ["React Native", "Firebase", "AI/ML", "Charts"],
      link: "/portfolio/financetracker-mobile",
      github: "#",
      featured: false,
    },
    {
      id: 4,
      title: "MedCare Healthcare Portal",
      category: "Web Development",
      description: "Patient management system with appointment scheduling and telemedicine features.",
      image: "/placeholder.svg?height=400&width=600&text=MedCare+Healthcare+Portal",
      tags: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 5,
      title: "CreativeStudio Portfolio",
      category: "Design",
      description: "Stunning portfolio website for a creative agency with interactive animations.",
      image: "/placeholder.svg?height=400&width=600&text=CreativeStudio+Portfolio",
      tags: ["Figma", "Framer", "GSAP", "Three.js"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      id: 6,
      title: "FoodieHub Restaurant App",
      category: "Mobile App",
      description: "Food delivery app with real-time tracking and social features for food lovers.",
      image: "/placeholder.svg?height=400&width=600&text=FoodieHub+Restaurant+App",
      tags: ["Flutter", "Firebase", "Maps API", "Payment"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      id: 7,
      title: "EduLearn LMS Platform",
      category: "Web Development",
      description: "Learning management system with video streaming and interactive course content.",
      image: "/placeholder.svg?height=400&width=600&text=EduLearn+LMS+Platform",
      tags: ["Angular", "Django", "PostgreSQL", "Video"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      id: 8,
      title: "CryptoTrader Dashboard",
      category: "Web Development",
      description: "Real-time cryptocurrency trading dashboard with advanced charting and analytics.",
      image: "/placeholder.svg?height=400&width=600&text=CryptoTrader+Dashboard",
      tags: ["React", "D3.js", "WebSocket", "Charts"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 9,
      title: "E-commerce Price Monitor",
      category: "Web Scraping",
      description: "Real-time price monitoring system using httpx for API integration and competitive analysis.",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+Price+Monitor",
      tags: ["Python", "httpx", "FastAPI", "PostgreSQL"],
      link: "/portfolio/ecommerce-price-monitor",
      github: "#",
      featured: true,
    },
    {
      id: 10,
      title: "Social Media Analytics Bot",
      category: "Web Scraping",
      description:
        "Automated data collection system using Playwright for browser automation and social media insights.",
      image: "/placeholder.svg?height=400&width=600&text=Social+Media+Analytics+Bot",
      tags: ["Python", "Playwright", "MongoDB", "Docker"],
      link: "/portfolio/social-media-analytics",
      github: "#",
      featured: false,
    },
    {
      id: 11,
      title: "News Aggregation Platform",
      category: "Web Scraping",
      description:
        "High-speed news scraping platform built with Scrapy for real-time content aggregation and analysis.",
      image: "/placeholder.svg?height=400&width=600&text=News+Aggregation+Platform",
      tags: ["Python", "Scrapy", "Redis", "Elasticsearch"],
      link: "/portfolio/news-aggregation",
      github: "#",
      featured: true,
    },
  ]

  const categories = ["All", "Web Development", "Mobile App", "E-commerce", "Design", "Web Scraping"]

  const filteredItems =
    activeFilter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-700/50 shadow-lg shadow-slate-900/20"
            : "bg-slate-950/80 backdrop-blur-sm border-b border-slate-700/30"
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
                <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
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
                  className={`text-slate-300 hover:text-white transition-all duration-300 font-medium relative group py-2 ${
                    item.href === "/portfolio" ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
                      item.href === "/portfolio" ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="hidden sm:flex bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-6 py-2 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-105">
                <Crown className="w-4 h-4 mr-2" />
                Start Project
              </Button>

              <Button className="sm:hidden bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-4 py-2 rounded-xl shadow-lg shadow-blue-600/25 text-sm">
                <Crown className="w-3 h-3 mr-1" />
                Start
              </Button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors duration-300 relative z-50"
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
          className={`lg:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-xl transition-all duration-300 ${
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
                className={`text-2xl sm:text-3xl font-semibold text-slate-300 hover:text-white transition-all duration-300 relative group py-3 ${
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
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full border border-purple-500/20 mb-6 sm:mb-8 backdrop-blur-sm">
              <Eye className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium text-xs sm:text-sm">Our Creative Work</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-white">Engineering at the</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of innovative digital solutions that have transformed businesses and created
              exceptional user experiences across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-8 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-between mb-8">
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                    activeFilter === category
                      ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-600/25"
                      : "bg-slate-800/60 text-slate-300 hover:bg-slate-700/60 hover:text-white border border-slate-700/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search projects..."
                className="pl-10 bg-slate-800/60 border-slate-700/50 text-white placeholder-slate-400 rounded-xl focus:border-blue-400 transition-colors w-full sm:w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-8 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className={`bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group overflow-hidden ${
                  item.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-purple-400 font-semibold text-sm">{item.category}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded-md text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Link href={item.link} className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 rounded-lg shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-300 transform hover:scale-105 text-sm">
                        <Eye className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent backdrop-blur-sm py-2 px-4 rounded-lg font-semibold hover:border-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: "50+", label: "Projects Completed", gradient: "from-blue-400 to-indigo-400" },
              { number: "98%", label: "Client Satisfaction", gradient: "from-emerald-400 to-teal-400" },
              { number: "25+", label: "Industries Served", gradient: "from-purple-400 to-pink-400" },
              { number: "5M+", label: "Users Reached", gradient: "from-amber-400 to-yellow-400" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105">
                  <div
                    className={`text-3xl sm:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
              Ready to Create Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Next Success Story?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed">
              Let's collaborate to bring your vision to life and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="mr-2 w-5 h-5" />
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:text-white transition-all duration-300"
                >
                  <Globe className="mr-2 w-5 h-5" />
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 to-slate-950 py-12 sm:py-16 px-4 sm:px-6 border-t border-slate-800/50">
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
                  <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                    QUARKSOL
                  </span>
                  <div className="text-xs text-amber-400 font-semibold tracking-wider">
                    ENGINEERING AT THE QUARK LEVEL
                  </div>
                </div>
              </Link>
              <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed max-w-md text-sm sm:text-base">
                Crafting extraordinary digital experiences that transform businesses and create lasting impact in the
                digital world.
              </p>
              <div className="text-slate-400 text-xs sm:text-sm">© 2024 QUARKSOL. All rights reserved.</div>
            </div>

            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-slate-300">
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Mobile Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-base sm:text-lg mb-4 sm:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3 text-slate-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="hover:text-white transition-colors hover:translate-x-1 transform duration-200 block text-sm sm:text-base"
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
