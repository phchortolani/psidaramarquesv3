import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AnxietySection } from "@/components/anxiety-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { InstagramSection } from "@/components/instagram-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AnxietySection />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
