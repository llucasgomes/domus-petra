'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
	{
		id: '01',
		name: 'Consultorias',
		subtitle: 'Diagnóstico & Otimização',
		description:
			'Consultorias personalizadas para atender às necessidades específicas da sua organização. Identificamos gargalos, eliminamos desperdícios e estruturamos processos para maximizar resultados.',
		image: '/icons/icon-consultoria.svg',
		tags: ['Lean Manufacturing', 'Diagnóstico Operacional', 'Mapeamento de Fluxo', 'Gestão Estratégica'],
		link: '/services'
	},
	{
		id: '02',
		name: 'Treinamentos',
		subtitle: 'Capacitação Prática',
		description:
			'Programas práticos voltados para Solução Eficaz de Problemas, Lean Manufacturing, 5S e liderança. Focados em desenvolver competências operacionais e elevar a produtividade do time.',
		image: '/icons/icon-treinamento.svg',
		tags: ['5S & Kaizen', 'Solução Eficaz de Problemas', 'Liderança Industrial', 'Desenvolvimento de Equipes'],
		link: '/services'
	},
	{
		id: '03',
		name: 'Palestras',
		subtitle: 'Impacto & Motivação',
		description:
			'Apresentações inspiradoras e dinâmicas que provocam reflexão e estimulam mudanças culturais positivas. Ideais para convenções, encontros corporativos e eventos empresariais.',
		image: '/icons/icon-palestra.svg',
		tags: ['Cultura de Eficiência', 'Metodologia Japonesa', 'Gestão de Mudanças', 'Inovação e Pessoas'],
		link: '/services'
	}
]

export const Services = () => {
	return (
		<section id="servicos" className="w-full py-16 sm:py-20 lg:py-28 px-6 sm:px-8 lg:px-16 bg-[#F8FAFC]">
			<div className="max-w-7xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
				{/* Section Header */}
				<div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
					<span className="text-xs font-bold uppercase tracking-widest text-[#567CAB] bg-[#567CAB]/10 px-3.5 py-1.5 rounded-full">
						Nossas Soluções
					</span>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#131727] uppercase tracking-tight">
						Excelência para o seu Negócio
					</h2>
					<p className="text-sm sm:text-base text-slate-600 leading-relaxed">
						Metodologias robustas para potencializar a eficiência e a sustentabilidade da sua empresa através de pessoas
						e processos integrados.
					</p>
				</div>

				{/* Services Cards Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
					{services.map(item => (
						<Card
							key={item.id}
							className="group flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-[#567CAB]/60 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
						>
							<div className="flex flex-col items-start gap-5">
								<div className="w-16 h-16 rounded-xl bg-[#567CAB]/10 group-hover:bg-[#567CAB] transition-colors flex items-center justify-center p-3.5">
									<Image
										src={item.image}
										alt={item.name}
										width={48}
										height={48}
										className="w-full h-full object-contain transition-all group-hover:brightness-0 group-hover:invert"
									/>
								</div>

								<div className="flex flex-col gap-1">
									<span className="text-xs font-semibold uppercase tracking-wider text-[#567CAB]">{item.subtitle}</span>
									<h3 className="text-xl sm:text-2xl font-bold text-[#131727] group-hover:text-[#567CAB] transition-colors">
										{item.name}
									</h3>
								</div>

								<p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.description}</p>

								{/* Skill / Specialty Pills */}
								<div className="flex flex-wrap gap-1.5 pt-2">
									{item.tags.map(tag => (
										<span
											key={tag}
											className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-[#567CAB]/10 group-hover:text-[#2B355A] transition-colors"
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							<div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
								<Link
									href={item.link}
									className="inline-flex items-center gap-2 text-sm font-semibold text-[#567CAB] group-hover:text-[#131727] group-hover:gap-3 transition-all"
								>
									Saiba mais
									<ArrowRight size={16} />
								</Link>
							</div>
						</Card>
					))}
				</div>

				{/* Action Link */}
				<div className="pt-2">
					<Link
						href="/services"
						className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#2B355A] hover:bg-[#131727] transition-all shadow-md hover:shadow-lg"
					>
						Explorar Todos os Serviços
						<ArrowRight size={16} />
					</Link>
				</div>
			</div>
		</section>
	)
}
