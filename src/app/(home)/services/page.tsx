import { bebasNeue } from '@/app/_ui/fonts'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { consultoria, palestras } from '@/lib/data'

import Image from 'next/image'

export default function Page() {
  return (
    <main className="mt-20 flex w-full flex-col items-center justify-center">
      <section className="relative h-36 w-screen">
        <div className="flex h-full w-full items-center justify-center text-white">
          <h1
            className={`${bebasNeue.className} flex h-28 text-center text-4xl text-[--bg-secundary] md:text-6xl md:leading-[70px] lg:w-1/2 lg:text-left lg:leading-[55px]`}
          >
            serviços
          </h1>
        </div>
        <Image
          src={'/services/capa01.jpg'}
          width={500}
          height={500}
          alt="teste"
          className="absolute top-0 -z-10 h-full w-full object-cover brightness-50"
        />
      </section>
      <section>
        <Tabs defaultValue="palestras">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger className="text-base" value="consultorias">
              Consultorias
            </TabsTrigger>
            <TabsTrigger className="text-base" value="palestras">
              Palestras
            </TabsTrigger>
            <TabsTrigger className="text-base" value="treinamentos">
              Treinamentos
            </TabsTrigger>
          </TabsList>

          <TabsContent
            className="flex flex-col gap-3 p-5 data-[state=inactive]:hidden"
            value="consultorias"
          >
            {consultoria.map((item) => (
              <Card key={item.id} className="flex h-32">
                <CardHeader className="h-full w-[110px] p-0">
                  <Image
                    src={item.image}
                    width={300}
                    height={300}
                    alt={item.subtitle}
                    className="h-full w-full rounded-bl-md rounded-tl-md object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-start gap-2 pt-1">
                  <CardTitle className="max-w-[220px] text-left text-base">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="max-w-[220px] text-left text-sm">
                    {item.subtitle.slice(0, 70)}...
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent
            className="flex flex-col gap-3 p-5 data-[state=inactive]:hidden"
            value="palestras"
          >
            {palestras.map((item) => {
              return (
                <Card key={item.id} className="mt-0 flex h-32">
                  <CardHeader className="h-full w-[110px] p-0">
                    <Image
                      src={'/services/capa01.jpg'}
                      width={300}
                      height={300}
                      alt="asda"
                      className="h-full w-full rounded-bl-md rounded-tl-md object-cover object-center"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-start gap-5 pt-1">
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>
          <TabsContent
            className="flex flex-col gap-3 p-5 data-[state=inactive]:hidden"
            value="treinamentos"
          >
            {palestras.map((item) => {
              return (
                <Card key={item.id} className="flex h-32">
                  <CardHeader className="h-full w-[110px] p-0">
                    <Image
                      src={'/services/capa01.jpg'}
                      width={300}
                      height={300}
                      alt="asda"
                      className="h-full w-full rounded-bl-md rounded-tl-md object-cover object-center"
                    />
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-start gap-5 pt-1">
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}
