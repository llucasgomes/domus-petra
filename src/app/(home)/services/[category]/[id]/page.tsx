import { consultoria, palestras, treinamentos } from '@/lib/data'
import Image from 'next/image'

type paramsProps = {
  params: {
    category: string
    id: string
  }
}
type ServiceType = {
  id: string
  category: string
  image: string
  title: string
  subtitle: string
  content: string
}

export default function Page({ params }: paramsProps) {
  const { category, id } = params

  let service: ServiceType | undefined

  if (category === 'palestras') {
    service = palestras.find((item) => item.id === id)
  } else if (category === 'consultoria') {
    service = consultoria.find((item) => item.id === id)
  } else if (category === 'treinamentos') {
    service = treinamentos.find((item) => item.id === id)
  }

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <main className="">
      <section className="relative flex w-screen flex-col items-center justify-center py-8 md:gap-8 lg:flex-row lg:px-32">
        <div className="flex h-56 flex-col items-center justify-center">
          <Image
            src={service.image}
            alt="capa de fundo da imagem"
            width={700}
            height={700}
            className="absolute -z-10 h-full w-full object-cover object-center brightness-50"
          />
          <h1 className="text-center text-3xl font-bold uppercase text-white">
            {service.title}
          </h1>
        </div>
      </section>
      <section className="p-8 text-base lg:p-16">
        <p className="text-lg">{service.content}</p>
        <p className="mt-6 text-lg">
          Entre em contato pelo telefone (47) 997071177 ou pelo email
          contato@domuspetra.com.br
        </p>
      </section>
    </main>
  )
}
