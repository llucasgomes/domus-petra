'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Navbar from './_components/Navbar/navbar'
import { C_SideBar } from './_components/Sidebar'
import { routesLink } from './_components/Sidebar/routesLink'
import { DashLogOut } from './_components/auth'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data } = useSession()

  !data && redirect('/')
  const rafael = 'rafarz76dev@gmail.com'
  const lucas = 'lucas.gomes.manaus@gmail.com'
  const amanda = 'amanda.spitzner@gmail.com'
  const mauricio = 'canto.mauricio@gmail.com'

  if (
    data?.user?.email != rafael &&
    data?.user?.email != lucas &&
    data?.user?.email != mauricio &&
    data?.user?.email != amanda
  ) {
    redirect('/')
  }
  const navLinks = routesLink.filter((route) => route.hole.includes('admin'))

  return (
    <main>
      {/* Sidebar (Menu Lateral) */}
      <section className="fixed min-h-full w-64 bg-gradient-to-b from-[#3C5778] from-0% to-[#567CAB] to-100% p-5 shadow-lg">
        <C_SideBar.container>
          <C_SideBar.user
            userHole={'admin'}
            userName={data?.user?.name}
            userImage={data?.user?.image}
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
