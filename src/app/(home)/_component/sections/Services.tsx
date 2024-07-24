import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export const Services = () => {
  return (
    <section className="flex w-full flex-col gap-6 bg-[--bg-highlight] p-8 text-white md:px-16 lg:flex-row">
      <div className="flex w-full flex-col gap-6">
        <h2 className="text-left text-[22px] font-bold md:text-2xl lg:text-3xl">
          Fortalecendo Organizações com Excelência em Consultoria e Treinamentos
        </h2>

        <p className="text-left text-lg lg:w-10/12">
          A <strong>Domus Petra</strong> é especialista em consultoria
          empresarial e treinamentos de alta performance. Nossa missão é ajudar
          empresas a alcançarem seus objetivos através de serviços
          personalizados e de qualidade.
        </p>

        <p className="text-left text-lg">Explore soluções para seu setor</p>
        <Link
          href={'/services'}
          className="text-md mt-6 w-36 border-[1px] border-solid border-[#F8F9FA] py-2 text-center text-[#F8FAFC] hover:bg-[--bg-primary] hover:text-[#373A3C]"
        >
          Clique aqui
        </Link>
      </div>
      <div className="flex w-full flex-wrap items-start justify-start gap-2 lg:w-1/2 lg:flex-col">
        <Card className="w-[148px] lg:w-full">
          <Link
            href={'#'}
            target="_blank"
            className="text-md flex flex-col items-center justify-center gap-2 py-3 lg:w-full"
          >
            <Image
              src={'/icons/icon-consultoria.svg'}
              alt=""
              width={70}
              height={70}
              className=""
            />
            <p className="px-2 font-semibold uppercase">consultorias</p>
          </Link>
        </Card>
        <Card className="w-[148px] lg:w-full">
          <Link
            href={'#'}
            target="_blank"
            className="text-md flex flex-col items-center justify-center gap-2 py-3 lg:w-full"
          >
            <Image
              src={'/icons/icon-palestra.svg'}
              alt=""
              width={70}
              height={70}
              className=""
            />
            <p className="px-2 font-semibold uppercase">palestras</p>
          </Link>
        </Card>
        <Card className="w-[148px] lg:w-full">
          <Link
            href={'#'}
            target="_blank"
            className="text-md flex flex-col items-center justify-center gap-2 py-3 lg:w-full"
          >
            <Image
              src={'/icons/icon-treinamento.svg'}
              alt=""
              width={70}
              height={70}
              className=""
            />
            <p className="px-2 font-semibold uppercase">treinamentos</p>
          </Link>
        </Card>
      </div>
    </section>
  )
}
