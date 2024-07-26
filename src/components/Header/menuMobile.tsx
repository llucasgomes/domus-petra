'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger
} from '../ui/sheet'

import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogIn, LogOut } from './auth'
import { Perfil } from './perfiMobile'

const routes = [
  {
    name: 'Home',
    route: '/'
  },
  {
    name: 'Blog',
    route: '/blog'
  },
  {
    name: 'Serviços',
    route: '/services'
  },
  {
    name: 'Contatos',
    route: '/contacts'
  },
  {
    name: 'Sobre',
    route: '/about'
  }
]

export const MenuMobile = () => {
  const { data } = useSession()
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
    <Sheet>
      <SheetTrigger asChild>
        <Menu
          className="border-none focus:outline-none data-[state=open]:bg-transparent"
          size={36}
          color={
            pathname == '/' ? (isScrolled ? '#1D1F31' : '#ffffff') : '#1D1F31'
          }
        />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center border-[#1D1F31] bg-gradient-to-b from-[#131727] from-0% via-[#2B355A] via-50% to-[#131727] to-100%">
        <SheetHeader>
          <Perfil />
        </SheetHeader>
        <SheetFooter>
          <nav>
            <ul className="flex w-full list-none flex-col gap-3">
              {routes.map(({ name, route }) => {
                return <RouteLink key={route} name={name} route={route} />
              })}
              {data?.user?.email === 'lucas.gomes.manaus@gmail.com' && (
                <SheetClose asChild>
                  <Link
                    href={'/dashboard'}
                    className="w-full cursor-pointer rounded-sm bg-[--bg-secundary] px-4 py-3"
                  >
                    Dasboard
                  </Link>
                </SheetClose>
              )}
              <SheetClose asChild>
                {data?.user ? <LogOut /> : <LogIn />}
              </SheetClose>
            </ul>
          </nav>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

type RouteLinkProps = {
  name: string
  route: string
}
const RouteLink = ({ name, route }: RouteLinkProps) => {
  return (
    <SheetClose asChild>
      <Link
        href={route}
        className="w-full cursor-pointer rounded-sm bg-[--bg-secundary] px-4 py-3"
      >
        {name}
      </Link>
    </SheetClose>
  )
}
