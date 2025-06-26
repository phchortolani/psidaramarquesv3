'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, MessageCircle } from "lucide-react"
import { Button } from "./ui/button"
import { sendGAEvent } from "@next/third-parties/google"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "B. A.",
      age: `${new Date().getFullYear() - 2003} anos`,
      text: "Tudo tem sido uma ótima experiência. Uma profissional excelente, muito humana e empenhada em dar o seu melhor.",
      rating: 5,
      issue: "Ansiedade social",
      location: "Piauí",
    },
    {
      name: "A. A.",
      age: `${new Date().getFullYear() - 1986} anos`,
      location: "São Paulo",
      text: "Ótima profissional que sempre procura estar atualizada com novas técnicas terapeuticas para nos ajudar a lidar com todo stress... ansiedade que enfrentamos no nosso dia- dia. Recomendo a todos.",
      rating: 5,
      issue: "Ansiedade e insônia",
    },
    {
      name: "A. M.",
      age: `${new Date().getFullYear() - 1991} anos`,
      location: "São Paulo",
      text: "Uma Psicóloga humana, dedicada, boa ouvinte, que ajuda enfrentar medos insegurança, ansiedade, superar conflitos internos, autoconhecimento, desenvolver habilidades e autoconfiança, atingir objetivos, ter uma qualidade de vida e inteligência emocional. Excelente profissional.",
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
                    {testimonial.age} {`${testimonial.location ? ' • ' + testimonial.location : ""}`}
                  </div>
                  <div className="text-sm text-[#7a5535] mt-1 font-medium">Tratamento: {testimonial.issue}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Você também pode construir uma vida livre do peso da ansiedade</h3>
            <p className="text-[#e5d9ce] mb-6">Cuidar da sua saúde mental é um passo que transforma. O seu momento é agora!</p>
            <Button
              onClick={() => {
                sendGAEvent('event', 'conversion_testimonials')
                const whatsappNumber = "5511978493885"
                const whatsappMessage = "Olá! Encontrei você pelo site e gostaria de agendar uma consulta."
                const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
                window.open(url, "_blank")
              }}
              size="lg"
              className="bg-green-600 w-full sm:w-max hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar pelo Whatsapp
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
                <div className="text-3xl font-bold">{`${new Date().getFullYear() - 2019}+`}</div>
                <div className="text-sm text-[#e5d9ce]">Anos de experiência</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
