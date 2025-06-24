"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappNumber = "5511978493885"
  const whatsappMessage = "Olá! Gostaria de conhecer mais sobre o acompanhamento psicológico para ansiedade."

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Aparece após 3 segundos

    return () => clearTimeout(timer)
  }, [])

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-bounce"
        aria-label="Conversar pelo WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Conversar pelo WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  )
}
