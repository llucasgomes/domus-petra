import { CarroselComments } from '../carrosel'

export const Depoimentos = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center p-8 lg:px-16">
      <div className="flex w-full flex-col gap-5">
        <h2 className="text-left text-[22px] font-bold lg:text-3xl">
          Depoimentos Reais de Sucesso Empresarial
        </h2>
      </div>
      <div className="flex w-full max-w-6xl items-center justify-center py-5 sm:max-h-[500px] sm:py-3 lg:max-w-[600px]">
        <CarroselComments />
      </div>
    </section>
  )
}
