'use client'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Calendar, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type CardNovidadeBlogProps = {
	id: string
	title: string
	subtitle: string
	capa_image: string
	assunto: string
	autor: string
	data_post: string
	video_youtube?: string
}

export const CardNovidadeBlog = ({ post }: { post: CardNovidadeBlogProps }) => {
	return (
		<Card className="group relative flex flex-col justify-between h-[440px] w-full max-w-sm rounded-xl overflow-hidden border border-white/15 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
			<div>
				<div className="relative h-48 w-full overflow-hidden">
					<Badge className="absolute left-3 top-3 z-10 bg-[#2B355A] hover:bg-[#131727] text-white border-none shadow-sm text-xs font-semibold px-2.5 py-1">
						Artigo
					</Badge>
					<Image
						src={post.capa_image || '/services/bg-services.jpeg'}
						alt={post.title}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						className="object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				</div>

				<CardHeader className="p-5 pb-2">
					<div className="flex items-center gap-4 text-xs text-slate-500 mb-2">
						<span className="flex items-center gap-1">
							<Calendar size={13} className="text-[#567CAB]" />
							{post.data_post}
						</span>
						<span className="flex items-center gap-1">
							<User size={13} className="text-[#567CAB]" />
							{post.autor}
						</span>
					</div>
					<CardTitle className="text-lg font-bold text-[#131727] group-hover:text-[#567CAB] transition-colors line-clamp-2 leading-snug">
						{post.title}
					</CardTitle>
				</CardHeader>

				<CardContent className="px-5 py-0">
					<p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">{post.subtitle}</p>
				</CardContent>
			</div>

			<CardFooter className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
				<span className="text-xs font-medium text-slate-500">Leitura rápida</span>
				<Link
					href="/blog"
					className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#567CAB] group-hover:text-[#2B355A] group-hover:gap-2.5 transition-all"
				>
					Ler artigo
					<ArrowRight size={16} />
				</Link>
			</CardFooter>
		</Card>
	)
}
