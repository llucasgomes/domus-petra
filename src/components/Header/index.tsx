'use client'

import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { MenuMobile } from './menuMobile'
import { NavHeader } from './nav'

export const Header = () => {
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

  return (
    <header
      className={`fixed top-0 z-10 flex h-20 w-full items-center justify-between gap-6 px-8 transition-colors duration-300 ${pathname == '/' || pathname == '/services' || pathname == '/services' ? (isScrolled ? 'bg-[--bg-highlight]' : 'bg-transparent') : 'bg-[--bg-highlight]'}`}
    >
      <Image
        src={'/logo/logoHorizontalWhite.png'}
        alt="Logo Domus Petra"
        width={170}
        height={50}
        className="h-[50px] w-[175px]"
      />
      <NavHeader />
      <div className="md:hidden">
        <MenuMobile />
      </div>
    </header>
  )
}
