import { FacebookIcon } from 'lucide-react'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import styles from './Footer.module.css'

export const redes_sociais = [
  {
    rede_social: 'Linkedin',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/fabianodellagnolo/',
  },
  {
    rede_social: 'Youtube',
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/FabianoDellAgnoloDomusPetra',
  },
  {
    rede_social: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/fabianodellagnolo/',
  },
  {
    rede_social: 'whatszap',
    icon: <FacebookIcon />,
    link: 'https://api.whatsapp.com/send/?phone=47997071177',
  },
]

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 bg-[--bg-highlight] p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex w-full items-center justify-center gap-5">
          {redes_sociais.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              target="_blank"
              className={styles.socialLink}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <p className="flex items-center justify-center">
        © 2024{' '}
        <span className="text-[--bg-tertiary]">Fabiano Dell Agnelo</span>. Todos
        os direitos reservados.
      </p>
    </footer>
  )
}
