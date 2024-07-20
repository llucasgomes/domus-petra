/* eslint-disable prettier/prettier */

import Image from 'next/image'
import styles from './Page.module.css'

const cardContent = [
  {
    imgSrc: '/treinamento.png',
    alt: 'treinamento',
    title: 'INVISTA EM TREINAMENTO CONTÍNUO',
    text: 'O treinamento contínuo é vital para manter sua equipe atualizada com as últimas tendências e tecnologias. Melhorando as habilidades dos funcionários, preparando-os para novos desafios!',
  },
  {
    imgSrc: '/treinamento2.png',
    alt: 'liderança',
    title: 'DESENVOLVA LÍDERES EFICAZES',
    text: 'Investir em programas de desenvolvimento de liderança cultiva futuros líderes dentro da sua organização, motivando equipes, a melhorar na comunicação e promove um ambiente de trabalho positivo.',
  },
  {
    imgSrc: '/treinamento3.png',
    alt: 'producao',
    title: 'AUMENTE A PRODUTIVIDADE COM TREINAMENTOS ESPECÍFICOS',
    text: 'Treinamentos específicos, como a Realidade Virtual(VR) focando necessidades a sua empresa, aumentando significativamente a produtividade.',
  },
  {
    imgSrc: '/treinamento4.png',
    alt: 'satisfacao',
    title: 'MELHORE A SATISFAÇÃO DOS FUNCIONÁRIOS',
    text: 'A liderança deve ser visionária e inovadora, capaz de guiar a equipe rumo ao sucesso, sempre buscando novas soluções e oportunidades.',
  },
  {
    imgSrc: '/treinamento5.png',
    alt: 'cultura',
    title: 'PROMOVA UMA CULTURA DE APRENDIZADO CONTÍNUO',
    text: 'Estabelecer uma cultura onde o aprendizado contínuo é incentivado e recompensado pode transformar sua organização. Contribuindo para a inovação e crescimento organizacional a longo prazo.',
  },
  {
    imgSrc: '/treinamento6.png',
    alt: 'conformidade',
    title: 'GARANTA A CONFORMIDADE E REDUZA RISCOS',
    text: 'Treinamentos de conformidade são cruciais para garantir que todos os funcionários entendam as normas e regulamentos da indústria, dentro da conformidade com as leis.',
  },
]

export default function Page() {
  return (
    <section className={styles.section}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>TREINAMENTOS</h2>
        <p className={styles.subtitle}>
          Treinamento é essencial para desenvolver <span>habilidades</span>,
          melhorar o <span>desempenho</span> e aumentar a{' '}
          <span>produtividade</span>.
          <br />
          Invista em capacitação contínua para alcançar objetivos e superar
          desafios.
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
