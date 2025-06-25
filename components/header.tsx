"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre Ansiedade", href: "#ansiedade" },
  { name: "Como Funciona", href: "#processo" },
  { name: "Sobre Mim", href: "#sobre" },
  { name: "Depoimentos", href: "#depoimentos" },
  { name: "Contato", href: "#contato" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <Image
                  src="/soLogo4.png?height=75&width=96"
                  alt="Dara Marques - Psicóloga Online"
                  width={95}
                  height={75}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>
                <div className="font-semibold text-[#60452a]">Dara Marques</div>
                <div className="text-xs text-[#7a5535]">Psicóloga CRP 06/144499</div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#60452a]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold leading-6 text-[#60452a] hover:text-[#7a5535] transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button
              onClick={() => scrollToSection("#contato")}
              className="bg-green-600 w-full sm:w-max hover:bg-green-700 text-white px-6 py-2 rounded-full"
            >
              Agendar pelo Whatsapp
            </Button>
          </div>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12  rounded-full flex items-center justify-center">
                  <Image
                    src="/soLogo4.png?height=75&width=96"
                    alt="Dara Marques - Psicóloga Online"
                    width={95}
                    height={95}
                    className="w-full ml-1 h-full object-cover"
                    priority
                  />
                </div>
                <span className="font-semibold text-[#60452a]">Dara Marques</span>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-[#60452a]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[#60452a] hover:bg-[#e5d9ce] w-full text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    onClick={() => scrollToSection("#contato")}
                    className="bg-green-600 w-full sm:w-max hover:bg-green-700  text-white rounded-full"
                  >
                    Agendar pelo Whatsapp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
