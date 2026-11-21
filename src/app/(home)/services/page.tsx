import { GETConsultorias, GETPalestras, GETTreinamentos } from '@/actions/service'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Briefcase, GraduationCap, Mic, Sparkles } from 'lucide-react'
import { CardItem } from './_components/carditemService'

export const dynamic = 'force-dynamic'

export default async function ServicesPage() {
	const consultoria = await GETConsultorias()
	const treinamentos = await GETTreinamentos()
	const palestras = await GETPalestras()

	return (
		<main className="w-full min-h-screen bg-slate-50 overflow-hidden">
			{/* 1. HERO HEADER */}
			<section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#131727] via-[#1B233D] to-[#2B355A] text-white">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#567CAB]/20 rounded-full blur-3xl pointer-events-none" />

				<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
					<span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#93B3DA] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
						<Sparkles size={14} />
						Soluções Corporativas & Industriais
					</span>

					<h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
						Nossos <span className="text-[#93B3DA]">Serviços</span>
					</h1>

					<p className="text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light">
						Especialistas em consultoria empresarial, treinamentos de alta performance e palestras transformadoras.
						Conheça as soluções personalizadas para o seu segmento.
					</p>
				</div>
			</section>

			{/* 2. TABS & SERVICES GRID */}
			<section className="max-w-7xl mx-auto py-16 sm:py-24 px-6 sm:px-8 lg:px-12">
				<Tabs defaultValue="consultorias" className="w-full flex flex-col items-center">
					{/* Tabs Navigation */}
					<TabsList className="h-auto p-1.5 rounded-xl bg-slate-200/80 border border-slate-300/60 flex flex-wrap justify-center gap-1.5 mb-12 shadow-sm">
						<TabsTrigger
							value="consultorias"
							className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-slate-700 data-[state=active]:bg-[#2B355A] data-[state=active]:text-white transition-all shadow-none data-[state=active]:shadow-md"
						>
							<Briefcase size={18} />
							Consultorias
						</TabsTrigger>
						<TabsTrigger
							value="treinamentos"
							className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-slate-700 data-[state=active]:bg-[#2B355A] data-[state=active]:text-white transition-all shadow-none data-[state=active]:shadow-md"
						>
							<GraduationCap size={18} />
							Treinamentos
						</TabsTrigger>
						<TabsTrigger
							value="palestras"
							className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-bold text-slate-700 data-[state=active]:bg-[#2B355A] data-[state=active]:text-white transition-all shadow-none data-[state=active]:shadow-md"
						>
							<Mic size={18} />
							Palestras
						</TabsTrigger>
					</TabsList>

					{/* Tab 1: Consultorias */}
					<TabsContent value="consultorias" className="w-full">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
							{consultoria.map(item => (
								<CardItem key={item.id} service={item} />
							))}
						</div>
					</TabsContent>

					{/* Tab 2: Treinamentos */}
					<TabsContent value="treinamentos" className="w-full">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
							{treinamentos.map(item => (
								<CardItem key={item.id} service={item} />
							))}
						</div>
					</TabsContent>

					{/* Tab 3: Palestras */}
					<TabsContent value="palestras" className="w-full">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
							{palestras.map(item => (
								<CardItem key={item.id} service={item} />
							))}
						</div>
					</TabsContent>
				</Tabs>
			</section>
		</main>
	)
}
