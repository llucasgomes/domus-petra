import Image from 'next/image'
import { CarroselComments } from '../carrosel'

export const Depoimentos = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center p-8 lg:px-16">
      <div className="flex w-full flex-col gap-5">
        <h2 className="text-left text-[22px] font-bold text-white lg:text-3xl">
          Depoimentos Reais de Sucesso Empresarial
        </h2>
      </div>
      <div className="flex w-full max-w-6xl items-center justify-center py-5 sm:max-h-[500px] sm:py-3 lg:max-w-[600px]">
        <CarroselComments />
      </div>
      <Image
        alt="homem de pele clara com cabelo curto e escuro, usando um terno cinza claro sobre uma camisa social azul clara. Ele está em pé, falando com um microfone de fone de ouvido preso à orelha e um controle remoto nas mãos. A expressão dele é séria e ele parece estar apresentando ou palestrando em um evento. O fundo é escuro, destacando a figura do homem."
        src={'/outros/bg-depoimentos.png'}
        width={580}
        height={580}
        className="absolute -z-10 h-full w-full"
      />
      <div className="absolute inset-0 -z-[9] bg-[#3E5A7D] bg-opacity-15 backdrop-blur-sm"></div>
    </section>
  )
}
