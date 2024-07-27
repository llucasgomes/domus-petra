/* eslint-disable prettier/prettier */
import { montserrat, poppis } from '@/app/_ui/fonts'
import Image from 'next/image'
import styles from './Section.module.css' // Importe o CSS

export const FabianoSobre = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textWrapper}>
        <div className={styles.headingWrapper}>
          <h2 className={`${poppis.className} ${styles.heading}`}>FABIANO</h2>
          <h2 className={`${poppis.className} ${styles.subHeading}`}>
            {`DELL'AGNOLO`}
          </h2>
        </div>
        <p className={`${montserrat.className} ${styles.paragraph}`}>
          Com mais de{' '}
          <span className="font-semibold">20 anos de experiência</span> na
          indústria, focado em metal-mecânica e automotivo, certificado em Seis
          Sigma e ISO, e especializado em
          <span className="font-semibold">Melhoria Contínua</span> e{' '}
          <span className="font-semibold">Lean Manufacturing</span>.
          <br />
          Atua como consultor em gestão empresarial, promovendo{' '}
          <span className="font-semibold">eficiência</span> e{' '}
          <span className="font-semibold">implementação de metodologias</span>.
          Diretor executivo na Secretaria de Planejamento Urbano de Joinville,
          liderando projetos de desenvolvimento sustentável e tecnológico.
          <br />
          Engajado em iniciativas de{' '}
          <span className="font-semibold">empreendedorismo e inovação</span>,
          como presidente do COMCITI e colunista no portal NSC Tech.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          alt="homem de pele clara com cabelo curto e escuro, usando um terno cinza claro sobre uma camisa social azul clara. Ele está em pé, falando com um microfone de fone de ouvido preso à orelha e um controle remoto nas mãos. A expressão dele é séria e ele parece estar apresentando ou palestrando em um evento. O fundo é escuro, destacando a figura do homem."
          src={'/outros/profile-fabiano02.png'}
          width={750}
          height={1134}
          className={styles.image}
        />
      </div>
    </section>
  )
}
