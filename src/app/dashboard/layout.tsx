'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Navbar from './_components/Navbar/navbar'
import { C_SideBar } from './_components/Sidebar'
import { routesLink } from './_components/Sidebar/routesLink'
import { DashLogOut } from './_components/auth'

export default function Layout({ children }: { children: React.ReactNode }) {
  const session = useSession()

  if (!session.data) {
    redirect('/')
  }
  const navLinks = routesLink.filter((route) => route.hole.includes('admin'))

  console.log(session.status)

  return (
    <main>
      {/* Sidebar (Menu Lateral) */}
      <section className="fixed min-h-full w-64 bg-gradient-to-b from-[#3C5778] from-0% to-[#567CAB] to-100% p-5 shadow-lg">
        <C_SideBar.container>
          <C_SideBar.user
            userHole={'admin'}
            userName={session.data?.user?.name}
            userImage={session.data?.user?.image}
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
            <DashLogOut />
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
