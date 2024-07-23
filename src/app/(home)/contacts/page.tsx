import { lora } from '@/app/_ui/fonts'
import { Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FormEmail } from './_components/form'

export default function Page() {
  return (
    <main>
      <section className="mt-20 flex w-full flex-col items-center justify-center px-8 py-8 md:gap-8 lg:flex-row lg:px-32">
        <div className="flex flex-col gap-4 pb-4 text-[--text-primary] lg:w-2/4 lg:gap-4">
          <h2 className="text-3xl font-bold text-[--text-highlight]">
            Fale conosco
          </h2>
          <p className="w-full max-w-[700px] text-left text-xl font-medium">
            Se você tem alguma dúvida, sugestão ou quer saber mais sobre nós,
            entre em contato
          </p>
          <div>
            <Link
              href="tel:+55 (47) 997071177"
              className={`flex gap-5 text-lg font-bold${lora.className}`}
            >
              <Phone />
              +55 (47) 997071177
            </Link>
          </div>
          <address className={`text-left text-lg font-bold ${lora.className}`}>
            Rua Tangará, 470 Bairro Iririú Joinville - SC
          </address>
          <Link
            className={`w-[287px] text-left text-lg font-bold ${lora.className}`}
            href={'mailto:contato@domuspetra.com.br'}
          >
            contato@domuspetra.com.br
          </Link>
        </div>
        <Image
          src={'/outros/image-contact.webp'}
          alt="Imagem ilustrativa, de uma mão segurando um celular, se referindo ao contexto da pagina, como informações de contato"
          width={500}
          height={500}
          className="w-full max-w-[700px] lg:max-w-[500px]"
        />
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-8 bg-[--bg-highlight] px-8 py-8">
        <h2 className="min-w-[385px] text-center text-[28px] font-bold text-white">
          PRONTO PARA COMEÇAR?
        </h2>
        <p className="w-full font-medium text-white md:max-w-[400px]">
          Tem uma pergunta ou simplesmente quer saber mais sobre a Domus Petra?
          Envie-nos uma mensagem hoje!
        </p>
        <FormEmail />
      </section>
      <section className="flex w-full flex-col items-center justify-center gap-8 px-8 py-8">
        <h2 className="text-3xl font-bold text-[--text-highlight]">
          Localização
        </h2>
        <iframe
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.510832107383!2d-48.8281638!3d-26.277535000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1d9a1eef5ff%3A0xd33f3386506a2c5f!2sRua%20Tangar%C3%A1%2C%20470%20-%20Iriri%C3%BA%2C%20Joinville%20-%20SC%2C%2089227-100!5e0!3m2!1spt-BR!2sbr!4v1721228787904!5m2!1spt-BR!2sbr"
          scrolling="no"
          className="h-80 w-full md:max-w-[700px] lg:max-w-[1000px]"
        />
      </section>
    </main>
  )
}
