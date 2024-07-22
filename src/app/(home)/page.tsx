import { Card } from '@/components/ui/card'
import { Instagram, Linkedin, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { bebasNeue } from '../_ui/fonts'
import { CarroselComments } from './_component/carrosel'
import { CarroselNovidades } from './_component/novidades/carrosel'

export default function Home() {
  return (
    <main className="">
      {/* SECTION HERO */}
      <section className="relative flex h-screen w-full">
        <div className="flex h-full w-full flex-col items-start justify-center px-8 pb-20 lg:gap-10">
          <h1
            className={`${bebasNeue.className} block h-28 text-center text-4xl text-white md:text-6xl md:leading-[70px] lg:w-1/2 lg:text-left lg:leading-[55px]`}
          >
            <span className="bg-[--bg-tertiary] text-[--text-highlight]">
              Aprimore Seu Negócio
            </span>{' '}
            com Consultoria, Treinamentos e Palestras Transformadoras
          </h1>
        </div>
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="absolute -z-10 h-screen w-full object-fill brightness-50"
          src={'/video-banner.webm'}
        ></video>
      </section>
      {/* SECTION SOBRE O FABIANO */}
      <section className="flex flex-col items-center gap-12 p-8 md:flex-row md:items-start md:justify-start md:gap-8 md:p-10">
        <div className="flex h-full flex-col justify-between gap-3 md:w-[600px]">
          <div className="flex flex-col gap-5 lg:items-end lg:pr-4">
            <h2 className="text-base font-semibold uppercase text-[--text-primary] md:hidden">
              {"Fabiano Dell'Agnolo"}
            </h2>
            <Image
              alt="homem de pele clara com cabelo curto e escuro, usando um terno cinza claro sobre uma camisa social azul clara. Ele está em pé, falando com um microfone de fone de ouvido preso à orelha e um controle remoto nas mãos. A expressão dele é séria e ele parece estar apresentando ou palestrando em um evento. O fundo é escuro, destacando a figura do homem."
              src={'/profile-fabiano.png'}
              width={400}
              height={600}
              className="rounded-md md:h-[390px]"
            />
          </div>
          <div className="hidden items-center justify-end gap-6 p-3 md:flex">
            <Link
              href={'https://www.youtube.com/FabianoDellAgnoloDomusPetra'}
              target="_blank"
            >
              <YoutubeIcon size={35} />
            </Link>
            <Link
              href={'https://www.instagram.com/fabianodellagnolo'}
              target="_blank"
            >
              <Instagram size={35} />
            </Link>
            <Link
              href={'https://www.linkedin.com/in/fabianodellagnolo/'}
              target="_blank"
            >
              <Linkedin size={35} />
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 lg:w-1/2">
          <h2 className="hidden text-[--text-primary] md:block md:text-base md:font-semibold md:uppercase">
            {"Fabiano Dell'Agnolo"}
          </h2>

          <p className="text-left text-lg">
            Com mais de 20 anos de experiência na indústria, focado em
            metal-mecânica e automotivo, certificado em Seis Sigma e ISO, e
            especializado em Melhoria Contínua e Lean Manufacturing.
          </p>
          <p className="text-left text-lg">
            Atua como consultor em gestão empresarial, promovendo eficiência e
            implementação de metodologias. Diretor executivo na Secretaria de
            Planejamento Urbano de Joinville, liderando projetos de
            desenvolvimento sustentável e tecnológico. Engajado em iniciativas
            de empreendedorismo e inovação, como presidente do COMCITI e
            colunista no portal NSC Tech.
          </p>
        </div>
      </section>
      {/* SECTION SERVIÇOS */}
      <section className="flex w-full flex-col gap-6 bg-[--bg-highlight] p-8 text-white md:px-16 lg:flex-row">
        <div className="flex w-full flex-col gap-6">
          <h2 className="text-left text-[22px] font-bold md:text-2xl lg:text-3xl">
            Fortalecendo Organizações com Excelência em Consultoria e
            Treinamentos
          </h2>

          <p className="text-left text-lg lg:w-10/12">
            A <strong>Domus Petra</strong> é especialista em consultoria
            empresarial e treinamentos de alta performance. Nossa missão é
            ajudar empresas a alcançarem seus objetivos através de serviços
            personalizados e de qualidade.
          </p>

          <p className="text-left text-lg">Explore soluções para seu setor</p>
          <Link
            href={'#'}
            target="_blank"
            download
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
                src={'/icon-consultoria.png'}
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
                src={'/icon-palestra.png'}
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
                src={'/icon-treinamento.png'}
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
      {/* SECTION CLIENTES */}
      <section className="flex w-full flex-col items-center justify-center p-8 md:px-16">
        <div className="flex w-full flex-col gap-5 lg:flex-row">
          <h2 className="text-left text-[22px] font-bold text-[--text-highlight] md:text-2xl lg:w-1/2 lg:text-3xl">
            Conectando o Mundo: Escolha Domus Petra para o seu Sucesso
            Empresarial
          </h2>
          <div className="flex w-full flex-wrap items-center justify-center gap-3">
            <Image
              src={'/client-joinvalle.png'}
              alt=""
              width={100}
              height={100}
              className=""
            />

            <Image
              src={'/client-thyssenkrupp.png'}
              alt=""
              width={100}
              height={100}
              className=""
            />
            <Image
              src={'/client-sicoob.png'}
              alt=""
              width={100}
              height={100}
              className=""
            />
            <Image
              src={'/client-santarita.png'}
              alt=""
              width={100}
              height={100}
              className=""
            />
            <Image
              src={'/client-agoraparck.png'}
              alt=""
              width={100}
              height={100}
              className=""
            />
            <Image
              src={'/client-acelormittal.png'}
              alt=""
              width={100}
              height={100}
              className=""
            />
          </div>
        </div>
      </section>
      {/* SECTION NOVIDADES */}
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
      {/* SECTION DEPOIMENTOS */}
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
    </main>
  )
}
