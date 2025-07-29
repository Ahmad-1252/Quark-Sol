"use client"

import { ArrowRight, CheckCircle, Crown, Menu, X, Globe, Rocket, Star, Users, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
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
                    item.href === "/" ? "text-white dark:text-white light:text-slate-900" : ""
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 ${
                      item.href === "/" ? "w-full" : "w-0 group-hover:w-full"
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
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm">
              <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium text-xs sm:text-sm">Premium Digital Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-white dark:text-white light:text-slate-900">Engineering at the</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Quark Level
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 dark:text-slate-300 light:text-slate-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
              We craft extraordinary digital experiences with precision engineering and cutting-edge technology.
              Transform your business with solutions built to atomic-level perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16">
              <Link href="/contact?start-project=true">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-105"
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
                  className="w-full sm:w-auto border-2 border-slate-600 dark:border-slate-600 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-600 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-100/50 bg-transparent backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-all duration-300"
                >
                  <Globe className="mr-2 w-5 h-5" />
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: "150+", label: "Projects Delivered", icon: Award, gradient: "from-blue-400 to-indigo-400" },
              { number: "98%", label: "Client Satisfaction", icon: Star, gradient: "from-emerald-400 to-teal-400" },
              { number: "50+", label: "Global Clients", icon: Users, gradient: "from-purple-400 to-pink-400" },
              { number: "24/7", label: "Support Available", icon: Zap, gradient: "from-amber-400 to-yellow-400" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 dark:from-slate-800/80 dark:to-slate-900/80 light:from-white/80 light:to-slate-50/80 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <stat.icon
                    className={`w-8 h-8 mx-auto mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  />
                  <div
                    className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-slate-400 dark:text-slate-400 light:text-slate-500 font-medium text-sm sm:text-base">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we deliver comprehensive digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies and best practices.",
                features: ["React & Next.js", "Full-Stack Solutions", "API Integration", "Performance Optimization"],
                gradient: "from-blue-500 to-indigo-600",
              },
              {
                title: "UI/UX Design",
                description:
                  "User-centered design that combines aesthetics with functionality for optimal user experience.",
                features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
                gradient: "from-purple-500 to-pink-600",
              },
              {
                title: "Mobile Development",
                description: "Native and cross-platform mobile applications that engage users across all devices.",
                features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"],
                gradient: "from-emerald-500 to-teal-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 dark:from-slate-800/60 dark:to-slate-900/60 light:from-white/60 light:to-slate-50/60 backdrop-blur-sm border border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 group"
              >
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="w-6 h-6 bg-white rounded-md"></div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-slate-300 dark:text-slate-300 light:text-slate-600"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-105">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white light:text-slate-900 mb-6 sm:mb-8">
              Ready to Transform Your
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}
                Digital Presence?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 dark:text-slate-300 light:text-slate-600 mb-8 sm:mb-12 leading-relaxed">
              Let's collaborate to bring your vision to life with precision-engineered solutions that drive results.
            </p>
            <Link href="/contact?start-project=true">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-105"
              >
                <Crown className="mr-2 w-5 h-5" />
                Start Your Project Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
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
