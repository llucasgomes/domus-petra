import { poppis } from '@/app/_ui/fonts'
import Image from 'next/image'

export const FabianoSobre = () => {
  return (
    <section className="relative flex-col items-center gap-12 p-8 md:h-[500px] md:flex-row md:items-start md:justify-start md:gap-8 md:p-10 lg:h-screen">
      <div className="flex h-full w-full flex-col justify-center gap-4 md:w-[600px] lg:justify-center lg:gap-2 lg:px-8">
        <div className="">
          <h2
            className={`${poppis.className} text-3xl font-black text-white md:text-7xl lg:text-9xl xl:text-8xl`}
          >
            FABIANO
          </h2>
          <h2
            className={`${poppis.className} text-3xl font-black text-[#567CAB] md:text-7xl lg:text-9xl xl:text-8xl`}
          >
            {`DELL'AGNOLO`}
          </h2>
        </div>
        <Image
          alt="homem de pele clara com cabelo curto e escuro, usando um terno cinza claro sobre uma camisa social azul clara. Ele está em pé, falando com um microfone de fone de ouvido preso à orelha e um controle remoto nas mãos. A expressão dele é séria e ele parece estar apresentando ou palestrando em um evento. O fundo é escuro, destacando a figura do homem."
          src={'/outros/profile-fabiano.png'}
          width={380}
          height={380}
          className="md:hidden"
        />
        <p className="text-white md:w-[500px] lg:w-[672px] lg:text-lg">
          Com mais de{' '}
          <span className="font-semibold">20 anos de experiência</span> na
          indústria, focado em metal-mecânica e automotivo, certificado em Seis
          Sigma e ISO, e especializado em
          <span className="font-semibold">Melhoria Contínua</span> e{' '}
          <span className="font-semibold">Lean Manufacturing</span>. Atua como
          consultor em gestão empresarial, promovendo{' '}
          <span className="font-semibold">eficiência</span> e{' '}
          <span className="font-semibold">implementação de metodologias</span>.
          Diretor executivo na Secretaria de Planejamento Urbano de Joinville,
          liderando projetos de desenvolvimento sustentável e tecnológico.
          Engajado em iniciativas de{' '}
          <span className="font-semibold">empreendedorismo e inovação</span>,
          como presidente do COMCITI e colunista no portal NSC Tech.
        </p>
      </div>

      <Image
        alt="homem de pele clara com cabelo curto e escuro, usando um terno cinza claro sobre uma camisa social azul clara. Ele está em pé, falando com um microfone de fone de ouvido preso à orelha e um controle remoto nas mãos. A expressão dele é séria e ele parece estar apresentando ou palestrando em um evento. O fundo é escuro, destacando a figura do homem."
        src={'/outros/profile-fabiano02.png'}
        width={580}
        height={580}
        className="absolute bottom-0 right-2 -z-10 hidden brightness-50 md:right-0 md:flex md:w-96 md:brightness-75 lg:w-[700px] xl:w-[550px]"
      />
      <div className="absolute bottom-0 left-0 -z-20 h-full w-full bg-gradient-to-b from-[#131727] from-0% via-[#2B355A] via-50% to-[#131727] to-100%"></div>
    </section>
  )
}
