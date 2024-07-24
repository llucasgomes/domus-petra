import { CarroselNovidades } from '../novidades/carrosel'

export const Novidades = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[--bg-highlight] p-8 lg:px-16">
      <div className="flex w-full flex-col gap-5">
        <h2 className="text-left text-[22px] font-bold text-white lg:text-3xl">
          Novidades na Domus
        </h2>

        <p className="text-left text-lg text-white">
          Receba novidades, conheça as melhores práticas e muito mais.
        </p>
      </div>
      <div className="flex w-full max-w-6xl items-center justify-center py-5 sm:max-h-[500px] sm:py-3 lg:max-w-[600px]">
        <CarroselNovidades />
      </div>
    </section>
  )
}
