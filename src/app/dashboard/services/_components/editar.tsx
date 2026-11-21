'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import type { Service } from '@prisma/client'
import { ExternalLink, Layers, Pencil } from 'lucide-react'
import Link from 'next/link'

export const Editar = ({ service }: { service: Service }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button
					type="button"
					className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
					aria-label={`Editar serviço ${service.title}`}
				>
					<Pencil size={18} />
				</button>
			</SheetTrigger>
			<SheetContent className="w-[400px] sm:w-[540px] bg-[#131727] text-white border-l border-white/10 overflow-y-auto">
				<SheetHeader className="mb-6 pb-4 border-b border-white/10">
					<div className="flex items-center gap-2 mb-2">
						<Layers size={18} className="text-[#93B3DA]" />
						<Badge variant="outline" className="bg-[#567CAB]/20 text-[#93B3DA] border-[#567CAB]/30">
							{service.category}
						</Badge>
					</div>
					<SheetTitle className="text-xl text-white font-heading">{service.title}</SheetTitle>
					<SheetDescription className="text-slate-300 mt-1">{service.subtitle}</SheetDescription>
				</SheetHeader>

				<div className="space-y-4 text-sm text-slate-300">
					<div>
						<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Descrição</h4>
						<p className="bg-white/5 p-4 rounded-xl border border-white/10 leading-relaxed text-slate-200">
							{service.text}
						</p>
					</div>

					<div className="pt-4 flex items-center justify-between">
						<Button asChild variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 gap-2">
							<Link href={`/services/${service.category.toLowerCase()}/${service.id}`} target="_blank">
								<span>Ver no Site</span>
								<ExternalLink size={14} />
							</Link>
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
