'use client'

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
      className={`fixed top-0 z-10 flex h-24 w-full items-center justify-center transition-colors duration-300 ${pathname == '/' || pathname == '/services' || pathname == '/services/' ? (isScrolled ? 'bg-[--bg-header]' : 'bg-transparent') : 'bg-[--bg-header]'}`}
    >
      <div
        className={`custom-glass flex h-20 items-center justify-center rounded-full bg-[--bg-header] px-8`}
      >
        <NavHeader />
        <div className="md:hidden">
          <MenuMobile />
        </div>
      </div>
    </header>
  )
}
