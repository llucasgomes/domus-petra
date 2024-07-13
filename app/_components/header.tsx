import Image from 'next/image'
import Link from 'next/link'
import { ButtonMenu, ButtonServices } from './header/ButtonMenu'

export const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between bg-black px-6">
      <Image
        src={'/logoHorizontalWhite.png'}
        alt="Logo Domus Petra"
        width={170}
        height={50}
      />
      <nav className="hidden md:block">
        <ul className="flex w-full list-none gap-5">
          <Link href={'/'} className="cursor-pointer px-4 py-2 text-white">
            Home
          </Link>
          <Link
            href={'/contact'}
            className="cursor-pointer px-4 py-2 text-white"
          >
            Contato
          </Link>
          <ButtonServices />
          <Link href={'/sobre'} className="cursor-pointer px-4 py-2 text-white">
            Sobre
          </Link>
        </ul>
      </nav>
      <div className="md:hidden">
        <ButtonMenu />
      </div>
    </header>
  )
}
