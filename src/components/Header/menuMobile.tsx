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
import { Separator } from '../ui/separator'
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
      <SheetContent className="flex flex-col justify-center border-[#1D1F31] bg-gradient-to-b from-[#567CAB] from-0% to-[#2A4C75] to-100%">
        <SheetHeader>
          <Perfil />
        </SheetHeader>
        <SheetFooter>
          <nav>
            <ul className="flex w-full list-none flex-col items-center gap-3">
              {routes.map(({ name, route }) => {
                return <RouteLink key={route} name={name} route={route} />
              })}
              {data?.user?.email === 'lucas.gomes.manaus@gmail.com' && (
                <>
                  <SheetClose asChild>
                    <Link
                      href={'/dashboard'}
                      className="w-full cursor-pointer rounded-sm bg-transparent px-4 py-3 text-center text-white"
                    >
                      Dasboard
                    </Link>
                  </SheetClose>
                  <Separator
                    orientation="vertical"
                    className="h-[1px] w-[200px]"
                  />
                </>
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
    <>
      <SheetClose asChild>
        <Link
          href={route}
          className="w-full cursor-pointer rounded-sm bg-transparent px-2 py-2 text-center text-white"
        >
          {name}
        </Link>
      </SheetClose>
      <Separator orientation="vertical" className="h-[1px] w-[200px]" />
    </>
  )
}
