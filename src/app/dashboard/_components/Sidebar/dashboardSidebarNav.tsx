import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type DashboardSidebarNavProps = {
  children: ReactNode
  className?: string
}
export const DashboardSidebarNav = ({
  children,
  className
}: DashboardSidebarNavProps) => {
  return (
    <nav
      className={cn([
        'scrollbar-color mt-4 list-none overflow-auto text-sm',
        className
      ])}
      style={{ maxHeight: 'calc(100vh - 150px)' }}
    >
      {children}
    </nav>
  )
}
