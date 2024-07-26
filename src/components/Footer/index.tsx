'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
// Importando o CSS
import { usePathname } from 'next/navigation'
import styles from './Footer.module.css'

export const redes_sociais = [
  {
    rede_social: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/fabianodellagnolo/'
  },
  {
    rede_social: 'Facebook',
    icon: <FaFacebook />,
    link: 'https://m.facebook.com/fabiano.dellagnolo/'
  },
  {
    rede_social: 'email',
    icon: <FaEnvelope />,
    link: 'mailto:contato@domuspetra.com.br'
  },
  {
    rede_social: 'Youtube',
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/FabianoDellAgnoloDomusPetra'
  }
]

export const Footer = () => {
  const pathname = usePathname()
  return (
    <footer className={`${styles.footer} ${pathname != '/' && 'bg-[#577DAC]'}`}>
      <div className={styles.footerContainer}>
        <div className={`${styles.footerLeft}`}>
          <Image
            src={
              pathname != '/'
                ? '/logo/logoWhite.png'
                : '/logo/logoDomus-Footer.png'
            }
            alt="Logo Domus Petra"
            width={450}
            height={95}
          />
        </div>
        <div
          className={`${styles.footerRight} ${pathname != '/' && 'text-white'}`}
        >
          <p className={styles.footerText}>contato@domuspetra.com.br</p>
          <p className={styles.footerText}>47 9 9707 1177</p>
          <p className={styles.footerText}>Rua Tangará, 470 | Joinville</p>
          <div className={styles.footerSocials}>
            {redes_sociais.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                target="_blank"
                className={`text-4xl text-primary ${pathname == '/' ? 'hover:text-[#567CAB]' : 'text-white'} `}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p className={`${styles.footerCopyright} text-sm`}>
        © 2024{' '}
        <span className="text-[--bg-tertiary]">Fabiano Dell Agnelo</span>. Todos
        os direitos reservados.
      </p>
    </footer>
  )
}
