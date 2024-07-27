/* eslint-disable prettier/prettier */
import { bebasNeue } from '@/app/_ui/fonts'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import styles from './Blog.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      {/* Nova seção */}
      <section className={styles.newSection}>
        <div className={styles.leftSection}>
          <Image
            src={'/blog/blog4.png'}
            alt="Imagem para seção"
            width={955}
            height={706}
            className={styles.leftImage}
          />
          <h1 className={`${bebasNeue.className} ${styles.blogText}`}>BLOG</h1>
        </div>
        <div className={styles.rightSection}>
          <h2 className={styles.subtitle}>Últimas Postagens</h2>
          <div className={styles.cards}>
            <Card className={styles.card}>
              Fortalecendo a Indústria Brasileira com experiência do Japão. ➜
            </Card>
            <Card className={styles.card}>Eficiência ou Eficácia?. ➜</Card>
            <Card className={styles.card}>Entrevista sobre Eficiência. ➜</Card>
          </div>
        </div>
      </section>
      <section className={styles.textImageSection}>
        <div className={styles.textContent}>
          <h2 className={styles.textHeading}>
            Fortalecendo a Indústria Brasileira <br />
            com experiência do Japão.
          </h2>
          <p className={styles.textParagraph}>
            O setor Industrial Automotivo, historicamente, é vanguarda no
            desenvolvimento tecnológico e em gestão de processos. As empresas
            japonesas em particular, têm demonstrado o ápice em eficiência,
            qualidade e controle de custos nesse setor. O governo Japonês, por
            meio da Agência Internacional de Cooperação (JICA), realiza vários
            programas para auxiliar os países em desenvolvimento a evoluir em
            tecnologia, cultura e métodos. Nesse ano tive a oportunidade de
            participar do programa de fortalecimento do setor de auto peças no
            Brasil, o qual foi formatado em parceria entre a JICA e o governo
            Brasileiro, e capitaneado pelo Sindipeças. Com um mês de imersão,
            experimentamos a cultura e modelo de vida Japonês, em todas as suas
            nuances. E a capacitação consistiu de treinamentos, palestras,
            debates, exercícios práticos e visitas em empresas do setor. Os
            temas de maior relevância foram: Kaizen, 5S, Monozukuri, Total
            Productive Maintenance, Total Quality Managment, Toyota Productive
            System, Técnicas de Consultoria, Desenvolvimento de Capital Humano,
            entre outros. Aparentemente nada de muito novo, pois essas
            metodologias e programas já são de nosso conhecimento. Mas há razões
            para funcionarem tão bem no Japão, e nem tanto no Brasil. E esse,
            certamente, foi um dos grandes aprendizados. Agora, o desafio é
            compartilhar o aprendizado nas empresas brasileiras, proporcionando
            a evolução em qualidade, entrega, eficiência e gestão de custos. E
            com isso atender o mercado global com mais competitividade. Em nosso
            canal compartilharemos uma série de vídeos, apresentando em tópicos
            os aprendizados e percepções dessa jornada. Inscreva-se aqui:
            https://youtu.be/Ae00HvsP73s Aprendizados & Percepções do Japão
          </p>
        </div>
        <Image
          src={'/blog/blog1.jpg'}
          alt="Imagem ilustrativa"
          width={804}
          height={500}
          className={styles.rightImage}
        />
      </section>
    </main>
  )
}
