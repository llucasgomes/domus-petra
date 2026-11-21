'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
	{ name: 'Início', href: '/' },
	{ name: 'Sobre', href: '/about' },
	{ name: 'Serviços', href: '/services' },
	{ name: 'Blog', href: '/blog' },
	{ name: 'Contato', href: '/contacts' }
]

export const NavHeader = () => {
	const pathname = usePathname()
	useSession()

	return (
		<nav aria-label="Navegação Principal">
			<ul className="flex items-center gap-1 xl:gap-2">
				{navLinks.map(link => {
					const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href)

					return (
						<li key={link.href}>
							<Link
								href={link.href}
								className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 tracking-wide ${
									isActive
										? 'text-white bg-white/15 shadow-sm font-semibold'
										: 'text-slate-200 hover:text-white hover:bg-white/10'
								}`}
							>
								{link.name}
								{isActive && <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#93B3DA] rounded-full" />}
							</Link>
						</li>
					)
				})}

				<li>
					<Link
						href="/dashboard"
						className={`flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all tracking-wide border ${
							pathname?.startsWith('/dashboard')
								? 'text-white bg-[#567CAB] border-[#567CAB]'
								: 'text-[#93B3DA] border-[#567CAB]/40 bg-[#567CAB]/10 hover:bg-[#567CAB]/25 hover:text-white'
						}`}
					>
						<span>Painel</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
