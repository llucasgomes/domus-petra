import { consultoria, palestras, treinamentos } from '@/lib/data'
import Image from 'next/image'

// interface ConsultoriaItem {
//   id: string
//   category: string
//   image: string
//   title: string
//   subtitle: string
//   content: string
// }

export default function Page({ params }) {
  const { category, id } = params

  let service

  if (category === 'palestras') {
    service = palestras.filter((item) => item.id === id)
  }
  if (category === 'consultoria') {
    service = consultoria.filter((item) => item.id === id)
  }
  if (category === 'treinamentos') {
    service = treinamentos.filter((item) => item.id === id)
  }

  return (
    <main className="">
      <section className="relative flex w-screen flex-col items-center justify-center py-8 md:gap-8 lg:flex-row lg:px-32">
        <div className="flex h-56 flex-col items-center justify-center">
          <Image
            src={service[0].image}
            alt="capa de fundo da imagem"
            width={700}
            height={700}
            className="absolute -z-10 h-full w-full object-cover object-center brightness-50"
          />
          <h1 className="text-center text-3xl font-bold uppercase text-white">
            {service[0].title}
          </h1>
        </div>
      </section>
      <section className="p-8 text-base lg:p-16">
        <p className="text-lg">{service[0].content}</p>
        <p className="mt-6 text-lg">
          Entre em contato pelo telefone (47) 997071177 ou pelo email
          contato@domuspetra.com.br
        </p>
      </section>
    </main>
  )
}
