import { poppis } from '@/app/_ui/fonts'
import { CarouselSpacing, CarroselNovidades } from '../novidades/carrosel'

export const Novidades = () => {
  return (
    <section className="relative flex w-full flex-col items-start justify-start gap-3 p-8 pt-16 md:h-[700px] lg:h-[700px] lg:px-16 xl:h-screen">
      <div className="hidden h-full w-full flex-col justify-start gap-5 md:hidden">
        <h2
          className={`${poppis.className} text-left text-[22px] font-black uppercase text-[#567CAB] lg:text-3xl`}
        >
          Novidades na Domus
        </h2>

        <p className="hidden text-left text-lg text-white md:flex">
          Receba novidades, conheça as melhores práticas e muito mais.
        </p>
        <div className="flex w-full justify-start pr-14"></div>
      </div>
      <div className="flex w-full items-center justify-end sm:py-3">
        <CarroselNovidades />

        <div className="hidden md:flex">
          <CarouselSpacing />
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-b from-[#3C5778] from-0% to-[#567CAB] to-100%"></div>
      <p
        className={`${poppis.className} absolute bottom-0 right-0 -z-[9] text-[200px] font-black uppercase text-[#3B5E89] md:bottom-5 md:right-6 md:text-9xl xl:bottom-5 xl:right-10 xl:text-[210px]`}
      >
        {' '}
        novidades
      </p>
    </section>
  )
}
