"use client"

import {
  ArrowRight,
  CheckCircle,
  Crown,
  Menu,
  X,
  Globe,
  Rocket,
  Code,
  Palette,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
  Target,
  Award,
  Star,
  Clock,
  Shield,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function ServicesPage() {
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
                    item.href === "/services" ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
                      item.href === "/services" ? "w-full" : "w-0 group-hover:w-full"
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
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm">
              <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium text-xs sm:text-sm">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-white">Quantum-Level</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we deliver comprehensive digital solutions that transform businesses and
              create exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Core Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs and engineered for success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
                icon: Code,
                features: [
                  "React & Next.js Development",
                  "Full-Stack Solutions",
                  "API Integration & Development",
                  "Performance Optimization",
                  "SEO Implementation",
                  "Responsive Design",
                ],
                gradient: "from-blue-500 to-indigo-600",
                price: "Starting at $5,000",
              },
              {
                title: "UI/UX Design",
                description:
                  "User-centered design that combines aesthetics with functionality to create intuitive and engaging digital experiences.",
                icon: Palette,
                features: [
                  "User Research & Analysis",
                  "Wireframing & Prototyping",
                  "Visual Design Systems",
                  "Usability Testing",
                  "Brand Identity Design",
                  "Design System Creation",
                ],
                gradient: "from-purple-500 to-pink-600",
                price: "Starting at $3,000",
              },
              {
                title: "Mobile Development",
                description:
                  "Native and cross-platform mobile applications that deliver exceptional performance across all devices.",
                icon: Smartphone,
                features: [
                  "iOS & Android Development",
                  "React Native Solutions",
                  "App Store Optimization",
                  "Push Notifications",
                  "Offline Functionality",
                  "Performance Monitoring",
                ],
                gradient: "from-emerald-500 to-teal-600",
                price: "Starting at $8,000",
              },
              {
                title: "Digital Marketing",
                description:
                  "Data-driven marketing strategies that increase visibility, drive traffic, and convert visitors into customers.",
                icon: TrendingUp,
                features: [
                  "SEO & Content Strategy",
                  "Social Media Marketing",
                  "PPC Campaign Management",
                  "Analytics & Reporting",
                  "Email Marketing",
                  "Conversion Optimization",
                ],
                gradient: "from-amber-500 to-orange-600",
                price: "Starting at $2,000/month",
              },
              {
                title: "E-commerce Solutions",
                description:
                  "Complete e-commerce platforms with secure payment processing, inventory management, and analytics.",
                icon: Globe,
                features: [
                  "Custom E-commerce Development",
                  "Payment Gateway Integration",
                  "Inventory Management",
                  "Order Processing Systems",
                  "Customer Analytics",
                  "Multi-platform Integration",
                ],
                gradient: "from-rose-500 to-red-600",
                price: "Starting at $10,000",
              },
              {
                title: "Consulting & Strategy",
                description:
                  "Strategic guidance and technical consulting to help you make informed decisions about your digital transformation.",
                icon: Lightbulb,
                features: [
                  "Technology Assessment",
                  "Digital Strategy Planning",
                  "Architecture Design",
                  "Performance Audits",
                  "Security Reviews",
                  "Team Training",
                ],
                gradient: "from-cyan-500 to-blue-600",
                price: "Starting at $200/hour",
              },
              {
                title: "Web Scraping & Data Extraction",
                description:
                  "Advanced web scraping solutions using cutting-edge tools and techniques to extract, process, and deliver structured data at scale.",
                icon: Globe,
                features: [
                  "API Integration with httpx",
                  "Browser Automation (Selenium/Playwright)",
                  "Scrapy Framework Implementation",
                  "Real-time Data Processing",
                  "Anti-bot Detection Bypass",
                  "Data Pipeline Architecture",
                ],
                gradient: "from-indigo-500 to-purple-600",
                price: "Starting at $3,500",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 group"
              >
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-slate-700/50 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-400 text-sm">Investment</span>
                      <span className="text-white font-semibold">{service.price}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-2 rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-105">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery from concept to launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We dive deep into understanding your business goals, target audience, and project requirements.",
                icon: Target,
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "We develop a comprehensive strategy and roadmap tailored to your specific needs and objectives.",
                icon: Lightbulb,
                gradient: "from-purple-500 to-pink-600",
              },
              {
                step: "03",
                title: "Design & Development",
                description: "Our team brings your vision to life with cutting-edge design and development practices.",
                icon: Code,
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "We ensure a smooth launch and provide ongoing support to keep your project running optimally.",
                icon: Rocket,
                gradient: "from-amber-500 to-orange-600",
              },
            ].map((process, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all duration-500 transform hover:scale-105 group text-center"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${process.gradient} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <process.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{process.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{process.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                QUARKSOL?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We combine technical expertise with creative vision to deliver solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our team consists of seasoned professionals with years of experience in cutting-edge technologies.",
                icon: Users,
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                title: "Proven Track Record",
                description: "We've successfully delivered 150+ projects with a 98% client satisfaction rate.",
                icon: Award,
                gradient: "from-purple-500 to-pink-600",
              },
              {
                title: "Cutting-Edge Technology",
                description: "We use the latest technologies and best practices to ensure your project stays ahead.",
                icon: Zap,
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                title: "Timely Delivery",
                description: "We respect deadlines and deliver projects on time without compromising on quality.",
                icon: Clock,
                gradient: "from-amber-500 to-orange-600",
              },
              {
                title: "Security First",
                description: "We implement robust security measures to protect your data and ensure compliance.",
                icon: Shield,
                gradient: "from-rose-500 to-red-600",
              },
              {
                title: "24/7 Support",
                description: "Our dedicated support team is available around the clock to assist you whenever needed.",
                icon: Star,
                gradient: "from-cyan-500 to-blue-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500 transform hover:scale-105 group text-center"
              >
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
              Ready to Start Your
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Next Project?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed">
              Let's discuss your vision and create something extraordinary together. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-105"
                >
                  <Rocket className="mr-2 w-5 h-5" />
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-slate-600 text-slate-300 hover:bg-slate-800/50 bg-transparent backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-white transition-all duration-300"
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
