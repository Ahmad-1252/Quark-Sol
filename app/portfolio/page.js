"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"
import { Button, Card, CardContent, CardTitle, ArrowRight } from "@/components/ui-elements"

export default function PortfolioPage() {
  const { theme } = useTheme()

  const sectionClasses = {
    background: theme === "dark" ? "bg-slate-950" : "bg-white",
    text: theme === "dark" ? "text-slate-100" : "text-slate-800",
    heading: theme === "dark" ? "text-white" : "text-slate-900",
    cardBackground: theme === "dark" ? "bg-slate-900/50 border-slate-800" : "bg-white/50 border-slate-200",
    buttonPrimary:
      theme === "dark"
        ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
    buttonOutline:
      theme === "dark"
        ? "border-2 border-blue-500 text-blue-300 hover:bg-blue-500/20 hover:text-white"
        : "border-2 border-blue-500 text-blue-600 hover:bg-blue-500/10 hover:text-blue-700",
  }

  const projects = [
    {
      slug: "ecommerce-price-monitor",
      title: "E-commerce Price Monitor",
      category: "Web Application",
      image: "/images/placeholder.svg?height=400&width=600&query=e-commerce-price-monitor",
      description:
        "A robust web application for tracking and comparing product prices across various e-commerce platforms.",
    },
    {
      slug: "social-media-analytics",
      title: "Social Media Analytics Dashboard",
      category: "Data Visualization",
      image: "/images/placeholder.svg?height=400&width=600&query=social-media-analytics",
      description: "An intuitive dashboard providing deep insights into social media performance and trends.",
    },
    {
      slug: "news-aggregation",
      title: "AI-Powered News Aggregation",
      category: "Mobile App",
      image: "/images/placeholder.svg?height=400&width=600&query=news-aggregation-app",
      description: "A mobile application that aggregates news from various sources using AI for personalized feeds.",
    },
    {
      slug: "ai-chatbot",
      title: "Custom AI Chatbot Integration",
      category: "AI & Automation",
      image: "/images/placeholder.svg?height=400&width=600&query=ai-chatbot",
      description: "Seamless integration of a custom AI chatbot for enhanced customer support and engagement.",
    },
  ]

  return (
    <div className={`${sectionClasses.background} ${sectionClasses.text} min-h-screen pt-16 sm:pt-20`}>
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 lg:py-40 text-center overflow-hidden">
        <div
          className={`absolute inset-0 z-0 ${
            theme === "dark"
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950"
              : "bg-gradient-to-br from-white via-blue-50 to-indigo-100"
          }`}
        >
          <div
            className={`absolute inset-0 opacity-10 ${
              theme === "dark"
                ? "bg-[url('/images/abstract-pattern.png')]"
                : "bg-[url('/images/abstract-pattern-light.png')]"
            } bg-cover bg-center animate-pulse-slow`}
          ></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 gradient-text`}>
            Our Portfolio
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto ${sectionClasses.text}`}>
            Explore our diverse range of projects that showcase our expertise and commitment to excellence.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className={`font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 ${sectionClasses.buttonPrimary}`}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className={`${sectionClasses.cardBackground} shadow-lg overflow-hidden group`}>
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-4 left-4 text-white text-sm font-semibold px-3 py-1 rounded-full bg-blue-600">
                    {project.category}
                  </span>
                </div>
                <CardContent className="p-6">
                  <CardTitle className={`text-xl font-semibold mb-2 ${sectionClasses.heading}`}>
                    {project.title}
                  </CardTitle>
                  <p className={`text-base mb-4 ${sectionClasses.text}`}>{project.description}</p>
                  <Link href={`/portfolio/${project.slug}`}>
                    <Button
                      variant="outline"
                      className={`font-semibold ${sectionClasses.buttonOutline} group-hover:text-blue-500`}
                    >
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${sectionClasses.heading}`}>Have a Project in Mind?</h2>
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${sectionClasses.text}`}>
            Let's turn your innovative ideas into reality. Contact us for a personalized consultation.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className={`font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 ${sectionClasses.buttonPrimary}`}
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
