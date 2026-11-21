'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './_components/Navbar/navbar'
import { C_SideBar } from './_components/Sidebar'
import { routesLink } from './_components/Sidebar/routesLink'
import { DashLogOut } from './_components/auth'

export default function Layout({ children }: { children: React.ReactNode }) {
	const { data } = useSession()

	// Autenticação temporariamente contornada/desativada para desenvolvimento e melhorias do painel
	/*
	const rafael = 'rafarz76dev@gmail.com'
	const lucas = 'lucas.gomes.manaus@gmail.com'
	const amanda = 'amanda.spitzner@gmail.com'
	const mauricio = 'canto.mauricio@gmail.com'

	if (
		!data ||
		(data?.user?.email !== rafael &&
			data?.user?.email !== lucas &&
			data?.user?.email !== mauricio &&
			data?.user?.email !== amanda)
	) {
		redirect('/')
	}
	*/

	const navLinks = routesLink.filter(route => route.hole.includes('admin'))

	return (
		<div className="min-h-screen flex bg-slate-950 text-slate-100">
			{/* Sidebar (Menu Lateral Executivo) */}
			<aside className="fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-[#131727] via-[#1B233D] to-[#131727] p-5 border-r border-white/10 shadow-2xl flex flex-col justify-between z-30">
				<div>
					{/* Logo Domus Petra */}
					<Link href="/dashboard" className="flex items-center gap-3 pb-6 mb-4 border-b border-white/10 group">
						<div className="relative h-10 w-10 flex-shrink-0 rounded-xl bg-white/10 p-1.5 ring-1 ring-white/20 transition-transform group-hover:scale-105">
							<Image src="/icon.png" alt="Domus Petra Logo" fill className="object-contain p-1" />
						</div>
						<div className="flex flex-col">
							<span className="font-heading font-bold text-white text-base tracking-wider">DOMUS PETRA</span>
							<span className="text-[10px] uppercase font-semibold text-[#93B3DA] tracking-widest">
								Painel Administrativo
							</span>
						</div>
					</Link>

					{/* Perfil do Administrador */}
					<C_SideBar.user
						userHole="admin"
						userName={data?.user?.name || 'Administrador (Dev)'}
						userImage={data?.user?.image}
					/>

					{/* Navegação */}
					<C_SideBar.nav>
						<p className="px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
							Menu Principal
						</p>
						{navLinks.map(item => (
							<C_SideBar.navItem key={item.path} icon={item.icon} title={item.title} path={item.path} />
						))}
					</C_SideBar.nav>
				</div>

				{/* Rodapé da Sidebar */}
				<div>
					<DashLogOut />
				</div>
			</aside>

			{/* Conteúdo Principal do Dashboard */}
			<div className="flex-1 ml-64 flex flex-col min-h-screen bg-slate-900/50">
				<Navbar />

				{/* Banner Informativo de Modo Desenvolvimento */}
				<div className="bg-amber-500/10 border-b border-amber-500/20 px-6 py-2.5 text-xs text-amber-200 flex items-center justify-between">
					<div className="flex items-center gap-2">
						<span className="inline-block h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
						<span>
							<strong>Modo de Ajuste Ativo:</strong> Acesso direto liberado temporariamente para customização das telas.
						</span>
					</div>
					<Link href="/" className="hover:underline text-amber-300 font-medium">
						Ir para o Site →
					</Link>
				</div>

				<main className="flex-1 p-6 lg:p-8 max-w-7xl w-full mx-auto">{children}</main>
			</div>
		</div>
	)
}
