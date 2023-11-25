import { montSerrat } from '@/app/ui/fonts'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'

export default function Service() {
  return (
    <section
      className={`${montSerrat.className} h-auto w-full  bg-[#d9d9d9] px-9 py-5`}
    >
      <h1
        className={`${montSerrat.className} mb-8 w-full text-center text-3xl font-semibold uppercase text-[#343434]`}
      >
        serviços
      </h1>
      <div className="flex h-auto w-full flex-wrap items-center justify-center gap-4">
        <Card className="rounded-none">
          <CardContent className="px-0">
            <Image
              src={'/image/service01.webp'}
              width={500}
              height={500}
              alt="Imagem Ilustrativa"
              className=" w-full"
            />
          </CardContent>
          <CardFooter>
            <CardTitle className=" w-full text-center uppercase">
              palestras
            </CardTitle>
          </CardFooter>
        </Card>

        <Card className="rounded-none">
          <CardContent className="px-0">
            <Image
              src={'/image/service02.webp'}
              width={500}
              height={500}
              alt="Imagem Ilustrativa"
              className=" w-full"
            />
          </CardContent>
          <CardFooter>
            <CardTitle className=" w-full text-center uppercase">
              treinamentos
            </CardTitle>
          </CardFooter>
        </Card>

        <Card className="rounded-none">
          <CardContent className="px-0">
            <Image
              src={'/image/service03.webp'}
              width={500}
              height={500}
              alt="Imagem Ilustrativa"
              className=" w-full"
            />
          </CardContent>
          <CardFooter>
            <CardTitle className=" w-full text-center uppercase">
              consultoria
            </CardTitle>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
