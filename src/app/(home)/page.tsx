import Image from 'next/image'
import Link from 'next/link'
import { CarroselComments } from './_component/carrosel'

export default function Home() {
  return (
    <main className="">
      {/* SECTION HERO */}
      <section className="relative flex h-[calc(100vh-80px)] w-full">
        <div className="flex h-full w-full flex-col items-center justify-center px-8 pb-20">
          <h1 className="text-center text-4xl font-black text-white">
            Consultoria Empresarial e Treinamentos de{' '}
            <strong className="text-yellow-300">Alta Performace</strong>
          </h1>
          <Link
            href={'#'}
            target="_blank"
            download
            className="text-md mt-6 w-36 border-[1px] border-solid border-[#F8F9FA] py-2 text-center text-[#F8FAFC] hover:bg-[#F8F9FA] hover:text-[#373A3C]"
          >
            Clique aqui
          </Link>
        </div>
        <video
          autoPlay={true}
          muted={true}
          loop={true}
          className="absolute -z-10 h-[calc(100vh-80px)] w-full object-fill brightness-50"
          src={'/video-banner.webm'}
        ></video>
      </section>
      {/* SECTION SOBRE O FABIANO */}
      <section className="flex flex-col items-center gap-12 px-8 py-8">
        <div className="flex flex-col gap-3">
          <h2 className="text-base font-semibold uppercase">
            {"Fabiano Dell'Agnolo"}
          </h2>
          <Image
            alt="homem de pele clara com cabelo curto e escuro, usando um terno cinza claro sobre uma camisa social azul clara. Ele está em pé, falando com um microfone de fone de ouvido preso à orelha e um controle remoto nas mãos. A expressão dele é séria e ele parece estar apresentando ou palestrando em um evento. O fundo é escuro, destacando a figura do homem."
            src={'/profile-fabiano.png'}
            width={400}
            height={400}
            className="rounded-md"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <p className="text-left text-lg">
            Com mais de 20 anos de experiência na indústria, focado em
            metal-mecânica e automotivo, certificado em Seis Sigma e ISO, e
            especializado em Melhoria Contínua e <em>Lean Manufacturing</em>.{' '}
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
        <Link
          href={'#'}
          target="_blank"
          download
          className="w-[200px] border-[2px] border-solid border-[#232323] py-2 text-center text-lg font-bold text-[#232323] hover:bg-[#F8F9FA] hover:text-[#373A3C]"
        >
          Saber Mais
        </Link>
      </section>
      {/* SECTION SERVIÇOS */}
      <section className="flex w-full flex-col gap-6 bg-[#D9D9D9] px-8 py-8">
        <div className="flex w-full flex-col gap-5">
          <h2 className="text-left text-[22px] font-bold">
            Fortalecendo Organizações com Excelência em Consultoria e
            Treinamentos
          </h2>

          <p className="text-left text-lg">
            A <strong>Domus Petra</strong> é especialista em consultoria
            empresarial e treinamentos de alta performance. Nossa missão é
            ajudar empresas a alcançarem seus objetivos através de serviços
            personalizados e de qualidade.
          </p>

          <p className="text-left text-lg">Explore soluções para seu setor</p>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-6">
          <Link
            href={'#'}
            target="_blank"
            className="text-md flex w-[148px] flex-col items-center justify-center gap-2 rounded-lg border-[1px] border-solid border-[#6a747e] py-3 text-center text-[#6a747e] hover:border-[#373A3C] hover:bg-[#F8F9FA] hover:text-[#373A3C]"
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
          <Link
            href={'#'}
            target="_blank"
            className="text-md flex w-[148px] flex-col items-center justify-center gap-2 rounded-lg border-[1px] border-solid border-[#6a747e] py-3 text-center text-[#6a747e] hover:border-[#373A3C] hover:bg-[#F8F9FA] hover:text-[#373A3C]"
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
          <Link
            href={'#'}
            target="_blank"
            className="text-md flex w-[148px] flex-col items-center justify-center gap-2 rounded-lg border-[1px] border-solid border-[#6a747e] py-3 text-center text-[#6a747e] hover:border-[#373A3C] hover:bg-[#F8F9FA] hover:text-[#373A3C]"
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
        </div>
      </section>
      {/* SECTION CLIENTES */}
      <section className="flex w-full flex-col items-center justify-center gap-12 p-8">
        <div className="flex w-full flex-col gap-5">
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
          <h2 className="text-left text-[22px] font-bold">
            Conectando o Mundo: Escolha Domus Petra para o seu Sucesso
            Empresarial
          </h2>
        </div>
      </section>
      {/* SECTION DEPOIMENTOS */}
      <section className="flex w-full flex-col items-center justify-center gap-12 p-8">
        <div className="flex w-full flex-col gap-5">
          <h2 className="text-left text-[22px] font-bold">
            Depoimentos Reais de Sucesso Empresarial
          </h2>
          <div className="flex w-full max-w-6xl items-center justify-center py-5 sm:max-h-[500px] sm:py-3 lg:max-w-[600px]">
            <CarroselComments />
          </div>
        </div>
      </section>
      {/* SECTION NOVIDADES */}
      <section className="flex w-full flex-col items-center justify-center bg-blue-900 p-8">
        <div className="flex w-full flex-col gap-5">
          <h2 className="text-left text-[22px] font-bold text-white">
            Novidades na Domus
          </h2>

          <p className="text-left text-lg text-white">
            Receba novidades, conheça as melhores práticas e muito mais.
          </p>
          <p className="text-left text-lg text-white">Acesse nosso Blog...</p>
        </div>
        <div className="flex w-full max-w-6xl items-center justify-center py-5 sm:max-h-[500px] sm:py-3 lg:max-w-[600px]">
          <CarroselComments />
        </div>
      </section>
    </main>
  )
}
