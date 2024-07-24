'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const NavHeader = () => {
  const pathname = usePathname()
  return (
    <nav className="text hidden md:block">
      <ul className="flex w-full list-none gap-5">
        <Link
          href={'/'}
          className={`cursor-pointer px-4 py-2 font-semibold ${pathname == '/blog' ? 'text-black' : 'text-white'}`}
        >
          Home
        </Link>
        <Link
          href={'/contacts'}
          className={`cursor-pointer px-4 py-2 font-semibold ${pathname == '/blog' ? 'text-black' : 'text-white'}`}
        >
          Contato
        </Link>
        <Link
          href={'/services'}
          className={`cursor-pointer px-4 py-2 font-semibold ${pathname == '/blog' ? 'text-black' : 'text-white'}`}
        >
          Serviços
        </Link>
        <Link
          href={'/blog'}
          className={`cursor-pointer px-4 py-2 font-semibold ${pathname == '/blog' ? 'text-black' : 'text-white'}`}
        >
          Blog
        </Link>
        <Link
          href={'/about'}
          className={`cursor-pointer px-4 py-2 font-semibold ${pathname == '/blog' ? 'text-black' : 'text-white'}`}
        >
          Sobre
        </Link>
      </ul>
    </nav>
  )
}
