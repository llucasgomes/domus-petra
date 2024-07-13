'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu'

export const ButtonServices = () => {
  return (
    <NavigationMenu className="font-normal">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-base text-white hover:bg-transparent hover:text-white focus:bg-transparent data-[state=open]:bg-transparent data-[active]:text-white data-[state=open]:text-white">
            Serviços
          </NavigationMenuTrigger>
          <NavigationMenuContent className="grid w-[150px] gap-3 bg-black p-3 md:w-[150px] md:grid-cols-1 lg:w-[150px]">
            <Link
              href={'/servicos/consultorias'}
              className="block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none text-white no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="text-sm font-medium leading-none">
                Consultoria
              </div>
            </Link>
            <Link
              href={'/servicos/palestras'}
              className="block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none text-white no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="text-sm font-medium leading-none">Palestras</div>
            </Link>
            <Link
              href={'/servicos/treinamentos'}
              className="block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none text-white no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
              <div className="text-sm font-medium leading-none">
                Treinamentos
              </div>
            </Link>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
