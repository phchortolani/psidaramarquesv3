"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Users, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sendGTMEvent } from '@next/third-parties/google'

export function AboutSection() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formação Acadêmica",
      description: "Graduação em Psicologia pela Universidade Metodista de São Paulo",
    },
    {
      icon: Award,
      title: "Especializações",
      description: "Psicopatologia, TCC e Psicoterapia Baseada em Evidências",
    },
    {
      icon: Users,
      title: "Experiência Clínica",
      description: `Mais de ${new Date().getFullYear() - 2019} anos atendendo mulheres com ansiedade`,
    },
    {
      icon: Heart,
      title: "Atuação Ética e Acolhedora",
      description: "Foco em segurança, escuta e respeito ao tempo de cada paciente",
    },
  ]

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#60452a] mb-6">Conheça sua terapeuta</h2>
          <p className="text-xl text-[#404435] max-w-4xl mx-auto">
            Uma profissional baseada em evidências, com vivência real no tratamento da ansiedade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-[#60452a] mb-6">Dara M. Marques Hortolani</h3>
            <div className="text-[#7a5535] font-semibold mb-8">Psicóloga • CRP 06/144499</div>

            <div className="space-y-6 text-[#404435] leading-relaxed">
              <p>
                Olá! Sou a Dara, psicóloga formada em psicopatologia, com mais de {new Date().getFullYear() - 2019} anos de experiência clínica. Atualmente,
                estou em especialização em Terapia Cognitivo-Comportamental (TCC) e Psicoterapia Baseada em Evidências.
              </p>
              <p>
                Minha atuação é pautada em abordagens cientificamente validadas, com ênfase na TCC — reconhecida por sua eficácia no tratamento da ansiedade.
              </p>
              <p>
                <strong>Falo com propriedade sobre ansiedade porque também vivi esse processo.</strong> <br>
                </br>Já fui uma pessoa muito ansiosa e só consegui transformar minha vida quando decidi buscar um tratamento baseado na ciência.
                Vivia dominada pelos “e se”, evitando situações que me causavam desconforto — e, muitas vezes, nem conseguia reconhecer que estava ansiosa.
              </p>
              <p>
                Foi por meio do tratamento e do enfrentamento, e não tentando evitar ou controlar tudo, que comecei a construir uma relação mais saudável comigo mesma.
                Aprendi que uma vida mais leve não depende do controle absoluto, mas da aceitação da realidade,
                da tolerância às incertezas e da confiança em minha própria capacidade de lidar com elas.
              </p>
              <div className="bg-[#e5d9ce]/50 p-6 rounded-lg">
                <p className="font-semibold text-[#60452a] mb-2">
                  Se você sente que chegou a hora de mudar isso, saiba que posso caminhar com você — com empatia, acolhimento e experiência de quem já trilhou esse caminho.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
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
                  <div className="text-2xl font-bold">{`${new Date().getFullYear() - 2019}+`}</div>
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
              sendGTMEvent({ event: 'conversion_about' })
              const whatsappNumber = "5511978493885"
              const whatsappMessage = "Olá! Gostaria de conhecer mais sobre o acompanhamento psicológico."
              const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
              window.open(url, "_blank")

            }}
            size="lg"
            className="bg-green-600 w-max hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 mx-auto"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar pelo Whatsapp
          </Button>
        </div>
      </div>
    </section>
  )
}
