"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Users, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Graduação em Psicologia pela Universidade Paulista",
    },
    {
      icon: Award,
      title: "Especializações",
      description: "Psicanálise e Terapia Cognitivo-Comportamental (TCC)",
    },
    {
      icon: Users,
      title: "Experiência Clínica",
      description: "Mais de 6 anos atendendo mulheres com ansiedade",
    },
    {
      icon: Heart,
      title: "Abordagem Humanizada",
      description: "Foco no acolhimento e desenvolvimento da autoestima",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#60452a] mb-6">Conheça sua terapeuta</h2>
          <p className="text-xl text-[#404435] max-w-3xl mx-auto">
            Uma profissional dedicada a ajudar mulheres a superarem a ansiedade e viverem com mais leveza
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-[#60452a] mb-6">Dara Macedo Marques</h3>
            <div className="text-[#7a5535] font-semibold mb-8">Psicóloga • CRP 06/144499</div>

            <div className="space-y-6 text-[#404435] leading-relaxed">
              <p>
                <strong>Olá! Sou a Dara</strong>, psicóloga especializada em ansiedade há mais de 6 anos. Minha
                missão é ajudar mulheres como você a superarem a ansiedade e desenvolverem uma relação mais saudável
                consigo mesmas.
              </p>

              <p>
                Durante minha trajetória profissional, percebi que a ansiedade afeta as mulheres de forma única,
                especialmente considerando as pressões sociais, profissionais e familiares que enfrentamos. Por isso,
                desenvolvi uma abordagem específica que considera essas particularidades.
              </p>

              <p>
                Acredito que cada mulher tem dentro de si a força necessária para superar seus desafios. Meu papel é
                oferecer as ferramentas, o acolhimento e o suporte necessários para que você descubra essa força e a
                utilize em seu favor.
              </p>

              <div className="bg-[#e5d9ce]/50 p-6 rounded-lg">
                <p className="font-semibold text-[#60452a] mb-2">
                  "Meu compromisso é oferecer um espaço seguro, livre de julgamentos, onde você pode ser autêntica e
                  trabalhar suas questões no seu próprio ritmo."
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/land3.jpg?height=480&width=384"
                  alt="Dara Marques - Psicóloga focada em ansiedade"
                  width={384}
                  height={480}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#60452a] text-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">6+</div>
                  <div className="text-sm">Anos de experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#e5d9ce] rounded-full flex items-center justify-center mx-auto mb-4">
                  <credential.icon className="w-8 h-8 text-[#60452a]" />
                </div>
                <h4 className="font-bold text-[#60452a] mb-3">{credential.title}</h4>
                <p className="text-[#404435] text-sm leading-relaxed">{credential.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => {
              const whatsappNumber = "5511978493885"
              const whatsappMessage = "Olá! Gostaria de conhecer mais sobre o acompanhamento psicológico."
              const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
              window.open(url, "_blank")
            }}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 mx-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Conversar pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
