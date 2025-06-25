import type React from "react"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'


const nunito = Nunito({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dara Marques - Psicóloga focada em Ansiedade | Terapia Online",
  description:
    "Psicóloga focada em ansiedade. Terapia online personalizada para mulheres que buscam uma vida mais leve e equilibrada. Agende sua consulta.",
  keywords: "psicóloga, ansiedade, terapia online, tratamento ansiedade, psicoterapeuta",
  authors: [{ name: "Dara Marques" }],
  creator: "Dara Marques",
  publisher: "Dara Marques",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.psidaramarques.com.br/",
    title: "Dara Marques - Psicóloga focada em Ansiedade",
    description:
      "Terapia online especializada para mulheres com ansiedade. Transforme sua vida com acompanhamento profissional.",
    siteName: "Dara Marques Psicóloga",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dara Marques - Psicóloga focada em Ansiedade",
    description: "Terapia online para mulheres com ansiedade. Agende sua consulta.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <GoogleTagManager gtmId="GTM-NN967RVG" />
      <body className={nunito.className}>{children}</body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!} />
    </html>
  )
}
