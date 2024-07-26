'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogInMenuDesktop, LogOutMenuDesktop } from './auth'

export const NavHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { data } = useSession()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const rafael = 'rafarz76dev@gmail.com'
  const lucas = 'lucas.gomes.manaus@gmail.com'
  const amanda = 'amanda.spitzner@gmail.com'

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
        {data?.user?.email != rafael &&
          data?.user?.email != lucas &&
          data?.user?.email != amanda && (
            <Link
              href={'/dashboard'}
              className={`cursor-pointer px-4 py-2 ${pathname == '/about' && 'font-bold'}`}
            >
              Dasboard
            </Link>
          )}
        {data?.user ? <LogOutMenuDesktop /> : <LogInMenuDesktop />}
      </ul>
    </nav>
  )
}
