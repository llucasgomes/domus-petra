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

import { LogIn } from './auth'
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
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu
          className="border-none focus:outline-none data-[state=open]:bg-transparent"
          size={36}
          color="#ffffff"
        />
      </SheetTrigger>
      <SheetContent className="bg-[--bg-highlight]">
        <SheetHeader>
          <Perfil />
        </SheetHeader>
        <SheetFooter>
          <nav>
            <ul className="flex w-full list-none flex-col gap-3">
              {routes.map(({ name, route }) => {
                return <RouteLink key={route} name={name} route={route} />
              })}
              <SheetClose asChild>
                <LogIn />
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
