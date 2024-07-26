import Image from 'next/image'

export const clientes = [
  '/clients/client-joinvalle.png',
  '/clients/client-thyssenkrupp.png',
  '/clients/client-sicoob.png',
  '/clients/client-agoraparck.png',
  '/clients/client-acelormittal.png',
  '/clients/client-santarita.png'
]
export const Clientes = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center p-8 md:px-16 lg:h-80 xl:h-96">
      <div className="flex w-full flex-col gap-5 lg:flex-row">
        <div className="flex w-full flex-wrap items-center justify-evenly gap-3 xl:justify-evenly">
          {clientes.map((cliente) => {
            return (
              <Image
                key={cliente}
                src={cliente}
                alt=""
                width={150}
                height={150}
                className=""
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
