"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Brain, Heart, Users } from "lucide-react"

export function AnxietySection() {
  const symptoms = [
    "Preocupação excessiva com o futuro",
    "Dificuldade para relaxar ou dormir",
    "Sensação de coração acelerado, falta de ar e tensão muscular",
    "Pensamentos negativos constantes",
    "Evitar situações que geram ansiedade",
    "Dificuldade em tomada de decisão",
    "Dificuldade de concentração",
    "Irritabilidade e mudanças de humor",
    "Ataques de pânico",
    "Autocobrança e Perfeccionismo",
  ]

  const impacts = [
    {
      icon: Heart,
      title: "Relacionamentos",
      description:
        "A ansiedade pode afetar a forma como nos relacionamos, criando barreiras na intimidade e comunicação.",
    },
    {
      icon: Brain,
      title: "Trabalho e Carreira",
      description: "Pode limitar o desempenho profissional, causar procrastinação e afetar a tomada de decisões.",
    },
    {
      icon: Users,
      title: "Vida Social",
      description: "Muitas vezes leva ao isolamento social e evitamento de situações que poderiam ser prazerosas.",
    },
  ]

  return (
    <section id="ansiedade" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#60452a] mb-6">
            Ansiedade sob controle: é possível e começa por você!
          </h2>
          <p className="text-xl text-[#404435] max-w-3xl mx-auto leading-relaxed">
            A ansiedade afeta <strong>milhões de mulheres</strong> no Brasil. <br></br> Reconhecer os sinais é o primeiro passo
            para controlá-la.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-[#7a5535]" />
              <h3 className="text-xl font-bold text-[#60452a]">Sinais que você pode estar enfrentando ansiedade:</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-[#e5d9ce]/30 rounded-lg">
                  <div className="w-2 h-2 bg-[#7a5535] rounded-full flex-shrink-0"></div>
                  <span className="text-[#404435]">{symptom}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#60452a] to-[#7a5535] p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">A boa notícia é:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <p>A ansiedade tem tratamento eficaz e comprovado cientificamente</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <p>Milhares de mulheres já superaram a ansiedade com terapia adequada</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm">✓</span>
                </div>
                <p>Você pode aprender técnicas para gerenciar e superar a ansiedade</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#60452a] text-center mb-12">
           Como a ansiedade pode afetar a sua vida
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#e5d9ce] rounded-full flex items-center justify-center mx-auto mb-6">
                    <impact.icon className="w-8 h-8 text-[#60452a]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#60452a] mb-4">{impact.title}</h4>
                  <p className="text-[#404435] leading-relaxed">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Button
            onClick={() => {
              const element = document.querySelector("#contato")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            size="lg"
            className="bg-[#60452a] hover:bg-[#7a5535] text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            Agendar Primeira Consulta
          </Button>
        </div>
      </div>
    </section>
  )
}
