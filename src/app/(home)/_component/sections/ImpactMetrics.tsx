'use client'

import { Award, Briefcase, Star, Users } from 'lucide-react'

const metrics = [
	{
		icon: Award,
		number: '+20',
		label: 'Anos de Experiência',
		detail: 'Na indústria e consultoria executiva'
	},
	{
		icon: Users,
		number: '+10.000',
		label: 'Profissionais Capacitados',
		detail: 'Em treinamentos e programas práticos'
	},
	{
		icon: Briefcase,
		number: '100%',
		label: 'Métodos Aplicados',
		detail: 'Lean, Kaizen e Solução Eficaz'
	},
	{
		icon: Star,
		number: '98%',
		label: 'Aprovação & Satisfação',
		detail: 'Recomendação dos clientes atendidos'
	}
]

export const ImpactMetrics = () => {
	return (
		<section className="relative w-full py-12 sm:py-16 px-6 sm:px-8 lg:px-12 bg-[#131727] border-y border-white/10 overflow-hidden">
			{/* Ambient background glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#567CAB]/10 rounded-full blur-3xl pointer-events-none" />

			<div className="max-w-7xl mx-auto relative z-10">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
					{metrics.map(item => {
						const Icon = item.icon
						return (
							<div
								key={item.label}
								className="group flex flex-col items-center sm:items-start text-center sm:text-left p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#567CAB]/50 transition-all duration-300 hover:-translate-y-1"
							>
								<div className="w-12 h-12 rounded-xl bg-[#567CAB]/20 flex items-center justify-center text-[#93B3DA] mb-4 group-hover:bg-[#567CAB] group-hover:text-white transition-colors">
									<Icon size={24} />
								</div>
								<span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
									{item.number}
								</span>
								<span className="text-sm sm:text-base font-bold text-[#93B3DA] mt-1">{item.label}</span>
								<span className="text-xs text-slate-400 mt-1">{item.detail}</span>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}
