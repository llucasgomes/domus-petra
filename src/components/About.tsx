import { montSerrat } from '@/app/ui/fonts'
import Image from 'next/image'
import { Button } from './ui/button'

export default function About() {
  return (
    <section
      className={`${montSerrat.className} flex h-screen w-full flex-col items-center justify-center md:h-auto md:py-10`}
    >
      <h1 className="pb-3 text-center font-[600] uppercase text-[#343434]  dark:text-[#ffffff] md:mb-8">
        {"fabiano dell'agnoll"}
      </h1>
      <div className="flex flex-col items-center justify-center md:flex-row md:gap-8 md:px-5">
        <Image
          src={'/image/Profile.webp'}
          width={300}
          height={300}
          alt="Foto de PerfilFabiano Dell'Agnolo"
          className="h-80 w-full max-w-sm sm:rounded-xl "
        />
        <div className="flex h-auto w-full flex-col items-center justify-center px-4 py-4  text-justify text-lg md:h-80 md:max-w-md ">
          <p>
            Experiência por 20 anos na indústria, com ênfase no setor
            metal-mecânico e automotivo.{' '}
          </p>
          <p className="pt-2">
            Coordenou programas de Melhoria Contínua, Kaizen e Seis Sigma.
            Especialista em metodologias de gestão e de solução de problemas,
            ferramentas da qualidade e{' '}
            <span className=" italic">Lean Manufacturing</span>.
          </p>
          <Button
            variant={'outline'}
            className="mt-5 max-w-[227px] border-2 border-solid border-[#232323] bg-transparent px-10 py-5 font-bold text-[#232323]"
          >
            Saber Mais
          </Button>
        </div>
      </div>
    </section>
  )
}
