import { poppis } from '@/app/_ui/fonts'
import Image from 'next/image'

export const FabianoSobre = () => {
  return (
    <section className="relative flex h-screen flex-col items-center gap-12 bg-gradient-to-b from-[#131727] from-0% via-[#2B355A] via-50% to-[#131727] to-100% p-8 md:flex-row md:items-start md:justify-start md:gap-8 md:p-10">
      <div className="flex h-full w-full flex-col justify-between gap-2 md:w-[600px] md:px-8">
        <div className="">
          <h2 className={`${poppis.className} text-9xl font-black text-white`}>
            FABIANO
          </h2>
          <h2
            className={`${poppis.className} text-9xl font-black text-[#567CAB]`}
          >
            {`DELL'AGNOLO`}
          </h2>
        </div>
        <p className="text-lg text-white lg:w-[672px]">
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
        className="absolute bottom-0 right-2 -z-[-5]"
      />
    </section>
  )
}
