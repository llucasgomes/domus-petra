import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './_components/theme-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Domus Petra',
  description:
    'Domus Petra - Palestras, Treinamentos e Consultoria  +55 47 997071177',
  authors: [
    {
      name: 'Hydra Developer',
      url: 'www.hydra-developer.com.br',
    },
  ],
  keywords: [
    'palestras',
    'palestra',
    'consultoria',
    'treinamentos',
    'gestão',
    'financeira',
    'excelência',
    'atendimento',
    'planejamento',
    'financeiro',
    'inovação',
    'design thinking',
    'metodologias',
    'empreendedorismo',
    'desenvolvimento',
    'lean manufacturing',
    'liderança',
    'times',
    'trabalho em equipe',
    'business innovation',
    'smart cities',
    'networking',
    'ferramentas',
    'qualidade',
    'lucro',
    'crescimento',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.domuspetra.com.br/',
    title: 'Domus Petra',
    description: 'Palestras, Treinamentos e Consultoria +55 47 997071177',
    siteName: 'Domus Petra',
    images: [
      {
        url: '/logoOpenGraph.png',
      },
    ],
    locale: 'pt-BR',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
