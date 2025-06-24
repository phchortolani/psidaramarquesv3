"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Shield } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="pt-20 md:min-h-svh md:flex md:items-center pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-br from-[#e5d9ce] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-[#60452a]/10 text-[#60452a] px-4 py-2 rounded-full text-sm font-medium">
                <Heart className="w-4 h-4" />
                Focada em Ansiedade
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#60452a] mb-6 leading-tight">
              A ansiedade não precisa <span className="text-[#7a5535]">dominar</span> a sua vida
            </h1>
            <p className="text-lg text-[#404435] mb-8 leading-relaxed">
              Acompanhamento psicológico online especializado para mulheres que desejam superar a ansiedade e
              desenvolver uma relação mais saudável consigo mesmas.
            </p>

            {/* Imagem para mobile - aparece aqui */}
            <div className="flex justify-center lg:hidden mb-8 order-2">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/psi3.png?height=320&width=320"
                    alt="Dara Marques - Psicóloga focada em ansiedade"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#60452a]">1500+</div>
                    <div className="text-sm text-[#7a5535]">sessões realizadas</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8 order-3">
              {[
                "Atendimento 100% online e personalizado",
                "Psicóloga focada no manejo da ansiedade há mais de 6 anos",
                "Atuação com Terapia Cognitivo-Comportamental (TCC)",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#60452a] flex-shrink-0" />
                  <span className="text-[#404435]">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 order-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#60452a] hover:bg-[#7a5535] text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Agendar Primeira Consulta
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#ansiedade")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="border-[#60452a] text-[#60452a] hover:bg-[#60452a] hover:text-white px-8 py-4 rounded-full text-lg font-semibold"
              >
                Saiba Mais
              </Button>
            </div>

            <div className="mt-8 flex  items-center sm:items-start gap-6 text-sm text-[#7a5535] order-5">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Sigilo profissional</span>
              </div>
              <div>
                <span className="font-semibold">CRP 06/144499</span>
              </div>
            </div>
          </div>

          {/* Imagem para desktop - aparece aqui */}
          <div className="hidden lg:flex justify-center lg:justify-end order-2 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/psi3.png?height=400&width=400"
                  alt="Dara Marques - Psicóloga focada em ansiedade"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#60452a]">1500+</div>
                  <div className="text-sm text-[#7a5535]">sessões realizadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
