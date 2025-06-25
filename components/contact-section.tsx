"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { sendGTMEvent } from "@next/third-parties/google"
import { MessageCircle, Clock, Shield, Phone } from "lucide-react"

export function ContactSection() {
  const whatsappNumber = "5511978493885"
  const whatsappMessage = "Olá! Gostaria de conhecer mais sobre o acompanhamento psicológico para ansiedade."

  const openWhatsApp = () => {
    sendGTMEvent({ event: 'conversion_contact' })
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  const benefits = [
    {
      icon: Clock,
      title: "Resposta Rápida",
      description: "Retorno em até 2 horas durante horário comercial",
    },
    {
      icon: Shield,
      title: "Sigilo Profissional",
      description: "Todas as informações são tratadas com total confidencialidade",
    },
    {
      icon: MessageCircle,
      title: "Atendimento Personalizado",
      description: "Cada processo terapêutico é único e individualizado",
    },
  ]

  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-[#60452a] to-[#7a5535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Pronta para iniciar sua jornada?</h2>
          <p className="text-xl text-[#e5d9ce] max-w-3xl mx-auto">
            Dê o primeiro passo em direção a uma vida com menos ansiedade e mais leveza. <br /> Entre em contato para conhecer mais
            sobre a terapia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#60452a] mb-6 text-center">Entre em contato</h3>

                <div className="bg-[#e5d9ce]/50 p-6 rounded-lg mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#60452a] mb-2">Acompanhamento Especializado</div>
                    <div className="text-[#404435] mb-2">Terapia online para ansiedade</div>
                    <div className="text-sm text-[#7a5535] mt-2">Primeira consulta de acolhimento e avaliação</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#60452a] rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-[#60452a]">{benefit.title}</div>
                        <div className="text-sm text-[#404435]">{benefit.description}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={openWhatsApp}
                  size="lg"
                  className=" mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full text-lg font-semibold mb-6 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  Agendar pelo Whatsapp
                </Button>
                <div className="text-center text-[#7a5535] mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Phone className="w-4 h-4" />
                    <span className="font-semibold">+55 (11) 97849-3885</span>
                  </div>
                  {/*  <div className="text-sm">Horário de atendimento: Segunda a Sexta, 8h às 18h</div> */}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-white">
            <h3 className="text-3xl font-bold mb-8">O que está incluso na terapia?</h3>

            <div className="space-y-2">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Sessões semanais online com duração de <b>50 minutos</b>, realizadas nos dias e horários previamente combinados.
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    <b>Suporte via WhatsApp</b> para esclarecer dúvidas pontuais.
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    <b>Sessão de feedback</b> personalizada para monitorar seu progresso.
                  </h4>
                </div>
              </div>

              {/*       <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Acesso a uma <b>playlist</b> exclusiva de <b>Regulação Emocional</b> no Spotify.
                  </h4>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    <b>Materiais digitais</b> e exercícios terapêuticos disponibilizados para você.
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Participação no <b>Close Friends</b> exclusivo para pacientes.
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    <b>Jogos terapêuticos</b> para desenvolver e fortalecer habilidades emocionais.
                  </h4>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    <b>Plano de tratamento personalizado</b> de acordo com suas necessidades.
                  </h4>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}
