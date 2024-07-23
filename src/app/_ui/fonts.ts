import { Bebas_Neue, Inter, Lora, Montserrat } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const bebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
})
