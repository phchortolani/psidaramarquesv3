import { Heart } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#404435] text-white py-12">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-center md:items-center gap-8">
          <div className="sm:w-4/12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 min-w-12  h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/soLogo4.png?height=75&width=96"
                  alt="Dara Marques - Psicóloga Online"
                  width={95}
                  height={95}
                  className="w-full ml-1 h-full object-cover"
                  priority
                />
              </div>
              <div>
                <div className="font-semibold">Dara Marques</div>
                <div className="text-sm text-[#e5d9ce]">Psicóloga CRP 06/144499</div>
              </div>
            </div>
            <p className="text-[#e5d9ce] text-sm leading-relaxed">
              Focada em ansiedade, oferecendo terapia online personalizada para mulheres que buscam uma
              vida com menos ansiedade e mais leveza.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-[#e5d9ce]">
              <div>Psicóloga Dara Marques</div>
              <div>CRP 06/164999</div>
              <div>WhatsApp: +55 (11) 97849-3885</div>
              <div>Instagram: @psidaramarques</div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#7a5535] mt-8 pt-8 text-center">
          {/*     <p className="text-[#e5d9ce] text-sm flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-400" /> para ajudar mulheres a superarem a ansiedade
          </p> */}
          <p className="text-[#e5d9ce] text-xs mt-2">
            © {new Date().getFullYear()} Psicóloga Dara Marques. Todos os direitos reservados. CRP 06/144499
          </p>
        </div>
      </div>
    </footer>
  )
}
