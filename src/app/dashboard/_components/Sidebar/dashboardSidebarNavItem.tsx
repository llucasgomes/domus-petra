'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

type ItemProps = {
	title?: string
	path: string
	icon: ReactNode
}

export const DashboardSidebarNavItem = ({ icon, path, title }: ItemProps) => {
	const pathname = usePathname()
	const isActive = path === '/dashboard' ? pathname === '/dashboard' : pathname?.startsWith(path)

	return (
		<Link
			href={path}
			className={`flex items-center gap-3 px-3.5 py-2.5 my-1 rounded-xl text-sm font-medium transition-all duration-200 ${
				isActive
					? 'bg-white/15 text-white font-semibold shadow-sm border border-white/10'
					: 'text-slate-300 hover:text-white hover:bg-white/10'
			}`}
		>
			<span className={isActive ? 'text-[#93B3DA]' : 'text-slate-400'}>{icon}</span>
			<span>{title}</span>
		</Link>
	)
}
