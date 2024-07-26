'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'

const services = [
  {
    id: '01',
    name: 'consultoria',
    description:
      'Nossas consultorias são personalizadas para atender às necessidades específicas do seu negócio. Ajudamos a identificar oportunidades, resolver problemas e impulsionar o crescimento da sua empresa. ',
    image: '/icons/icon-consultoria.svg'
  },
  {
    id: '02',
    name: 'treinamentos',
    description:
      'Oferecemos treinamentos práticos e para desenvolver habilidades e competências no ambiente de trabalho. Nossos programas de treinamento visam aprimorar a performance individual e coletiva, promovendo um ambiente de aprendizado contínuo e crescimento profissional.',
    image: '/icons/icon-treinamento.svg'
  },
  {
    id: '03',
    name: 'palestra',
    description:
      'Nossas palestras são projetadas para motivar e engajar seu público. Nossos palestrantes compartilham conhecimento, experiências e insights que provocam reflexões e estimulam mudanças positivas. Ideal para eventos corporativos, conferências e seminários.',
    image: '/icons/icon-palestra.svg'
  }
]

export const Services = () => {
  return (
    <section className="flex w-full flex-col p-8 pt-12 text-black md:flex-row md:px-16">
      {/* <div className="flex w-full flex-col gap-6 md:hidden">
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
      <div className="w-full items-center justify-center py-5 sm:py-3 md:flex md:max-h-[500px] md:max-w-[370px]">
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
      </div> */}
      <div className="flex w-full flex-col items-center justify-evenly gap-3 px-2 md:h-60 md:flex-row lg:h-96">
        {services.map((item) => {
          return (
            <Card
              key={item.id}
              className="flex w-full flex-col items-center gap-4 p-7 md:w-80 lg:h-[400px] lg:w-[320px] xl:w-[300px]"
            >
              <Image
                src={item.image}
                alt={`Imagem simples do tipo ${item.name}`}
                width={100}
                height={100}
              />
              <p className="text-xl font-bold uppercase xl:text-lg">
                {item.name}
              </p>
              <p className="hidden lg:flex xl:text-sm">{item.description}</p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
