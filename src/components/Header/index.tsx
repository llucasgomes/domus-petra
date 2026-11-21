'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { LogInMenuDesktop, LogOutMenuDesktop } from './auth'
import { MenuMobile } from './menuMobile'
import { NavHeader } from './nav'

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const pathname = usePathname()
	const { data } = useSession()

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 15)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	// Hide header on dashboard subpages
	if (pathname?.startsWith('/dashboard')) {
		return null
	}

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
				isScrolled
					? 'bg-[#131727]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3'
					: 'bg-[#131727]/80 backdrop-blur-sm border-b border-white/5 py-4'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
					<Image
						src="/logo/logoWhite.png"
						alt="Domus Petra - Consultoria e Treinamentos"
						width={180}
						height={48}
						className="h-9 sm:h-10 w-auto object-contain"
						priority
					/>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden lg:flex items-center">
					<NavHeader />
				</div>

				{/* Actions (CTA & Auth) */}
				<div className="hidden lg:flex items-center gap-3">
					<Link
						href="/contacts"
						className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#567CAB] hover:bg-[#3E5A7D] transition-all rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02]"
					>
						Fale Conosco
					</Link>

					{data?.user ? <LogOutMenuDesktop /> : <LogInMenuDesktop />}
				</div>

				{/* Mobile Menu */}
				<div className="lg:hidden flex items-center gap-2">
					<Link
						href="/contacts"
						className="text-xs font-semibold px-3 py-1.5 bg-[#567CAB] text-white rounded-md hover:bg-[#3E5A7D] transition-colors"
					>
						Contato
					</Link>
					<MenuMobile />
				</div>
			</div>
		</header>
	)
}
