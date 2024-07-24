import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-end justify-center pt-10">
        <Image
          alt="homem de pele clara com cabelo curto e escuro, usando um terno cinza claro sobre uma camisa social azul clara. Ele está em pé, falando com um microfone de fone de ouvido preso à orelha e um controle remoto nas mãos. A expressão dele é séria e ele parece estar apresentando ou palestrando em um evento. O fundo é escuro, destacando a figura do homem."
          src={'/logo/logoHorizontalWhite.png'}
          width={800}
          height={800}
        />

        <h1 className={`h-28 text-center text-4xl text-white`}>
          <span className="font-black text-[#93B3DA]">Aprimore</span> seu
          negócio
        </h1>
      </div>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        className="absolute -z-10 h-screen w-full object-fill brightness-50"
        src={'/videos/video-banner02.webm'}
      ></video>
    </section>
  )
}
