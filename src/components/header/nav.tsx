import Link from 'next/link'
import { MenuService } from './menuService'

export const NavHeader = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex w-full list-none gap-5">
        <Link href={'/'} className="cursor-pointer px-4 py-2 text-white">
          Home
        </Link>
        <Link
          href={'/contacts'}
          className="cursor-pointer px-4 py-2 text-white"
        >
          Contato
        </Link>
        <MenuService />
        <Link href={'/about'} className="cursor-pointer px-4 py-2 text-white">
          Sobre
        </Link>
      </ul>
    </nav>
  )
}
