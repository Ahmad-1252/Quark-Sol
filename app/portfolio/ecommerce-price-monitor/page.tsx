"use client"

import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Clock,
  Target,
  CheckCircle,
  Star,
  Crown,
  Menu,
  X,
  Globe,
  Rocket,
  Code,
  Database,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function EcommercePriceMonitorPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  const project = {
    id: 9,
    title: "E-commerce Price Monitor",
    category: "Web Scraping",
    shortDescription: "Real-time price monitoring system using httpx for API integration and competitive analysis.",
    fullDescription:
      "A comprehensive e-commerce price monitoring solution that tracks product prices across multiple platforms in real-time. Built with Python and httpx for efficient API communication, this system provides businesses with competitive intelligence and automated price adjustment capabilities.",
    image: "/placeholder.svg?height=600&width=1200&text=E-commerce+Price+Monitor+Dashboard",
    images: [
      "/placeholder.svg?height=400&width=600&text=Price+Tracking+Dashboard",
      "/placeholder.svg?height=400&width=600&text=API+Integration+Panel",
      "/placeholder.svg?height=400&width=600&text=Alert+System+Interface",
      "/placeholder.svg?height=400&width=600&text=Analytics+Reports",
    ],
    tags: ["Python", "httpx", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "https://price-monitor-demo.com",
    githubUrl: "https://github.com/quarksol/price-monitor",
    duration: "3 months",
    teamSize: "3 developers",
    client: "RetailTech Solutions",
    year: "2024",
    featured: true,
    challenges: [
      "Handling rate limits across multiple e-commerce APIs",
      "Real-time data processing and storage optimization",
      "Implementing efficient caching mechanisms",
      "Managing concurrent API requests without blocking",
    ],
    solutions: [
      "Implemented httpx with async/await for non-blocking API calls",
      "Used Redis for intelligent caching and rate limit management",
      "Built custom retry logic with exponential backoff",
      "Created distributed task queue with Celery for scalability",
    ],
    results: [
      "95% reduction in price monitoring response time",
      "Tracked 50,000+ products across 15 platforms",
      "Achieved 99.8% API uptime reliability",
      "Generated $2M+ in competitive pricing insights",
    ],
    testimonial: {
      text: "The price monitoring system has revolutionized our competitive strategy. We can now respond to market changes in real-time and optimize our pricing automatically.",
      author: "David Chen",
      position: "CTO, RetailTech Solutions",
    },
    technicalDetails: [
      {
        title: "httpx Integration",
        description: "Leveraged httpx for high-performance HTTP requests with async support",
        features: [
          "Async/await pattern for concurrent requests",
          "Connection pooling for efficiency",
          "Custom timeout and retry configurations",
          "HTTP/2 support for faster data transfer",
        ],
      },
      {
        title: "API Management",
        description: "Sophisticated API handling with rate limiting and error recovery",
        features: [
          "Dynamic rate limit adaptation",
          "Circuit breaker pattern implementation",
          "API key rotation and management",
          "Response validation and sanitization",
        ],
      },
      {
        title: "Data Processing",
        description: "Real-time data processing pipeline with intelligent caching",
        features: [
          "Redis-based caching strategy",
          "PostgreSQL for persistent storage",
          "Data deduplication algorithms",
          "Real-time price change detection",
        ],
      },
    ],
  }

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
                  className="text-slate-300 hover:text-white transition-all duration-300 font-medium relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button className="hidden sm:flex bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-6 py-2 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-105">
                <Crown className="w-4 h-4 mr-2" />
                Start Project
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

      {/* Back to Portfolio */}
      <section className="relative pt-24 sm:pt-32 pb-8 px-4 sm:px-6">
        <div className="container mx-auto">
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent backdrop-blur-sm font-semibold hover:border-blue-500 hover:text-white transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </section>

      {/* Project Hero */}
      <section className="relative py-8 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Badge className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 border-indigo-500/30 px-3 py-1">
                  <Database className="w-4 h-4 mr-2" />
                  <span>{project.category}</span>
                </Badge>
                {project.featured && (
                  <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border-amber-500/30 px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">{project.fullDescription}</p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm text-slate-400">Duration</div>
                  <div className="text-white font-semibold">{project.duration}</div>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                  <div className="text-sm text-slate-400">Team Size</div>
                  <div className="text-white font-semibold">{project.teamSize}</div>
                </div>
                <div className="text-center">
                  <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-sm text-slate-400">Client</div>
                  <div className="text-white font-semibold">{project.client}</div>
                </div>
                <div className="text-center">
                  <Clock className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <div className="text-sm text-slate-400">Year</div>
                  <div className="text-white font-semibold">{project.year}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-semibold px-8 py-3 rounded-xl shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300 transform hover:scale-105"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent backdrop-blur-sm px-8 py-3 rounded-xl font-semibold hover:border-indigo-500 hover:text-white transition-all duration-300"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-indigo-500/20">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Technical{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Implementation
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {project.technicalDetails.map((detail, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-500"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{detail.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{detail.description}</p>
                  <ul className="space-y-2">
                    {detail.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Technologies Used</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 text-slate-200 border-slate-700/50 px-4 py-2 text-sm font-medium hover:border-indigo-500/50 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                <span className="text-red-400">Challenges</span> We Faced
              </h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-red-900/20 to-red-800/20 backdrop-blur-sm border border-red-700/30"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        </div>
                        <p className="text-slate-300 leading-relaxed">{challenge}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                <span className="text-green-400">Solutions</span> We Delivered
              </h2>
              <div className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-green-900/20 to-green-800/20 backdrop-blur-sm border border-green-700/30"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                        <p className="text-slate-300 leading-relaxed">{solution}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Results &{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/30 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <CardContent className="p-6">
                  <TrendingUp className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
                  <p className="text-slate-300 leading-relaxed font-medium">{result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 max-w-4xl mx-auto">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="text-4xl sm:text-6xl text-indigo-400 mb-6">"</div>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed italic">
                {project.testimonial.text}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {project.testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold">{project.testimonial.author}</div>
                  <div className="text-slate-400 text-sm">{project.testimonial.position}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Need a Similar Solution?</h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can build a custom web scraping solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all duration-300 transform hover:scale-105"
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
                className="w-full sm:w-auto border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:border-indigo-500 hover:text-white transition-all duration-300"
              >
                <Globe className="mr-2 w-5 h-5" />
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
