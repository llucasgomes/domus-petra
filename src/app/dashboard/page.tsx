import { GETServices } from '@/actions/service'
import { GETUsers } from '@/actions/user'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, ArrowUpRight, BookOpen, Briefcase, ExternalLink, Layers, Users } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function Page() {
	const users = await GETUsers()
	const services = await GETServices()

	// Categorias únicas
	const categories = Array.from(new Set(services.map(s => s.category)))

	return (
		<div className="space-y-8">
			{/* Boas-vindas / Hero do Dashboard */}
			<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#131727] via-[#1E2642] to-[#2B355A] p-6 sm:p-8 border border-white/10 shadow-2xl">
				<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#567CAB]/10 rounded-full blur-3xl pointer-events-none" />

				<div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
					<div className="space-y-2 max-w-2xl">
						<div className="flex items-center gap-2">
							<Badge className="bg-[#567CAB]/30 text-[#93B3DA] border-[#567CAB]/40 text-xs">Gestão Integrada</Badge>
							<span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
								<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
								Portal Ativo
							</span>
						</div>
						<h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight">
							Painel de Controle Executivo
						</h1>
						<p className="text-slate-300 text-sm leading-relaxed">
							Bem-vindo à plataforma de gestão da <strong>Domus Petra</strong>. Aqui você gerencia o catálogo de
							soluções, usuários e publicações da consultoria com total agilidade.
						</p>
					</div>

					<div className="flex flex-wrap items-center gap-3">
						<Button
							asChild
							className="bg-[#567CAB] hover:bg-[#466994] text-white shadow-lg shadow-[#567CAB]/20 gap-2 h-10 px-4"
						>
							<Link href="/dashboard/services">
								<Briefcase size={16} />
								<span>Ver Serviços</span>
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							className="border-white/20 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white gap-2 h-10 px-4"
						>
							<Link href="/" target="_blank">
								<span>Abrir Site</span>
								<ExternalLink size={14} />
							</Link>
						</Button>
					</div>
				</div>
			</div>

			{/* Cards de Métricas */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
				{/* Usuários */}
				<Link href="/dashboard/users" className="group">
					<Card className="bg-[#131727]/60 border-white/10 hover:border-[#567CAB]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-sm font-medium text-slate-400">Usuários Registrados</CardTitle>
							<div className="p-2.5 rounded-xl bg-[#567CAB]/10 text-[#93B3DA] group-hover:bg-[#567CAB]/20 transition-colors">
								<Users size={18} />
							</div>
						</CardHeader>
						<CardContent>
							<div className="text-3xl font-heading font-bold text-white">{users.length}</div>
							<p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
								<span>Contas com permissão de acesso</span>
								<ArrowUpRight
									size={14}
									className="text-[#93B3DA] ml-auto group-hover:translate-x-0.5 transition-transform"
								/>
							</p>
						</CardContent>
					</Card>
				</Link>

				{/* Serviços */}
				<Link href="/dashboard/services" className="group">
					<Card className="bg-[#131727]/60 border-white/10 hover:border-[#567CAB]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-sm font-medium text-slate-400">Serviços Ativos</CardTitle>
							<div className="p-2.5 rounded-xl bg-[#567CAB]/10 text-[#93B3DA] group-hover:bg-[#567CAB]/20 transition-colors">
								<Briefcase size={18} />
							</div>
						</CardHeader>
						<CardContent>
							<div className="text-3xl font-heading font-bold text-white">{services.length}</div>
							<p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
								<span>Consultorias no portfólio</span>
								<ArrowUpRight
									size={14}
									className="text-[#93B3DA] ml-auto group-hover:translate-x-0.5 transition-transform"
								/>
							</p>
						</CardContent>
					</Card>
				</Link>

				{/* Categorias */}
				<Link href="/services" target="_blank" className="group">
					<Card className="bg-[#131727]/60 border-white/10 hover:border-[#567CAB]/50 transition-all duration-300 hover:-translate-y-1 shadow-lg">
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-sm font-medium text-slate-400">Categorias de Soluções</CardTitle>
							<div className="p-2.5 rounded-xl bg-[#567CAB]/10 text-[#93B3DA] group-hover:bg-[#567CAB]/20 transition-colors">
								<Layers size={18} />
							</div>
						</CardHeader>
						<CardContent>
							<div className="text-3xl font-heading font-bold text-white">{categories.length || 4}</div>
							<p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
								<span>Áreas de atuação consultiva</span>
								<ArrowUpRight
									size={14}
									className="text-[#93B3DA] ml-auto group-hover:translate-x-0.5 transition-transform"
								/>
							</p>
						</CardContent>
					</Card>
				</Link>

				{/* Status do Sistema */}
				<div className="group">
					<Card className="bg-[#131727]/60 border-white/10 shadow-lg">
						<CardHeader className="flex flex-row items-center justify-between pb-2">
							<CardTitle className="text-sm font-medium text-slate-400">Status Operacional</CardTitle>
							<div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
								<Activity size={18} />
							</div>
						</CardHeader>
						<CardContent>
							<div className="text-3xl font-heading font-bold text-emerald-400">100%</div>
							<p className="text-xs text-slate-400 mt-1">Todos os módulos operando</p>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Ações Rápidas & Atalhos */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				<Link
					href="/dashboard/services"
					className="group flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-[#131727] to-[#1E2642] border border-white/10 hover:border-[#567CAB]/50 transition-all shadow-xl hover:-translate-y-1"
				>
					<div className="space-y-3">
						<div className="h-11 w-11 rounded-xl bg-[#567CAB]/20 text-[#93B3DA] flex items-center justify-center">
							<Briefcase size={22} />
						</div>
						<h3 className="font-heading font-bold text-lg text-white group-hover:text-[#93B3DA] transition-colors">
							Gerenciar Serviços
						</h3>
						<p className="text-xs text-slate-300 leading-relaxed">
							Visualize, edite ou consulte todas as soluções e consultorias disponibilizadas no site.
						</p>
					</div>
					<div className="pt-4 flex items-center text-xs font-semibold text-[#93B3DA]">
						<span>Acessar catálogo</span>
						<ArrowUpRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
					</div>
				</Link>

				<Link
					href="/dashboard/users"
					className="group flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-[#131727] to-[#1E2642] border border-white/10 hover:border-[#567CAB]/50 transition-all shadow-xl hover:-translate-y-1"
				>
					<div className="space-y-3">
						<div className="h-11 w-11 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
							<Users size={22} />
						</div>
						<h3 className="font-heading font-bold text-lg text-white group-hover:text-[#93B3DA] transition-colors">
							Acessos & Usuários
						</h3>
						<p className="text-xs text-slate-300 leading-relaxed">
							Administre as permissões de acesso ao painel, promovendo contas a administradores.
						</p>
					</div>
					<div className="pt-4 flex items-center text-xs font-semibold text-indigo-300">
						<span>Ver permissões</span>
						<ArrowUpRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
					</div>
				</Link>

				<Link
					href="/blog"
					target="_blank"
					className="group flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-[#131727] to-[#1E2642] border border-white/10 hover:border-[#567CAB]/50 transition-all shadow-xl hover:-translate-y-1"
				>
					<div className="space-y-3">
						<div className="h-11 w-11 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
							<BookOpen size={22} />
						</div>
						<h3 className="font-heading font-bold text-lg text-white group-hover:text-amber-200 transition-colors">
							Blog & Artigos
						</h3>
						<p className="text-xs text-slate-300 leading-relaxed">
							Confira como os artigos e notícias da Domus Petra estão sendo exibidos aos clientes.
						</p>
					</div>
					<div className="pt-4 flex items-center text-xs font-semibold text-amber-300">
						<span>Acessar Blog</span>
						<ExternalLink size={14} className="ml-1" />
					</div>
				</Link>
			</div>

			{/* Tabela Resumo dos Serviços Cadastrados */}
			<Card className="bg-[#131727]/60 border-white/10 shadow-xl">
				<CardHeader className="flex flex-row items-center justify-between pb-4 border-b border-white/5">
					<div>
						<CardTitle className="text-lg text-white font-heading">Serviços em Destaque</CardTitle>
						<CardDescription className="text-slate-400 text-xs">
							Prévia das consultorias cadastradas no portal
						</CardDescription>
					</div>
					<Button asChild size="sm" variant="ghost" className="text-xs text-[#93B3DA] hover:text-white">
						<Link href="/dashboard/services">Ver todos ({services.length}) →</Link>
					</Button>
				</CardHeader>
				<CardContent className="pt-4">
					<div className="divide-y divide-white/5">
						{services.slice(0, 5).map(service => (
							<div key={service.id} className="py-3 flex items-center justify-between gap-4">
								<div className="flex flex-col min-w-0">
									<span className="text-sm font-semibold text-white truncate">{service.title}</span>
									<span className="text-xs text-slate-400 truncate">{service.subtitle}</span>
								</div>
								<Badge
									variant="outline"
									className="bg-[#567CAB]/10 text-[#93B3DA] border-[#567CAB]/30 text-[10px] uppercase font-medium flex-shrink-0"
								>
									{service.category}
								</Badge>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
