import { bebasNeue } from '@/app/_ui/fonts'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex flex-col">
      <section className="relative flex w-full flex-col items-center justify-center py-8 md:gap-8 lg:flex-row">
        <div className="flex h-52 flex-col items-center justify-center lg:h-60">
          <Image
            src={'/services/bg-services.jpeg'}
            alt="capa de fundo da imagem"
            width={700}
            height={700}
            className="absolute -z-10 h-full w-full object-cover object-center brightness-50"
          />
          <h1
            className={`${bebasNeue.className} flex h-28 pt-10 text-center text-4xl text-[--bg-secundary] md:text-6xl`}
          >
            Blog domus petra
          </h1>
        </div>
      </section>
      {/* hero */}
      <section className="flex gap-5 px-16 pb-12 pt-24">
        <div className="relative flex h-[432.26px] w-[723.75px] flex-col justify-end gap-1 rounded-xl p-7 text-white">
          <h1 className="text-4xl">Ini Adalah Judul Artikel</h1>
          <p className="text-base">
            <span className="font-semibold">By</span> Ridho Satriawan
          </p>
          <Image
            src={'/outros/image-contact.webp'}
            alt="Imagem ilustrativa, de uma mão segurando um celular, se referindo ao contexto da pagina, como informações de contato"
            width={500}
            height={500}
            className="absolute left-0 top-0 -z-10 h-full w-full rounded-xl object-cover brightness-50"
          />
        </div>
        <div className="flex h-[432.26px] w-[461px] flex-col items-center justify-start gap-3 rounded-xl px-5">
          <div className="flex h-16 w-full items-center justify-center rounded-lg bg-red-400">
            <h1 className="text-4xl capitalize">ultimas postagens</h1>
          </div>
          <div className="flex w-full flex-col gap-3">
            <Card className="full h-28">daklsdnlasdaksdnaskdjk</Card>
            <Card className="full h-28">daklsdnlasdaksdnaskdjk</Card>
            <Card className="full h-28">daklsdnlasdaksdnaskdjk</Card>
          </div>
        </div>
      </section>
      <section className="flex h-full gap-5 px-16 py-12">
        <div className="flex w-full flex-col justify-start gap-1 rounded-xl">
          <div className="flex h-full w-full flex-col gap-3">
            <div className="flex h-16 w-full items-center justify-center rounded-lg bg-red-400">
              <h1 className="text-4xl capitalize">postagens domus petra</h1>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 bg-green-400 p-4">
              {/* <Card className="m-0 h-[296px] w-[260px] bg-red-500"></Card> */}
              <Card className="h-[296px] w-[260px] bg-red-500"></Card>
              <Card className="h-[296px] w-[260px] bg-red-500"></Card>
              <Card className="h-[296px] w-[260px] bg-red-500"></Card>
              <Card className="h-[296px] w-[260px] bg-red-500"></Card>
            </div>
          </div>
        </div>
        {/* vategorias */}
        <div className="flex h-[432.26px] w-[461px] flex-col items-center justify-start gap-3 rounded-xl px-5">
          <div className="flex h-16 w-full items-center justify-center rounded-lg bg-red-400">
            <h1 className="text-4xl capitalize">categorias</h1>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <Badge className="flex h-10 w-40 items-center justify-center rounded-2xl text-center">
              IA
            </Badge>
            <Badge className="flex h-10 w-40 items-center justify-center rounded-2xl text-center">
              IA
            </Badge>
            <Badge className="flex h-10 w-40 items-center justify-center rounded-2xl text-center">
              IA
            </Badge>
            <Badge className="flex h-10 w-40 items-center justify-center rounded-2xl text-center">
              IA
            </Badge>
            <Badge className="flex h-10 w-40 items-center justify-center rounded-2xl text-center">
              IA
            </Badge>
          </div>
        </div>
      </section>
    </main>
  )
}
