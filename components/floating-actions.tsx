"use client"

import { Mail, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FloatingActions() {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-4">
      {/* Email */}
      <Link href="mailto:hello@quarksol.com">
        <Button
          size="sm"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-110 group"
          aria-label="Send Email"
        >
          <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
        </Button>
      </Link>

      {/* WhatsApp */}
      <Link href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
        <Button
          size="sm"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white shadow-lg shadow-green-600/25 hover:shadow-green-600/40 transition-all duration-300 transform hover:scale-110 group"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
        </Button>
      </Link>

      {/* Phone */}
      <Link href="tel:+15551234567">
        <Button
          size="sm"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-700 hover:from-purple-700 hover:to-pink-800 text-white shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-300 transform hover:scale-110 group"
          aria-label="Call Us"
        >
          <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
        </Button>
      </Link>
    </div>
  )
}
