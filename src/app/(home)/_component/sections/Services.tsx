'use client'

import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'

export const Services = () => {
  return (
    <section className="flex w-full flex-col gap-6 p-8 pt-12 text-black md:px-16 lg:flex-row">
      <div className="flex w-full flex-col gap-6">
        <h2 className="text-left text-[22px] font-bold text-[#0C2364] md:text-2xl lg:text-3xl">
          Fortalecendo Organizações com Excelência em Consultoria e Treinamentos
        </h2>

        <p className="text-left text-lg lg:w-10/12">
          A <strong>Domus Petra</strong> é especialista em consultoria
          empresarial e treinamentos de alta performance. Nossa missão é ajudar
          empresas a alcançarem seus objetivos através de serviços
          personalizados e de qualidade.
        </p>

        <p className="text-left text-lg">Explore soluções para seu setor</p>
        <div className="flex w-full justify-start pr-14">
          <Link
            href={'/services'}
            className="text-md mt-6 w-36 border-[1px] border-solid border-black py-2 text-center text-black hover:bg-[#567CAB] hover:text-white"
          >
            Clique aqui
          </Link>
        </div>
      </div>
      <div className="flex w-full max-w-6xl items-center justify-center py-5 sm:max-h-[500px] sm:py-3 lg:max-w-[370px]">
        <Carousel
          orientation="horizontal"
          className="h-auto w-full"
          plugins={[
            Autoplay({
              delay: 5000
            })
          ]}
        >
          <CarouselContent>
            <CarouselItem>
              <Card className="flex w-[500px] flex-col gap-4 p-7 lg:h-[400px] lg:w-[350px]">
                <Image
                  src={'/icons/icon-consultoria.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className=""
                />
                <p className="text-xl font-bold uppercase">consultorias</p>
                <p>
                  Nossas consultorias são personalizadas para atender às
                  necessidades específicas do seu negócio. Ajudamos a
                  identificar oportunidades, resolver problemas e impulsionar o
                  crescimento da sua empresa.{' '}
                </p>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="flex w-[500px] flex-col gap-4 p-7 lg:h-[400px] lg:w-[350px]">
                <Image
                  src={'/icons/icon-treinamento.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className=""
                />
                <p className="text-xl font-bold uppercase">treinamento</p>
                <p>
                  Oferecemos treinamentos práticos e para desenvolver
                  habilidades e competências no ambiente de trabalho. Nossos
                  programas de treinamento visam aprimorar a performance
                  individual e coletiva, promovendo um ambiente de aprendizado
                  contínuo e crescimento profissional.
                </p>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="flex w-[500px] flex-col gap-4 p-7 lg:h-[400px] lg:w-[350px]">
                <Image
                  src={'/icons/icon-palestra.svg'}
                  alt=""
                  width={100}
                  height={100}
                  className=""
                />
                <p className="text-xl font-bold uppercase">palestra</p>
                <p>
                  Nossas palestras são projetadas para motivar e engajar seu
                  público. Nossos palestrantes compartilham conhecimento,
                  experiências e insights que provocam reflexões e estimulam
                  mudanças positivas. Ideal para eventos corporativos,
                  conferências e seminários.
                </p>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden border-none bg-transparent sm:flex md:hidden lg:flex" />
          <CarouselNext className="hidden border-none bg-transparent sm:flex md:hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  )
}
