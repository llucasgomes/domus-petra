import Image from 'next/image'

// interface ConsultoriaItem {
//   id: string
//   category: string
//   image: string
//   title: string
//   subtitle: string
//   content: string
// }

export default function Page() {
  return (
    <main className="mt-20">
      <section className="relative flex w-full flex-col items-center justify-center py-8 md:gap-8 lg:flex-row lg:px-32">
        <div className="flex h-56 flex-col items-center justify-center">
          <Image
            src={'/services/service01.png'}
            alt="capa de fundo da imagem"
            width={700}
            height={700}
            className="absolute -z-10 h-full w-full object-cover object-center brightness-50"
          />
          <h1 className="text-center text-3xl font-bold uppercase text-white">
            titulo do produto titulo do pr
          </h1>
        </div>
      </section>
      <section className="p-8 text-base lg:p-16">
        <p className="text-lg">
          {`O Treinamento Lean Leadership - Desenvolvimento de Liderança, trabalha
          com profundidade os temas essenciais para a consolidação de uma
          liderança eficaz e eficiente nas organizações. “Não se gerencia
          pessoas. A tarefa é liderar pessoas. A meta é tornar produtivos as
          forças e o conhecimento específico de cada pessoa.” Peter Drucker O
          líder ideal não é aquele que possui um perfil "perfeito", mas sim, o
          perfil adequado para cada contexto. Além disso, existem algumas
          características que transcedem o perfil, sendo essas primordiais e
          obrigatórias para a legitimização, consolidação e exercício da
          liderança eficiente e eficaz. O treinamento Lean Leadership visa o
          desenvolvimento e capacitação de líderes eficientes com foco em
          pessoas e resultados. Alguns dos tópicos abordados: Características
          humanas e a relação com a liderança; Conceitos modernos de liderança;
          Aplicação dos conceitos de eficiência e eficácia na liderança;
          Liderança e inovação; A arte de delegar; Comunicação e feedback:
          técnicas de alinhamento na gestão; Gestão matricial e trabalho em
          equipe. Ferramentas administrativas e de gestão. Carga horária: 16
          horas`}
        </p>
        <p className="mt-6 text-lg">
          Entre em contato pelo telefone (47) 997071177 ou pelo email
          contato@domuspetra.com.br
        </p>
      </section>
    </main>
  )
}
