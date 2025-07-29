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
  Briefcase,
  Lightbulb,
  Users,
  Facebook, // Imported Facebook
  Twitter, // Imported Twitter
  Linkedin, // Imported Linkedin
  Instagram, // Imported Instagram
  Github, // Imported Github
  ArrowRight,
  CheckCircle,
  Crown,
  Star,
} from "@/components/ui-elements"

export default function Home() {
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

  const stats = [
    { id: 1, name: "Years in Business", value: "10+", icon: Award },
    { id: 2, name: "Projects Completed", value: "250+", icon: Briefcase },
    { id: 3, name: "Innovative Solutions", value: "100%", icon: Lightbulb },
    { id: 4, name: "Satisfied Clients", value: "99%", icon: Users },
  ]

  const services = [
    {
      title: "Web Development",
      description: "Crafting responsive, high-performance websites and web applications tailored to your needs.",
      icon: <Lightbulb className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Mobile App Development",
      description: "Building intuitive and engaging mobile applications for iOS and Android platforms.",
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
    },
    {
      title: "UI/UX Design",
      description: "Designing user-centric interfaces that are both beautiful and highly functional.",
      icon: <Users className="w-8 h-8 text-purple-500" />,
    },
    {
      title: "Digital Marketing",
      description: "Driving online visibility and growth through SEO, social media, and content strategies.",
      icon: <Award className="w-8 h-8 text-red-500" />,
    },
  ]

  const testimonials = [
    {
      quote:
        "QUARKSOL transformed our online presence. Their attention to detail and innovative approach exceeded our expectations.",
      name: "Jane Doe",
      title: "CEO, Tech Innovations",
      avatar: "/images/placeholder.svg?height=200&width=200&query=person",
    },
    {
      quote:
        "The team at QUARKSOL delivered a stunning mobile app that has significantly boosted our customer engagement.",
      name: "John Smith",
      title: "Founder, Global Connect",
      avatar: "/images/placeholder.svg?height=200&width=200&query=person",
    },
    {
      quote: "Their expertise in digital marketing helped us reach a wider audience and achieve remarkable growth.",
      name: "Emily White",
      title: "Marketing Director, Creative Solutions",
      avatar: "/images/placeholder.svg?height=200&width=200&query=person",
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
            Engineering at the Quark Level
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto ${sectionClasses.text}`}>
            We craft extraordinary digital experiences with precision engineering and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <Button
                size="lg"
                className={`font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 ${sectionClasses.buttonPrimary}`}
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="outline"
                className={`font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 ${sectionClasses.buttonOutline}`}
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Card key={stat.id} className={`${sectionClasses.cardBackground} text-center p-6 shadow-lg`}>
                <CardContent className="flex flex-col items-center justify-center">
                  <stat.icon className={`w-12 h-12 mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                  <div className={`text-5xl font-bold mb-2 ${sectionClasses.heading}`}>{stat.value}</div>
                  <p className={`text-lg ${sectionClasses.text}`}>{stat.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 ${sectionClasses.heading}`}>Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`${sectionClasses.cardBackground} p-6 shadow-lg`}>
                <CardContent className="flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className={`text-xl font-semibold mb-2 ${sectionClasses.heading}`}>
                    {service.title}
                  </CardTitle>
                  <p className={`${sectionClasses.text}`}>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className={`font-semibold px-8 py-4 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 ${sectionClasses.buttonOutline}`}
              >
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/placeholder.svg?height=600&width=800&query=why-choose-us"
              alt="Why Choose Us"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div>
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${sectionClasses.heading}`}>Why Choose QUARKSOL?</h2>
            <p className={`text-lg mb-8 ${sectionClasses.text}`}>
              We are committed to delivering excellence through a combination of cutting-edge technology, creative
              design, and a client-centric approach.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle
                  className={`w-6 h-6 mr-3 flex-shrink-0 ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                />
                <div>
                  <h3 className={`text-xl font-semibold ${sectionClasses.heading}`}>Expert Team</h3>
                  <p className={`${sectionClasses.text}`}>
                    Our team comprises seasoned professionals with diverse expertise in digital solutions.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Crown
                  className={`w-6 h-6 mr-3 flex-shrink-0 ${theme === "dark" ? "text-purple-400" : "text-purple-600"}`}
                />
                <div>
                  <h3 className={`text-xl font-semibold ${sectionClasses.heading}`}>Quality Assurance</h3>
                  <p className={`${sectionClasses.text}`}>
                    We adhere to the highest standards of quality in every project we undertake.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Star
                  className={`w-6 h-6 mr-3 flex-shrink-0 ${theme === "dark" ? "text-yellow-400" : "text-yellow-600"}`}
                />
                <div>
                  <h3 className={`text-xl font-semibold ${sectionClasses.heading}`}>Client Satisfaction</h3>
                  <p className={`${sectionClasses.text}`}>
                    Your success is our priority, and we work tirelessly to ensure your complete satisfaction.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 ${sectionClasses.heading}`}>What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={`${sectionClasses.cardBackground} p-6 shadow-lg`}>
                <CardContent className="flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-blue-500">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <p className={`text-lg italic mb-4 ${sectionClasses.text}`}>"{testimonial.quote}"</p>
                  <p className={`font-semibold ${sectionClasses.heading}`}>{testimonial.name}</p>
                  <p className={`text-sm ${sectionClasses.text}`}>{testimonial.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${sectionClasses.heading}`}>
            Ready to Start Your Next Project?
          </h2>
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${sectionClasses.text}`}>
            Let's build something amazing together. Contact us today for a free consultation.
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

      {/* Footer */}
      <footer
        className={`py-12 ${theme === "dark" ? "bg-slate-900" : "bg-slate-100"} border-t ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${theme === "dark" ? "text-slate-400 hover:text-blue-500" : "text-slate-600 hover:text-blue-700"} transition-colors duration-300`}
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${theme === "dark" ? "text-slate-400 hover:text-blue-400" : "text-slate-600 hover:text-blue-500"} transition-colors duration-300`}
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${theme === "dark" ? "text-slate-400 hover:text-blue-600" : "text-slate-600 hover:text-blue-800"} transition-colors duration-300`}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${theme === "dark" ? "text-slate-400 hover:text-pink-500" : "text-slate-600 hover:text-pink-600"} transition-colors duration-300`}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl ${theme === "dark" ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"} transition-colors duration-300`}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className={`text-sm ${sectionClasses.text}`}>
            &copy; {new Date().getFullYear()} QUARKSOL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
