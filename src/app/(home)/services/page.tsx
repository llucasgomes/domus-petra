import { poppis } from '@/app/_ui/fonts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  GETConsultorias,
  GETPalestras,
  GETTreinamentos
} from '@/actions/service'
import Image from 'next/image'
import { CardItem } from './_components/carditemService'

export default async function Page() {
  const consultoria = await GETConsultorias()
  const treinamentos = await GETTreinamentos()
  const palestras = await GETPalestras()
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <section className="relative flex w-full flex-col items-center justify-center py-8 md:h-96 md:gap-8 lg:flex-row">
        <div className="flex h-52 flex-col items-center justify-center lg:h-60">
          <Image
            src={'/services/bg-services.jpeg'}
            alt="capa de fundo da imagem"
            width={700}
            height={700}
            className="absolute -z-10 h-full w-full object-cover object-center brightness-75"
          />
          <div className="flex h-full w-full flex-col items-center justify-start gap-6 pl-11 md:items-start">
            <h1
              className={`${poppis.className} flex w-full pt-20 text-center text-4xl font-black uppercase text-black md:pt-10 md:text-6xl`}
            >
              serviços
            </h1>
            <h2 className="hidden w-1/2 md:flex md:w-4/5 lg:w-3/5">
              A Domus Petra é especialista em consultoria empresarial e
              treinamentos de alta performance. Nossa missão é ajudar empresas a
              alcançarem seus objetivos através de serviços personalizados e de
              qualidade. Explore soluções para seu setor
            </h2>
          </div>
        </div>
      </section>

      <section className="">
        <Tabs defaultValue="palestras">
          <TabsList className="h-24 w-full gap-2 rounded-none bg-[#577DAC] md:h-28 md:gap-3">
            <TabsTrigger
              className="text-white hover:bg-[--bg-highlight] hover:text-[--bg-secundary] data-[state=active]:bg-[--bg-highlight] data-[state=active]:text-[--bg-secundary] md:text-lg"
              value="consultorias"
            >
              Consultorias
            </TabsTrigger>
            <TabsTrigger
              className="text-white hover:bg-[--bg-highlight] hover:text-[--bg-secundary] data-[state=active]:bg-[--bg-highlight] data-[state=active]:text-[--bg-secundary] md:text-base"
              value="palestras"
            >
              Palestras
            </TabsTrigger>
            <TabsTrigger
              className="text-white hover:bg-[--bg-highlight] hover:text-[--bg-secundary] data-[state=active]:bg-[--bg-highlight] data-[state=active]:text-[--bg-secundary] md:text-lg"
              value="treinamentos"
            >
              Treinamentos
            </TabsTrigger>
          </TabsList>

          <TabsContent
            className="flex flex-col flex-wrap justify-center gap-3 p-5 data-[state=inactive]:hidden md:flex-row"
            value="consultorias"
          >
            {consultoria.map((item) => (
              <CardItem key={item.id} service={item} />
            ))}
          </TabsContent>
          <TabsContent
            className="flex flex-col flex-wrap justify-center gap-6 p-5 data-[state=inactive]:hidden md:flex-row"
            value="palestras"
          >
            {palestras.map((item) => {
              return <CardItem key={item.title} service={item} />
            })}
          </TabsContent>
          <TabsContent
            className="flex flex-col flex-wrap justify-center gap-3 p-5 data-[state=inactive]:hidden md:flex-row"
            value="treinamentos"
          >
            {treinamentos.map((item) => {
              return <CardItem key={item.title} service={item} />
            })}
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
