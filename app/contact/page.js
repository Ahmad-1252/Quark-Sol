"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"
import { Button, Card, CardContent, CardTitle, MapPin, Phone, MailOpen, ArrowRight } from "@/components/ui-elements"

export default function ContactPage() {
  const { theme } = useTheme()

  const sectionClasses = {
    background: theme === "dark" ? "bg-slate-950" : "bg-white",
    text: theme === "dark" ? "text-slate-100" : "text-slate-800",
    heading: theme === "dark" ? "text-white" : "text-slate-900",
    cardBackground: theme === "dark" ? "bg-slate-900/50 border-slate-800" : "bg-white/50 border-slate-200",
    inputBorder: theme === "dark" ? "border-slate-700 bg-slate-800" : "border-slate-300 bg-white",
    inputFocus: theme === "dark" ? "focus:border-blue-500" : "focus:border-blue-500",
    buttonPrimary:
      theme === "dark"
        ? "bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white"
        : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
  }

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
            Get in Touch
          </h1>
          <p className={`text-lg sm:text-xl lg:text-2xl mb-8 max-w-4xl mx-auto ${sectionClasses.text}`}>
            We'd love to hear from you! Reach out to us for inquiries, collaborations, or just to say hello.
          </p>
          <Link href="#contact-form">
            <Button
              size="lg"
              className={`font-semibold px-8 py-4 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 ${sectionClasses.buttonPrimary}`}
            >
              Send Us a Message
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className={`${sectionClasses.cardBackground} p-6 shadow-lg`}>
              <CardContent className="flex flex-col items-center justify-center">
                <MapPin className={`w-12 h-12 mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                <CardTitle className={`text-xl font-semibold mb-2 ${sectionClasses.heading}`}>Our Office</CardTitle>
                <p className={`${sectionClasses.text}`}>123 Digital Way, Suite 456</p>
                <p className={`${sectionClasses.text}`}>Innovation City, CA 90210</p>
              </CardContent>
            </Card>
            <Card className={`${sectionClasses.cardBackground} p-6 shadow-lg`}>
              <CardContent className="flex flex-col items-center justify-center">
                <Phone className={`w-12 h-12 mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                <CardTitle className={`text-xl font-semibold mb-2 ${sectionClasses.heading}`}>Call Us</CardTitle>
                <p className={`${sectionClasses.text}`}>+1 (234) 567-8900</p>
                <p className={`${sectionClasses.text}`}>Mon-Fri, 9 AM - 5 PM PST</p>
              </CardContent>
            </Card>
            <Card className={`${sectionClasses.cardBackground} p-6 shadow-lg`}>
              <CardContent className="flex flex-col items-center justify-center">
                <MailOpen className={`w-12 h-12 mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} />
                <CardTitle className={`text-xl font-semibold mb-2 ${sectionClasses.heading}`}>Email Us</CardTitle>
                <p className={`${sectionClasses.text}`}>info@quarksol.com</p>
                <p className={`${sectionClasses.text}`}>We respond within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${sectionClasses.heading}`}>
            Send Us a Message
          </h2>
          <Card className={`${sectionClasses.cardBackground} max-w-3xl mx-auto p-8 shadow-lg`}>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${sectionClasses.text}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-3 rounded-md border ${sectionClasses.inputBorder} ${sectionClasses.inputFocus} transition-colors duration-200`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${sectionClasses.text}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-3 rounded-md border ${sectionClasses.inputBorder} ${sectionClasses.inputFocus} transition-colors duration-200`}
                  placeholder="your@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${sectionClasses.text}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className={`w-full p-3 rounded-md border ${sectionClasses.inputBorder} ${sectionClasses.inputFocus} transition-colors duration-200`}
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${sectionClasses.text}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className={`w-full p-3 rounded-md border ${sectionClasses.inputBorder} ${sectionClasses.inputFocus} transition-colors duration-200`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button
                type="submit"
                size="lg"
                className={`w-full font-semibold px-8 py-4 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 ${sectionClasses.buttonPrimary}`}
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${sectionClasses.heading}`}>
            Find Us on the Map
          </h2>
          <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-xl border-2 border-blue-500">
            <Image
              src="/images/placeholder.svg?height=300&width=500&query=map-location"
              alt="Our Location on Map"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
            {/* You can embed a real map here using an iframe or a map library */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-xl font-bold">
              Map Placeholder
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
