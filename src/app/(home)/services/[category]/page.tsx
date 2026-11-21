import { GETConsultorias, GETPalestras, GETTreinamentos } from '@/actions/service'
import type { Service } from '@prisma/client'
import { ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { CardItem } from '../_components/carditemService'

export const dynamic = 'force-dynamic'

type CategoryPageProps = {
	params: {
		category: string
	}
}

export default async function CategoryPage({ params }: CategoryPageProps) {
	const { category } = params
	const catNormalized = category.toUpperCase()

	let services: Service[] = []
	let title = 'Serviços'
	let description = 'Conheça nossas soluções especializadas para impulsionar sua organização.'

	if (catNormalized.includes('CONSULT')) {
		services = await GETConsultorias()
		title = 'Consultorias Especializadas'
		description = 'Diagnóstico, mapeamento de processos e implementação de metodologias Lean e Seis Sigma.'
	} else if (catNormalized.includes('TREINA')) {
		services = await GETTreinamentos()
		title = 'Treinamentos de Alta Performance'
		description = 'Capacitação prática com ferramentas consagradas (5S, Kaizen, Método A3 e Liderança).'
	} else if (catNormalized.includes('PALEST')) {
		services = await GETPalestras()
		title = 'Palestras Corporativas'
		description = 'Apresentações transformadoras e dinâmicas com Fabiano Dell Agnolo para convenções e líderes.'
	} else {
		services = await GETConsultorias()
	}

	return (
		<main className="w-full min-h-screen bg-slate-50 pt-28 sm:pt-36 pb-20 px-6 sm:px-8 lg:px-12">
			<div className="max-w-7xl mx-auto flex flex-col gap-10">
				<div className="flex flex-col gap-4">
					<Link
						href="/services"
						className="inline-flex items-center gap-2 text-sm font-semibold text-[#567CAB] hover:text-[#131727] transition-colors w-fit"
					>
						<ArrowLeft size={16} />
						Voltar para todos os serviços
					</Link>

					<div className="flex flex-col gap-2">
						<span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#567CAB]">
							<Sparkles size={14} />
							Categoria
						</span>
						<h1 className="text-3xl sm:text-5xl font-extrabold text-[#131727] tracking-tight">{title}</h1>
						<p className="text-base text-slate-600 max-w-2xl leading-relaxed">{description}</p>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map(service => (
						<CardItem key={service.id} service={service} />
					))}
				</div>
			</div>
		</main>
	)
}
