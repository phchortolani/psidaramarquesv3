"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Calendar, Video, TrendingUp } from "lucide-react"
import Image from "next/image"

export function ProcessSection() {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Primeiro Contato",
      description:
        "Entre em contato pelo WhatsApp para esclarecer dúvidas e conhecer melhor como posso auxiliá-la em seu processo terapêutico.",
      duration: "5 minutos",
    },
    {
      number: "2",
      icon: Calendar,
      title: "Agendamento",
      description:
        "Definimos juntas o melhor horário para sua primeira sessão, considerando sua disponibilidade e rotina.",
      duration: "Imediato",
    },
    {
      number: "3",
      icon: Video,
      title: "Primeira Sessão",
      description:
        "Sessão de acolhimento onde conversamos sobre suas necessidades e construímos seu plano terapêutico personalizado.",
      duration: "50 minutos",
    },
    {
      number: "4",
      icon: TrendingUp,
      title: "Acompanhamento",
      description:
        "Sessões regulares focadas no desenvolvimento de estratégias para o manejo da ansiedade e fortalecimento da autoestima.",
      duration: "Semanal",
    },
  ]

  const scrollToContact = () => {
    const element = document.querySelector("#contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="processo" className="py-20 bg-gradient-to-br from-[#e5d9ce] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#60452a] mb-6">Como funciona o processo terapêutico</h2>
          <p className="text-xl text-[#60452a] max-w-3xl mx-auto">
            Um processo terapêutico estruturado e acolhedor, que oferece suporte no desenvolvimento de estratégias para lidar com a ansiedade no dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-[#60452a] text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="w-16 h-16 bg-[#e5d9ce] rounded-full flex items-center justify-center mx-auto mb-6 mt-4 group-hover:bg-[#60452a] transition-colors">
                  <step.icon className="w-8 h-8 text-[#60452a] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#60452a] mb-3">{step.title}</h3>
                <p className="text-[#60452a] mb-4 leading-relaxed">{step.description}</p>
                <div className="text-sm text-[#7a5535] font-medium">Duração: {step.duration}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#60452a] mb-6">Terapia Online: Eficaz e Acessível</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#60452a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#60452a]">Eficácia comprovada cientificamente</p>
                    <p className="text-sm text-[#7a5535]">
                      Estudos demonstram resultados equivalentes à terapia presencial
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#60452a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#60452a]">Conforto e privacidade</p>
                    <p className="text-sm text-[#7a5535]">Atendimento no ambiente familiar, sem deslocamentos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#60452a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#60452a]">Flexibilidade de horários</p>
                    <p className="text-sm text-[#7a5535]">Adequação à sua rotina pessoal e profissional</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <div className=" mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Image src="/therapy.png" alt="Logo" width={400} height={400} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">Terapia Online</h4>
                <p className="text-[#60452a] text-lg">
                  Atendimento psicológico no conforto do seu lar, com a mesma qualidade e eficácia da terapia presencial
                </p>
              </div>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#60452a] hover:bg-[#7a5535] text-white px-8 py-4 rounded-full text-lg font-semibold w-full"
              >
                Iniciar Acompanhamento
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
