"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"
import {
  Button,
  Card,
  CardContent,
  CardTitle,
  Award,
  Lightbulb,
  Users,
  ArrowRight,
  Star,
} from "@/components/ui-elements"

export default function AboutPage() {
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

  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "CEO & Lead Developer",
      image: "/images/placeholder.svg?height=200&width=200&query=person",
      description: "With over 15 years of experience, Alice leads our technical vision and innovation.",
    },
    {
      name: "Bob Williams",
      role: "Head of UI/UX Design",
      image: "/images/placeholder.svg?height=200&width=200&query=person",
      description: "Bob ensures every product is not just functional but also a joy to use.",
    },
    {
      name: "Charlie Brown",
      role: "Marketing Strategist",
      image: "/images/placeholder.svg?height=200&width=200&query=person",
      description: "Charlie crafts compelling strategies to help our clients reach their audience effectively.",
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly explore new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project.",
    },
    {
      icon: Star,
      title: "Integrity",
      description: "Operating with transparency and honesty in all our dealings.",
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
            About QUARKSOL
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto ${sectionClasses.text}`}>
            We are a team of passionate innovators dedicated to crafting exceptional digital experiences.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className={`font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 ${sectionClasses.buttonPrimary}`}
            >
              Join Our Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/placeholder.svg?height=600&width=800&query=our-story"
              alt="Our Story"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${sectionClasses.heading}`}>Our Story</h2>
            <p className={`text-lg mb-6 ${sectionClasses.text}`}>
              Founded in 2014, QUARKSOL started with a vision to revolutionize the digital landscape by providing
              solutions built with atomic-level precision. From humble beginnings, we've grown into a leading digital
              agency, serving clients worldwide.
            </p>
            <p className={`text-lg mb-8 ${sectionClasses.text}`}>
              Our journey has been marked by continuous learning, adapting to new technologies, and a relentless pursuit
              of excellence. We pride ourselves on our ability to turn complex ideas into simple, elegant, and powerful
              digital products.
            </p>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className={`px-6 py-3 font-semibold rounded-full ${sectionClasses.buttonOutline}`}
              >
                See Our Milestones <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 ${sectionClasses.heading}`}>Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className={`${sectionClasses.cardBackground} p-6 shadow-lg`}>
                <CardContent className="flex flex-col items-center text-center">
                  <div
                    className={`p-4 rounded-full mb-4 ${
                      theme === "dark" ? "bg-blue-600/20 text-blue-400" : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <value.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className={`text-xl font-semibold mb-2 ${sectionClasses.heading}`}>
                    {value.title}
                  </CardTitle>
                  <p className={`${sectionClasses.text}`}>{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 ${sectionClasses.heading}`}>Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className={`${sectionClasses.cardBackground} p-6 shadow-lg`}>
                <CardContent className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-500">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className={`text-xl font-semibold ${sectionClasses.heading}`}>{member.name}</h3>
                  <p className={`text-blue-500 mb-2`}>{member.role}</p>
                  <p className={`${sectionClasses.text}`}>{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${sectionClasses.heading}`}>Ready to Collaborate?</h2>
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${sectionClasses.text}`}>
            We're always excited to work on new and challenging projects. Let's build something great together.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className={`font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 ${sectionClasses.buttonPrimary}`}
            >
              Contact Us Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
