import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

type DashboardSidebarProps = {
	children: ReactNode
	className?: string
}
export const DashboardSidebar = ({ children, className }: DashboardSidebarProps) => {
	return <aside className={cn(['flex flex-col justify-between', className])}>{children}</aside>
}
