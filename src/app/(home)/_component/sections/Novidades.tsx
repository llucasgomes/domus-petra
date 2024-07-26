import Link from 'next/link'
import { CarouselSpacing, CarroselNovidades } from '../novidades/carrosel'

export const Novidades = () => {
  return (
    <section className="to-89% flex w-full flex-col items-start justify-start gap-3 bg-gradient-to-b from-[#3C5778] from-0% to-[#567CAB] to-100% p-8 lg:px-16">
      <div className="flex h-full w-full flex-col justify-start gap-5 pt-8">
        <h2 className="text-left text-[22px] font-bold text-white lg:text-3xl">
          Novidades na Domus
        </h2>

        <p className="hidden text-left text-lg text-white md:flex">
          Receba novidades, conheça as melhores práticas e muito mais.
        </p>
        <div className="flex w-full justify-start pr-14">
          <Link
            href={'/blog'}
            className="text-md mt-6 w-36 border-[1px] border-solid border-white py-2 text-center text-white hover:bg-[#567CAB] hover:text-white"
          >
            Clique aqui
          </Link>
        </div>
      </div>
      <div className="flex w-full items-center justify-end sm:py-3">
        <CarroselNovidades />

        <div className="hidden md:flex">
          <CarouselSpacing />
        </div>
      </div>
    </section>
  )
}
