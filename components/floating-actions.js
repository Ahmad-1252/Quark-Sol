"use client"

import { useTheme } from "./theme-provider"
import { Mail, MessageCircle, Phone } from "./ui-elements" // Import icons from ui-elements
import { useState } from "react"

export default function FloatingActions() {
  const { theme } = useTheme()
  const [showTooltip, setShowTooltip] = useState(null) // State to manage which tooltip is shown

  const buttonClasses = `
    relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg mb-4
    transition-all duration-300 ease-in-out transform hover:scale-110
    ${theme === "dark" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-500 text-white hover:bg-blue-600"}
  `
  const tooltipClasses = `
    absolute right-full px-3 py-1.5 mr-3 rounded-md text-sm whitespace-nowrap
    transition-all duration-200 ease-in-out opacity-0 scale-95
    ${theme === "dark" ? "bg-slate-700 text-white shadow-md" : "bg-slate-800 text-white shadow-md"}
  `

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <a
        href="mailto:info@quarksol.com"
        className={buttonClasses}
        onMouseEnter={() => setShowTooltip("email")}
        onMouseLeave={() => setShowTooltip(null)}
        aria-label="Email us"
      >
        <Mail className="w-6 h-6" />
        <span className={`${tooltipClasses} ${showTooltip === "email" ? "opacity-100 scale-100" : ""}`}>
          info@quarksol.com
        </span>
      </a>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        onMouseEnter={() => setShowTooltip("whatsapp")}
        onMouseLeave={() => setShowTooltip(null)}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className={`${tooltipClasses} ${showTooltip === "whatsapp" ? "opacity-100 scale-100" : ""}`}>
          Chat on WhatsApp
        </span>
      </a>
      <a
        href="tel:+1234567890"
        className={buttonClasses}
        onMouseEnter={() => setShowTooltip("phone")}
        onMouseLeave={() => setShowTooltip(null)}
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
        <span className={`${tooltipClasses} ${showTooltip === "phone" ? "opacity-100 scale-100" : ""}`}>
          +1 (234) 567-890
        </span>
      </a>
    </div>
  )
}
