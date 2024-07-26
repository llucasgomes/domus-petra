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
      className={`fixed top-0 z-10 flex w-full items-center justify-center transition-colors duration-300 md:h-24 ${pathname == '/' && isScrolled ? 'bg-transparent' : 'bg-transparent'}`}
    >
      <div
        className={`custom-glass flex h-20 w-full items-center justify-between bg-[--bg-header] px-8 md:w-auto md:justify-center md:rounded-full`}
      >
        <Image
          src={
            pathname == '/'
              ? isScrolled
                ? '/logo/logoDomus-Footer.png'
                : '/logo/logoWhite.png'
              : '/logo/logoDomus-Footer.png'
          }
          alt="Logo Domus Petra"
          width={150}
          height={150}
          className="md:hidden"
        />
        <NavHeader />
        <div className="md:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}
