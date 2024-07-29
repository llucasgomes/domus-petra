import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'
import { GlobalProvider } from '@/contexts/GlobalContext'
import AuthProvider from '@/providers/auth'
import { ThemeProvider } from '@/providers/theme-provider'
import type { Metadata } from 'next'
import { montserrat } from './_ui/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Domus Petra',
  description:
    'Domus Petra - Palestras, Treinamentos e Consultoria  +55 47 997071177',
  authors: [
    {
      name: 'Hydra Developer',
      url: 'www.hydra-developer.com.br'
    }
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
    'crescimento'
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.domuspetra.com.br/',
    title: 'Domus Petra',
    description: 'Palestras, Treinamentos e Consultoria +55 47 997071177',
    siteName: 'Domus Petra',
    images: [
      {
        url: '/logo/logoOpenGraph.png'
      }
    ],
    locale: 'pt-BR'
  },
  metadataBase: new URL('https://hydra-domus-petra.vercel.app')
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-Br">
      <AuthProvider>
        <GlobalProvider>
          <body
            className={`${montserrat.className} bg-[-bg-primary] antialiased`}
          >
            <Toaster />
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </body>
        </GlobalProvider>
      </AuthProvider>
    </html>
  )
}
