/* eslint-disable prettier/prettier */
import { poppis, montserrat } from '@/app/_ui/fonts'
import Image from 'next/image'

export const FabianoSobre = () => {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#131727] via-[#2B355A] to-[#131727] p-8 md:flex-row md:items-center md:justify-center md:p-10">
      <div className="flex flex-col items-center text-center md:mr-[100px] md:w-[600px] md:items-start md:gap-8 md:text-left">
        <div className="mb-8 mt-16 md:mb-2 md:mt-4">
          <h2
            className={`${poppis.className} text-[180px] font-black leading-none text-white md:text-[150px]`}
          >
            FABIANO
          </h2>
          <h2
            className={`${poppis.className} text-[180px] font-black leading-none text-[#567CAB] md:text-[150px]`}
          >
            {`DELL'AGNOLO`}
          </h2>
        </div>
        <p
          className={`${montserrat.className} text-[22px] text-white md:mt-8 md:w-[600px] md:text-[18px]`}
        >
          Com mais de{' '}
          <span className="font-semibold">20 anos de experiência</span> na
          indústria, focado em metal-mecânica e automotivo, certificado em Seis
          Sigma e ISO, e especializado em
          <span className="font-semibold">Melhoria Contínua</span> e{' '}
          <span className="font-semibold">Lean Manufacturing</span>.
          <br /> <br />
          Atua como consultor em gestão empresarial, promovendo{' '}
          <span className="font-semibold">eficiência</span> e{' '}
          <span className="font-semibold">implementação de metodologias</span>.
          Diretor executivo na Secretaria de Planejamento Urbano de Joinville,
          liderando projetos de desenvolvimento sustentável e tecnológico.
          <br />
          <br />
          Engajado em iniciativas de{' '}
          <span className="font-semibold">empreendedorismo e inovação</span>,
          como presidente do COMCITI e colunista no portal NSC Tech.
        </p>
      </div>

      <div className="relative w-full md:ml-10 md:w-[750px]">
        <Image
          alt="homem de pele clara com cabelo curto e escuro, usando um terno cinza claro sobre uma camisa social azul clara. Ele está em pé, falando com um microfone de fone de ouvido preso à orelha e um controle remoto nas mãos. A expressão dele é séria e ele parece estar apresentando ou palestrando em um evento. O fundo é escuro, destacando a figura do homem."
          src={'/outros/profile-fabiano02.png'}
          width={1050}
          height={1134}
          className="w-full max-w-[1050px] md:mt-12" // Ajusta a margem superior da imagem
        />
      </div>
    </section>
  )
}
