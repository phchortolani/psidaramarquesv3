'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, MessageCircle } from "lucide-react"
import { Button } from "./ui/button"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria S.",
      age: "32 anos",
      location: "São Paulo",
      text: "Depois de meses sofrendo com ansiedade, encontrei na Dara uma profissional que realmente me entendeu. Hoje consigo dormir melhor e me sinto muito mais confiante.",
      rating: 5,
      issue: "Ansiedade e insônia",
    },
    {
      name: "Ana P.",
      age: "28 anos",
      location: "Rio de Janeiro",
      text: "A terapia online foi perfeita para mim. Consegui fazer as sessões no conforto de casa e isso me ajudou a me abrir mais. Recomendo muito!",
      rating: 5,
      issue: "Ansiedade social",
    },
    {
      name: "Carla M.",
      age: "35 anos",
      location: "Belo Horizonte",
      text: "Estava com muita dificuldade no trabalho por causa da ansiedade. Com o acompanhamento da Dara, aprendi técnicas que uso no dia a dia e minha qualidade de vida melhorou muito.",
      rating: 5,
      issue: "Ansiedade no trabalho",
    },
  ]

  return (
    <section id="depoimentos" className="py-20 bg-[#404435]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Histórias de transformação</h2>
          <p className="text-xl text-[#e5d9ce] max-w-3xl mx-auto">
            Veja como outras mulheres superaram a ansiedade e transformaram suas vidas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#60452a] mb-4" />
                <p className="text-[#404435] mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-[#60452a]">{testimonial.name}</div>
                  <div className="text-sm text-[#7a5535]">
                    {testimonial.age} • {testimonial.location}
                  </div>
                  <div className="text-sm text-[#7a5535] mt-1 font-medium">Tratamento: {testimonial.issue}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Você também pode construir uma vida livre do peso da ansiedade</h3>
            <p className="text-[#e5d9ce] mb-6">Cuidar da sua saúde mental é um passo que transforma. O seu momento é agora!</p>
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
            {/*          <div className="flex justify-center items-center gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">1500+</div>
                <div className="text-sm text-[#e5d9ce]">sessoes realizadas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-[#e5d9ce]">Taxa de melhora</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">6+</div>
                <div className="text-sm text-[#e5d9ce]">Anos de experiência</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
