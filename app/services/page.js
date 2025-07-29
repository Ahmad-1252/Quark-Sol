"use client"

import Link from "next/link"
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
  CheckCircle,
  ArrowRight,
  Crown,
} from "@/components/ui-elements"

export default function ServicesPage() {
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

  const services = [
    {
      icon: Lightbulb,
      title: "Web Development",
      description:
        "Crafting responsive, high-performance websites and web applications tailored to your business needs.",
      features: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "CMS Integration",
        "Performance Optimization",
        "Scalable Architectures",
      ],
    },
    {
      icon: Briefcase,
      title: "Mobile App Development",
      description: "Building intuitive and engaging mobile applications for iOS and Android platforms.",
      features: [
        "Native iOS & Android Apps",
        "Cross-Platform Development (React Native)",
        "App Store Optimization",
        "Push Notifications",
        "Backend Integration",
      ],
    },
    {
      icon: Users,
      title: "UI/UX Design",
      description: "Designing user-centric interfaces that are both beautiful and highly functional.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Interactive Design",
        "Usability Testing",
        "Design Systems",
      ],
    },
    {
      icon: Award,
      title: "Digital Marketing",
      description: "Driving online visibility and growth through data-driven marketing strategies.",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing (SMM)",
        "Content Marketing",
        "Pay-Per-Click (PPC) Campaigns",
        "Email Marketing",
      ],
    },
    {
      icon: Crown,
      title: "Cloud Solutions",
      description: "Implementing scalable and secure cloud infrastructure for optimal business operations.",
      features: [
        "Cloud Migration",
        "Infrastructure as Code (IaC)",
        "Serverless Architectures",
        "Data Storage & Management",
        "DevOps & CI/CD",
      ],
    },
    {
      icon: CheckCircle,
      title: "IT Consulting",
      description: "Providing expert advice and strategic guidance to optimize your technology landscape.",
      features: [
        "Technology Roadmapping",
        "System Integration",
        "Cybersecurity Audits",
        "Digital Transformation",
        "IT Strategy Development",
      ],
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
            Our Comprehensive Services
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto ${sectionClasses.text}`}>
            From concept to deployment, we offer end-to-end digital solutions designed to elevate your business.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className={`font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 ${sectionClasses.buttonPrimary}`}
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${sectionClasses.heading}`}>
            Solutions Tailored for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`${sectionClasses.cardBackground} p-6 shadow-lg`}>
                <CardContent className="flex flex-col items-start">
                  <div
                    className={`p-4 rounded-full mb-4 ${
                      theme === "dark" ? "bg-blue-600/20 text-blue-400" : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <service.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className={`text-xl font-semibold mb-2 ${sectionClasses.heading}`}>
                    {service.title}
                  </CardTitle>
                  <p className={`text-base mb-4 ${sectionClasses.text}`}>{service.description}</p>
                  <ul className="space-y-2 text-sm">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle
                          className={`w-4 h-4 mr-2 flex-shrink-0 ${theme === "dark" ? "text-green-400" : "text-green-600"}`}
                        />
                        <span className={`${sectionClasses.text}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-12 ${sectionClasses.heading}`}>Our Streamlined Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl font-bold ${
                  theme === "dark" ? "bg-blue-600 text-white shadow-lg" : "bg-blue-500 text-white shadow-lg"
                }`}
              >
                1
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${sectionClasses.heading}`}>Discovery & Planning</h3>
              <p className={`${sectionClasses.text}`}>
                We start by understanding your vision, goals, and target audience to create a solid roadmap.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl font-bold ${
                  theme === "dark" ? "bg-indigo-600 text-white shadow-lg" : "bg-indigo-500 text-white shadow-lg"
                }`}
              >
                2
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${sectionClasses.heading}`}>Design & Development</h3>
              <p className={`${sectionClasses.text}`}>
                Our experts craft intuitive designs and build robust solutions using the latest technologies.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-3xl font-bold ${
                  theme === "dark" ? "bg-purple-600 text-white shadow-lg" : "bg-purple-500 text-white shadow-lg"
                }`}
              >
                3
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${sectionClasses.heading}`}>Deployment & Support</h3>
              <p className={`${sectionClasses.text}`}>
                We ensure a smooth launch and provide ongoing support to keep your digital presence thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${sectionClasses.heading}`}>
            Ready to Transform Your Business?
          </h2>
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${sectionClasses.text}`}>
            Let's discuss how our services can help you achieve your digital goals.
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
