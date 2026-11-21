'use client'

import { Card } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'

type DepoimentoProps = {
	name: string
	empresa: string
	image: string
	comentario: string
}

const ratingStars = ['star-1', 'star-2', 'star-3', 'star-4', 'star-5']

export const CommentUser = ({ data }: { data: DepoimentoProps }) => {
	return (
		<Card className="relative flex flex-col justify-between w-full max-w-md h-[340px] sm:h-[320px] p-6 sm:p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
			<div>
				<div className="flex items-center justify-between mb-4">
					<div className="flex gap-1 text-amber-400">
						{ratingStars.map(starId => (
							<Star key={starId} size={18} fill="currentColor" strokeWidth={0} />
						))}
					</div>
					<Quote className="text-[#567CAB]/30 h-8 w-8" />
				</div>

				<p className="text-slate-700 text-sm sm:text-base leading-relaxed italic line-clamp-5">
					&ldquo;{data.comentario}&rdquo;
				</p>
			</div>

			<div className="pt-4 border-t border-slate-100 flex items-center justify-between">
				<div className="flex flex-col">
					<span className="font-bold text-[#131727] text-sm sm:text-base">{data.name}</span>
					<span className="text-xs font-semibold text-[#567CAB] uppercase tracking-wider">{data.empresa}</span>
				</div>
			</div>
		</Card>
	)
}
