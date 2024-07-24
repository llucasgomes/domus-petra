import Image from 'next/image'

export const Clientes = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center p-8 md:px-16">
      <div className="flex w-full flex-col gap-5 lg:flex-row">
        <h2 className="text-left text-[22px] font-bold text-[--text-highlight] md:text-2xl lg:w-1/2 lg:text-3xl">
          Conectando o Mundo: Escolha Domus Petra para o seu Sucesso Empresarial
        </h2>
        <div className="flex w-full flex-wrap items-center justify-center gap-3">
          <Image
            src={'/clients/client-joinvalle.png'}
            alt=""
            width={100}
            height={100}
            className=""
          />

          <Image
            src={'/clients/client-thyssenkrupp.png'}
            alt=""
            width={100}
            height={100}
            className=""
          />
          <Image
            src={'/clients/client-sicoob.png'}
            alt=""
            width={100}
            height={100}
            className=""
          />
          <Image
            src={'/clients/client-santarita.png'}
            alt=""
            width={100}
            height={100}
            className=""
          />
          <Image
            src={'/clients/client-agoraparck.png'}
            alt=""
            width={100}
            height={100}
            className=""
          />
          <Image
            src={'/clients/client-acelormittal.png'}
            alt=""
            width={100}
            height={100}
            className=""
          />
        </div>
      </div>
    </section>
  )
}
