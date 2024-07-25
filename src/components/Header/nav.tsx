'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const NavHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  //
  return (
    <nav className="text hidden md:block">
      <ul
        className={`flex w-full list-none gap-5 ${pathname == '/' ? (isScrolled ? 'text-black' : 'text-white') : 'text-black'}`}
      >
        <Link
          href={'/'}
          className={`cursor-pointer px-4 py-2 ${pathname == '/' && 'font-bold'}`}
        >
          Home
        </Link>
        <Link
          href={'/contacts'}
          className={`cursor-pointer px-4 py-2 ${pathname == '/contacts' && 'font-bold'}`}
        >
          Contato
        </Link>
        <Link
          href={'/services'}
          className={`cursor-pointer px-4 py-2 ${pathname == '/services' && 'font-bold'}`}
        >
          Serviços
        </Link>
        <Link
          href={'/blog'}
          className={`cursor-pointer px-4 py-2 ${pathname == '/blog' && 'font-bold'}`}
        >
          Blog
        </Link>
        <Link
          href={'/about'}
          className={`cursor-pointer px-4 py-2 ${pathname == '/about' && 'font-bold'}`}
        >
          Sobre
        </Link>
      </ul>
    </nav>
  )
}
