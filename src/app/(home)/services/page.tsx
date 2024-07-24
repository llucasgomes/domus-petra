import { bebasNeue } from '@/app/_ui/fonts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { consultoria, palestras, treinamentos } from '@/lib/data'

import Image from 'next/image'
import { CardItem } from './_components/carditemService'

export default function Page() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <section className="relative flex w-full flex-col items-center justify-center py-8 md:gap-8 lg:flex-row">
        <div className="flex h-52 flex-col items-center justify-center lg:h-60">
          <Image
            src={'/services/capa01.jpg'}
            alt="capa de fundo da imagem"
            width={700}
            height={700}
            className="absolute -z-10 h-full w-full object-cover object-center brightness-50"
          />
          <h1
            className={`${bebasNeue.className} flex h-28 pt-10 text-center text-4xl text-[--bg-secundary] md:text-6xl`}
          >
            serviços
          </h1>
        </div>
      </section>

      <section className="w-screen">
        <Tabs defaultValue="palestras">
          <TabsList className="h-24 w-full gap-3">
            <TabsTrigger
              className="text-lg hover:bg-[--bg-highlight] hover:text-[--bg-secundary] data-[state=active]:bg-[--bg-highlight] data-[state=active]:text-[--bg-secundary]"
              value="consultorias"
            >
              Consultorias
            </TabsTrigger>
            <TabsTrigger
              className="text-lg hover:bg-[--bg-highlight] hover:text-[--bg-secundary] data-[state=active]:bg-[--bg-highlight] data-[state=active]:text-[--bg-secundary]"
              value="palestras"
            >
              Palestras
            </TabsTrigger>
            <TabsTrigger
              className="text-lg hover:bg-[--bg-highlight] hover:text-[--bg-secundary] data-[state=active]:bg-[--bg-highlight] data-[state=active]:text-[--bg-secundary]"
              value="treinamentos"
            >
              Treinamentos
            </TabsTrigger>
          </TabsList>

          <TabsContent
            className="flex flex-col gap-3 p-5 data-[state=inactive]:hidden"
            value="consultorias"
          >
            {consultoria.map((item) => (
              <CardItem key={item.title} service={item} />
            ))}
          </TabsContent>
          <TabsContent
            className="flex flex-col gap-3 p-5 data-[state=inactive]:hidden"
            value="palestras"
          >
            {palestras.map((item) => {
              return <CardItem key={item.title} service={item} />
            })}
          </TabsContent>
          <TabsContent
            className="flex flex-col gap-3 p-5 data-[state=inactive]:hidden"
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
