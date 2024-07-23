/* eslint-disable prettier/prettier */
import Image from 'next/image'
import styles from './Page.module.css'

export default function Page() {
  return (
    <>
      <section className={`${styles.section} mt-20`}>
        <div className={styles.container}>
          <h2 className={styles.title}>DOMUS PETRA</h2>
          <div className={styles.content}>
            <Image
              src={'/img1.png'}
              alt="domus"
              width={380}
              height={306}
              className={styles.image}
            />
            <p className={styles.paragraph}>
              Nossa abordagem é de que o ser humano é comparado à uma casa
              literal, porém sempre em construção. De modo que precisa ser
              constantemente melhorado, reestruturado e restaurado. Com essa
              visão, entendemos que o ser humano necessita de sólidos
              fundamentos, bons pilares de sustentação, cobertura consciente e
              protetora e, sobretudo, deve ser funcional e eficiente.
              <br />
              <br />
              <Image
                src={'/img2.png'}
                alt="imagem mobile"
                width={380}
                height={306}
                className={styles.imageMobile} // Classe específica para a imagem mobile
              />
              O ser humano é incrivelmente inteligente, habilidoso, flexível e
              adaptável. E contrariando o ditado popular “pau que nasce torto
              morre torto”, nós afirmamos que o ser humano tem plena capacidade,
              e até o dever de melhorar continuamente.
              <br />
              <br />
              São as pessoas que promovem as mudanças. Podemos constituir
              empresas, organizações e sociedade cada vez melhores, contanto que
              os indivíduos sejam melhores. As pessoas são a grande força de
              transformação. O foco deve ser nas pessoas. Sempre!
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.backroundSection}`}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            PARA A EMPRESA: EFICIENCIA E CRESCIMENTO SUSTENTAVEL
          </h2>
          <div className={styles.content}>
            <Image
              src={'/img3.png'}
              alt="empresa"
              width={380}
              height={306}
              className={`${styles.image} ${styles.leftImage}`}
            />
            <p className={`${styles.paragraph} ${styles.rightParagraph}`}>
              A competitividade é global e não há espaços para baixa eficiência,
              desperdícios e perdas. Por isso a melhoria contínua dos processos
              produtivos e fluxos de trabalho devem ser uma constante. E o
              estabelecimento de processos eficientes com contínua evolução de
              desempenho são premissas fundamentais para o crescimento
              sustentável.
              <br /> <br />
              Por meio de metodologias robustas e técnicas modernas de gestão
              desenvolvemos as pessoas e os processos para o alcance dos
              melhores resultados, com ênfase na eficiência e crescimento
              sustentável.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>
            PARA O INDIVÍDUO: FELICIDADE E QUALIDADE DE VIDA
          </h2>
          <div className={styles.content}>
            <Image
              src={'/img4.png'}
              alt="Gratidão"
              width={380}
              height={306}
              className={styles.image}
            />
            <p className={styles.paragraph}>
              Acreditamos que a felicidade é possível no dia presente, e não um
              sonho a ser alcançado num futuro desconhecido. Pois felicidade não
              é o destino e sim a viagem! Felicidade é o dia a dia com
              satisfação e plenitude, o que se obtém pela conquista do
              equilíbrio adequado entre os pilares dessa casa chamada ser
              humano.
              <br />
              <br />
              Entendemos que a qualidade de vida e felicidade são conquistados
              por meio do equilíbrio de cinco pilares essenciais, os quais são
              saúde mental, física, espiritual, social e financeira.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
