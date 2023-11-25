import Image from 'next/image'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-5rem)] w-full flex-col items-center justify-center  gap-10">
      <h1 className="w-[80%] max-w-[400px]  text-center text-4xl font-bold text-white">
        Consultoria Empresarial e Treinamentos de{' '}
        <span className="text-yellow-400">Alta Performace</span>
      </h1>
      <Button
        variant={'outline'}
        className="max-w-[227px] border-2 border-solid border-red-50 bg-transparent px-10 py-5 font-bold text-white"
      >
        Clique Aqui
      </Button>
      <Image
        src={'/image/background.webp'}
        width={500}
        height={500}
        alt="bg"
        className="absolute z-[-1] h-full w-full"
      />
    </section>
  )
}
