'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type ServiceItemProps = {
	id: string
	title: string
	subtitle: string
	text?: string
	category: string
	image?: string
	tags?: string[]
}

export const CardItem = ({ service }: { service: ServiceItemProps }) => {
	const categorySlug = service.category?.toLowerCase() || 'consultorias'

	return (
		<Link href={`/services/${categorySlug}/${service.id}`} className="group block w-full max-w-sm">
			<Card className="flex flex-col justify-between h-[420px] rounded-2xl overflow-hidden border border-slate-200/80 bg-white hover:border-[#567CAB]/60 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300">
				<div>
					<div className="relative h-48 w-full overflow-hidden bg-slate-100">
						<Image
							src={service.image || '/services/bg-services.jpeg'}
							width={400}
							height={250}
							alt={service.title}
							className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
						<div className="absolute top-3 left-3 bg-[#131727]/85 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
							{service.category}
						</div>
					</div>

					<CardHeader className="p-5 pb-2">
						<CardTitle className="text-lg font-bold text-[#131727] group-hover:text-[#567CAB] transition-colors line-clamp-2 leading-snug">
							{service.title}
						</CardTitle>
					</CardHeader>

					<CardContent className="px-5 py-0">
						<p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">{service.subtitle}</p>
					</CardContent>
				</div>

				<CardFooter className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
					<span className="text-xs font-semibold text-[#567CAB] uppercase tracking-wider flex items-center gap-1">
						<CheckCircle2 size={14} />
						Metodologia Prática
					</span>
					<span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#567CAB] group-hover:text-[#131727] group-hover:gap-2.5 transition-all">
						Ver detalhes
						<ArrowRight size={16} />
					</span>
				</CardFooter>
			</Card>
		</Link>
	)
}
