/* eslint-disable prettier/prettier */
import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Image
          src={'/logoOpenGraph.png'}
          alt="Logo"
          width={640}
          height={128}
          className={styles.logo}
          // eslint-disable-next-line prettier/prettier
        />
        <div className={styles.socialMedia}>
          <a
            href="https://www.linkedin.com/in/fabianodellagnolo/"
            target="_blank"
            title="Linkedin"
            rel="noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/FabianoDellAgnoloDomusPetra
"
            target="_blank"
            title="YouTube"
            rel="noreferrer"
            className={styles.socialLink}
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/fabianodellagnolo/"
            target="_blank"
            title="Instagram"
            rel="noreferrer"
            className={styles.socialLink}
          >
            <FaInstagram />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=47997071177"
            target="_blank"
            rel="external noreferrer"
            title="Whatsapp"
            className={styles.socialLink}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <p className={styles.copyright}>
        © 2024 <span>Fabiano Dell Agnelo</span>. Todos os direitos reservados.
      </p>
    </footer>
  )
}
