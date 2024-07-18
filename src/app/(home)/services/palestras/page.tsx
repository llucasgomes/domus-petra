/* eslint-disable prettier/prettier */

import Image from 'next/image'
import styles from './Page.module.css'

const cardContent = [
  {
    imgSrc: '/palestra1.png',
    alt: 'empresa',
    title: 'PARA A EMPRESA: EFICIENCIA E CRESCIMENTO SUSTENTAVEL',
    text: 'A competitividade é global e não há espaços para baixa eficiência, desperdícios e perdas. Por isso a melhoria contínua dos processos produtivos e fluxos de trabalho devem ser uma constante para o crescimento sustentável.',
  },
  {
    imgSrc: '/palestra2.png',
    alt: 'individuo',
    title: 'PARA O INDIVÍDUO: FELICIDADE E QUALIDADE DE VIDA',
    text: 'Acreditamos que a felicidade é possível no dia presente, e não um sonho a ser alcançado num futuro desconhecido. Pois felicidade não é o destino e sim a viagem de equilíbrio adequado entre os pilares dessa casa chamada ser humano!',
  },
  {
    imgSrc: '/palestra3.png',
    alt: 'time',
    title: 'PARA O TIME: COLABORAÇÃO E SINERGIA',
    text: 'Um time bem entrosado e colaborativo é capaz de alcançar resultados extraordinários. Fomentamos a sinergia e o trabalho em equipe para que todos possam crescer juntos.',
  },
  {
    imgSrc: '/palestra4.png',
    alt: 'lideranca',
    title: 'PARA A LIDERANÇA: VISÃO E INOVAÇÃO',
    text: 'A liderança deve ser visionária e inovadora, capaz de guiar a equipe rumo ao sucesso, sempre buscando novas soluções e oportunidades.',
  },
  {
    imgSrc: '/palestra5.png',
    alt: 'comunidade',
    title: 'PARA A COMUNIDADE: IMPACTO POSITIVO',
    text: 'Buscamos impactar positivamente a comunidade, promovendo ações que gerem benefícios sociais e ambientais duradouros.',
  },
  {
    imgSrc: '/palestra6.png',
    alt: 'parceiros',
    title: 'PARA OS PARCEIROS: CONFIANÇA E PARCERIA',
    text: 'Cultivamos relações de confiança e parceria com nossos colaboradores, criando um ambiente de trabalho harmonioso e produtivo.',
  },
]

export default function Page() {
  return (
    <section className={styles.section}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>PALESTRAS</h2>
        <p className={styles.subtitle}>
          Descubra os segredos do sucesso em nossa próxima palestra.
          <br />
          Venha aprender técnicas inovadoras e insights valiosos para alavancar
          sua carreira.
          <br />
          Não perca esta oportunidade única de crescimento e networking. Reserve
          seu lugar agora!
        </p>
      </div>

      <div className={styles.cardsSection}>
        <div className={styles.cardsContainer}>
          {cardContent.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${styles[`card${index + 1}`]}`}
            >
              <Image
                src={card.imgSrc}
                alt={card.title}
                width={300}
                height={200}
                className={styles.image}
              />
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
