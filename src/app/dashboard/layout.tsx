'use client'

import { useSession } from 'next-auth/react'

import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import Navbar from './_components/Navbar/navbar'
import { C_SideBar } from './_components/Sidebar'
import { routesLink } from './_components/Sidebar/routesLink'

type ProtectedRoutesLayoutProps = {
  children: ReactNode
}

function ProtectedRoutesLayout({ children }: ProtectedRoutesLayoutProps) {
  const { data } = useSession()

  !data && redirect('/')
  const rafael = 'rafarz76dev@gmail.com'
  const lucas = 'lucas.gomes.manaus@gmail.com'
  const amanda = 'amanda.spitzner@gmail.com'
  if (
    data?.user?.email != rafael &&
    data?.user?.email != lucas &&
    data?.user?.email != amanda
  ) {
    redirect('/')
  }

  const { user } = data

  //Ira Filtrar no array de 'routLink', comforme sua 'Hole'
  const navLinks = routesLink.filter((route) => route.hole.includes('admin'))

  return (
    <main className="flex">
      {/* Sidebar (Menu Lateral) */}
      <section className="fixed min-h-full w-64 bg-[#577DAC] p-5 shadow-lg">
        <C_SideBar.container>
          <C_SideBar.user
            userHole={'admin'}
            userName={user?.name}
            userImage={user?.image}
          />
          <C_SideBar.nav>
            {navLinks.map((item) => (
              <C_SideBar.navItem
                key={item.path}
                icon={item.icon}
                title={item.title}
                path={item.path}
              />
            ))}
          </C_SideBar.nav>
        </C_SideBar.container>
      </section>
      <section className="flex-4 ml-64 p-5">
        <Navbar />
        <section>{children}</section>
      </section>
    </main>
  )
}

export default ProtectedRoutesLayout
