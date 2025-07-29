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
  Zap,
  Code,
  Palette,
  Smartphone,
  ShoppingCart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"

// Mock project data - in a real app, this would come from a database or CMS
const projectsData = {
  "techflow-saas": {
    id: 1,
    title: "TechFlow SaaS Platform",
    category: "Web Development",
    shortDescription: "A comprehensive SaaS platform for project management with real-time collaboration features.",
    fullDescription:
      "TechFlow is a cutting-edge project management platform designed to streamline team collaboration and boost productivity. Built with modern web technologies, it offers real-time updates, advanced analytics, and seamless integration with popular development tools.",
    image: "/placeholder.svg?height=600&width=1200&text=TechFlow+SaaS+Platform",
    images: [
      "/placeholder.svg?height=400&width=600&text=Dashboard+View",
      "/placeholder.svg?height=400&width=600&text=Project+Timeline",
      "/placeholder.svg?height=400&width=600&text=Team+Collaboration",
      "/placeholder.svg?height=400&width=600&text=Analytics+Dashboard",
    ],
    tags: ["React", "Node.js", "MongoDB", "WebSocket", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://techflow-demo.com",
    githubUrl: "https://github.com/quarksol/techflow",
    duration: "4 months",
    teamSize: "5 developers",
    client: "TechFlow Inc.",
    year: "2024",
    featured: true,
    challenges: [
      "Real-time synchronization across multiple users",
      "Scalable architecture for growing user base",
      "Complex permission system for different user roles",
      "Integration with multiple third-party APIs",
    ],
    solutions: [
      "Implemented WebSocket connections for real-time updates",
      "Used microservices architecture with Docker containers",
      "Created flexible RBAC (Role-Based Access Control) system",
      "Built unified API gateway for third-party integrations",
    ],
    results: [
      "40% increase in team productivity",
      "99.9% uptime achieved",
      "50,000+ active users within 6 months",
      "25% reduction in project completion time",
    ],
    testimonial: {
      text: "QUARKSOL delivered an exceptional platform that transformed how our teams collaborate. The attention to detail and technical expertise exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, TechFlow Inc.",
    },
  },
  "ecoshop-ecommerce": {
    id: 2,
    title: "EcoShop E-commerce",
    category: "E-commerce",
    shortDescription: "Sustainable shopping platform with advanced filtering and personalized recommendations.",
    fullDescription:
      "EcoShop is an innovative e-commerce platform focused on sustainable products. It features AI-powered recommendations, advanced search capabilities, and a seamless checkout experience designed to promote eco-friendly shopping habits.",
    image: "/placeholder.svg?height=600&width=1200&text=EcoShop+E-commerce+Platform",
    images: [
      "/placeholder.svg?height=400&width=600&text=Homepage+Design",
      "/placeholder.svg?height=400&width=600&text=Product+Catalog",
      "/placeholder.svg?height=400&width=600&text=Shopping+Cart",
      "/placeholder.svg?height=400&width=600&text=Checkout+Process",
    ],
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS", "AI/ML", "Redis"],
    liveUrl: "https://ecoshop-demo.com",
    githubUrl: "https://github.com/quarksol/ecoshop",
    duration: "3 months",
    teamSize: "4 developers",
    client: "EcoShop Ltd.",
    year: "2024",
    featured: true,
    challenges: [
      "Complex product filtering and search functionality",
      "AI-powered recommendation engine",
      "Secure payment processing",
      "Inventory management across multiple suppliers",
    ],
    solutions: [
      "Implemented Elasticsearch for advanced search capabilities",
      "Built custom ML model for product recommendations",
      "Integrated Stripe for secure payment processing",
      "Created automated inventory sync system",
    ],
    results: [
      "300% increase in conversion rate",
      "Average order value increased by 45%",
      "Customer satisfaction score of 4.8/5",
      "Zero security incidents since launch",
    ],
    testimonial: {
      text: "The platform QUARKSOL built for us is not just beautiful, it's incredibly functional. Our sales have tripled since launch.",
      author: "Michael Green",
      position: "Founder, EcoShop Ltd.",
    },
  },
  "financetracker-mobile": {
    id: 3,
    title: "FinanceTracker Mobile App",
    category: "Mobile App",
    shortDescription: "Personal finance management app with AI-powered insights and budget tracking.",
    fullDescription:
      "FinanceTracker is a comprehensive mobile application that helps users manage their personal finances with intelligent insights, automated categorization, and predictive budgeting features.",
    image: "/placeholder.svg?height=600&width=1200&text=FinanceTracker+Mobile+App",
    images: [
      "/placeholder.svg?height=400&width=600&text=App+Dashboard",
      "/placeholder.svg?height=400&width=600&text=Budget+Tracking",
      "/placeholder.svg?height=400&width=600&text=Expense+Categories",
      "/placeholder.svg?height=400&width=600&text=Financial+Insights",
    ],
    tags: ["React Native", "Firebase", "AI/ML", "Charts.js", "TypeScript"],
    liveUrl: "https://apps.apple.com/financetracker",
    githubUrl: "https://github.com/quarksol/financetracker",
    duration: "5 months",
    teamSize: "3 developers",
    client: "FinTech Solutions",
    year: "2023",
    featured: false,
    challenges: [
      "Cross-platform compatibility",
      "Real-time financial data synchronization",
      "Advanced data visualization",
      "Bank-level security implementation",
    ],
    solutions: [
      "Used React Native for unified codebase",
      "Implemented real-time Firebase sync",
      "Created custom chart components",
      "Applied end-to-end encryption",
    ],
    results: [
      "100,000+ downloads in first month",
      "4.7 star rating on app stores",
      "Users save average of $500/month",
      "Featured in App Store finance category",
    ],
    testimonial: {
      text: "This app has completely changed how I manage my finances. The AI insights are incredibly accurate and helpful.",
      author: "Jennifer Davis",
      position: "Beta User",
    },
  },
}

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const project = projectsData[slug as keyof typeof projectsData]

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

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-slate-300 mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/portfolio">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return <Code className="w-4 h-4" />
      case "Mobile App":
        return <Smartphone className="w-4 h-4" />
      case "E-commerce":
        return <ShoppingCart className="w-4 h-4" />
      case "Design":
        return <Palette className="w-4 h-4" />
      default:
        return <Globe className="w-4 h-4" />
    }
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
                <Badge className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30 px-3 py-1">
                  {getCategoryIcon(project.category)}
                  <span className="ml-2">{project.category}</span>
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
                  className="bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white font-semibold px-8 py-3 rounded-xl shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-300 transform hover:scale-105"
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent backdrop-blur-sm px-8 py-3 rounded-xl font-semibold hover:border-purple-500 hover:text-white transition-all duration-300"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-purple-500/20">
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

      {/* Technologies Used */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Technologies Used</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {project.tags.map((tag, index) => (
              <Badge
                key={index}
                className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 text-slate-200 border-slate-700/50 px-4 py-2 text-sm font-medium hover:border-blue-500/50 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Project Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 overflow-hidden group cursor-pointer"
                onClick={() => setActiveImageIndex(index)}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Card>
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Impact</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((result, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <CardContent className="p-6">
                  <Zap className="w-8 h-8 text-purple-400 mx-auto mb-4" />
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
              <div className="text-4xl sm:text-6xl text-purple-400 mb-6">"</div>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed italic">
                {project.testimonial.text}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
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

      {/* Next Project */}
      <section className="relative py-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
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
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:border-purple-500 hover:text-white transition-all duration-300"
              >
                <Globe className="mr-2 w-5 h-5" />
                View More Projects
              </Button>
            </Link>
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
