'use client'

import { Button } from '@/components/ui/button'
import { ChevronRight, ExternalLink, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routeTitles: Record<string, string> = {
	dashboard: 'Visão Geral',
	services: 'Gerenciador de Serviços',
	users: 'Gerenciador de Usuários',
	posts: 'Blog & Notícias',
	'new-post': 'Novo Post'
}

const Navbar = () => {
	const pathname = usePathname()
	const currentSegment = pathname?.split('/').filter(Boolean).pop() || 'dashboard'
	const currentTitle = routeTitles[currentSegment] || currentSegment.replace('-', ' ')

	return (
		<header className="sticky top-0 z-20 flex w-full items-center justify-between border-b border-white/10 bg-[#131727]/80 px-6 py-4 backdrop-blur-md">
			<div className="flex items-center gap-2 text-sm">
				<Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors">
					Dashboard
				</Link>
				{currentSegment !== 'dashboard' && (
					<>
						<ChevronRight size={14} className="text-slate-500" />
						<span className="font-semibold text-white capitalize">{currentTitle}</span>
					</>
				)}
			</div>

			<div className="flex items-center gap-4">
				<div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
					<ShieldCheck size={14} />
					<span>Painel Seguro</span>
				</div>

				<Button
					asChild
					variant="outline"
					size="sm"
					className="border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white text-xs gap-1.5 h-8"
				>
					<Link href="/" target="_blank" rel="noopener noreferrer">
						<span>Ver Site</span>
						<ExternalLink size={12} />
					</Link>
				</Button>
			</div>
		</header>
	)
}

export default Navbar
