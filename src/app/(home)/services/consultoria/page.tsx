/* eslint-disable prettier/prettier */

import Image from 'next/image'
import styles from './Page.module.css'

const cardContent = [
  {
    imgSrc: '/consultoria1.png',
    alt: 'servicos',
    title: 'TRANSFORME SEU NEGÓCIO COM NOSSOS SERVIÇOS',
    text: 'Nossa consultoria oferece soluções personalizadas para cada desafio, garantindo resultados concretos e duradouro. Nossa empresa leva seu negócio a novos patamares',
  },
  {
    imgSrc: '/consultoria2.png',
    alt: 'estrategia-sucesso',
    title: 'ESTRATÉGIAS INOVADORAS PARA O SUCESSO',
    text: 'Investir em programas de desenvolvimento de liderança cultiva futuros líderes dentro da sua organização, motivando equipes, a melhorar na comunicação e promove um ambiente de trabalho positivo.',
  },
  {
    imgSrc: '/consultoria3.png',
    alt: 'solucoes',
    title: 'SOLUÇÕES PERSONALIZADAS PARA SEUS DESAFIOS',
    text: 'Cada empresa é única, e nossas soluções também são. Trabalhamos de perto com você para entender suas necessidades e criar soluções sob medida que impulsionam o crescimento e a eficiência.',
  },
  {
    imgSrc: '/consultoria4.png',
    alt: 'otimizacao',
    title: 'OTIMIZE SEUS RECURSOS COM NOSSOS EXPERTOS',
    text: 'Maximize o potencial dos seus recursos com a orientação dos nossos especialistas que oferece insights valiosos para aprimorar o uso de recursos e sua empresa alcançar melhores resultados.',
  },
  {
    imgSrc: '/consultoria5.png',
    alt: 'inovacao',
    title: 'INOVAÇÃO E CRESCIMENTO A LONGO PRAZO',
    text: 'Invista em inovação, pois nossa equipe está comprometida em fornecer soluções que não apenas resolvem problemas imediatos, mas também promovem um crescimento consistente a longo prazo..',
  },
  {
    imgSrc: '/consultoria6.png',
    alt: 'expertise-resultados',
    title: 'EXPERTISE E RESULTADOS QUE FAZEM A DIFERENÇA',
    text: 'Confie em nossa experiência com consultores de alto nível que oferecem conhecimento aprofundado e soluções eficazes que geram resultados tangíveis.',
  },
]

export default function Page() {
  return (
    <section className={styles.section}>
      <div className={styles.titleSection}>
        <h2 className={styles.title}>CONSULTORIA</h2>
        <p className={styles.subtitle}>
          Potencialize seu negócio com nossas{' '}
          <span>estratégias personalizadas</span> e{' '}
          <span>expertise de mercado</span>!
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
