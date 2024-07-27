'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type ItemProps = {
  title?: string
  path: string
  icon: ReactNode
}
export const DashboardSidebarNavItem = ({ icon, path, title }: ItemProps) => {
  const pathname = usePathname()
  return (
    <Link
      href={path}
      className={`mx-0 my-1 flex items-center gap-3 rounded-sm p-3 font-semibold text-[--text-secundary] hover:bg-[--bg-highlight] hover:text-white ${pathname === path && 'bg-[--bg-highlight] text-white'}`}
    >
      {icon}
      {title}
    </Link>
  )
}
