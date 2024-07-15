'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

const routes = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Blog',
    route: '/blog',
  },
  {
    name: 'Palestras',
    route: '/services/palestras',
  },
  {
    name: 'Consultoria',
    route: '/services/consultoria',
  },
  {
    name: 'Treinamentos',
    route: '/services/treinamentos',
  },
  {
    name: 'Contatos',
    route: '/contacts',
  },
  {
    name: 'Sobre',
    route: '/about',
  },
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
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <nav>
            <ul className="flex w-full list-none flex-col gap-3">
              {routes.map(({ name, route }) => {
                return <RouteLink key={route} name={name} route={route} />
              })}
              <SheetClose asChild>
                <Link
                  href={'/about'}
                  className="w-full cursor-pointer bg-red-300 px-4 py-3 dark:text-white"
                >
                  Login
                </Link>
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
        className="w-full cursor-pointer rounded-sm bg-red-300 px-4 py-3 dark:text-white"
      >
        {name}
      </Link>
    </SheetClose>
  )
}
