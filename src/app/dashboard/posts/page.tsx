'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { blog } from '@/lib/data'
import { Calendar, ExternalLink, Newspaper, PenLine, PlusCircle, User } from 'lucide-react'
import Link from 'next/link'

export default function PostsPage() {
	return (
		<div className="space-y-6">
			{/* Cabeçalho */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div>
					<h1 className="text-2xl lg:text-3xl font-heading font-bold text-white flex items-center gap-3">
						<Newspaper className="text-[#93B3DA]" size={28} />
						Blog & Artigos
					</h1>
					<p className="text-slate-400 text-sm mt-1">
						Gerencie as publicações, matérias informativas e novidades da Domus Petra.
					</p>
				</div>
				<Button asChild className="bg-[#567CAB] hover:bg-[#466994] text-white shadow-lg shadow-[#567CAB]/20 gap-2">
					<Link href="/dashboard/new-post">
						<PlusCircle size={16} />
						<span>Novo Artigo</span>
					</Link>
				</Button>
			</div>

			{/* Lista de Posts */}
			<Card className="bg-[#131727]/60 border-white/10 backdrop-blur-sm shadow-xl">
				<CardHeader className="pb-3 border-b border-white/5">
					<CardTitle className="text-lg text-white font-heading">Artigos Publicados</CardTitle>
					<CardDescription className="text-slate-400">
						Total de {blog.length} publicações ativas no portal.
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-4">
					<div className="divide-y divide-white/5">
						{blog.map(article => (
							<div
								key={article.id}
								className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/[0.02] -mx-4 px-4 rounded-xl transition-colors"
							>
								<div className="space-y-1.5 min-w-0 flex-1">
									<div className="flex items-center gap-2 flex-wrap">
										<Badge variant="outline" className="bg-[#567CAB]/15 text-[#93B3DA] border-[#567CAB]/30 text-xs">
											Artigo Institucional
										</Badge>
										<span className="flex items-center gap-1 text-xs text-slate-400">
											<Calendar size={12} />
											{article.data_post}
										</span>
										<span className="flex items-center gap-1 text-xs text-slate-400">
											<User size={12} />
											{article.autor}
										</span>
									</div>
									<h3 className="font-semibold text-white group-hover:text-[#93B3DA] transition-colors text-base">
										{article.title}
									</h3>
									<p className="text-xs text-slate-400 line-clamp-1">{article.subtitle}</p>
								</div>

								<div className="flex items-center gap-2 self-start md:self-center">
									<Button
										asChild
										variant="ghost"
										size="sm"
										className="text-xs text-slate-300 hover:text-white hover:bg-white/10 gap-1.5"
									>
										<Link href="/blog" target="_blank">
											<span>Visualizar</span>
											<ExternalLink size={12} />
										</Link>
									</Button>
									<Button
										asChild
										variant="outline"
										size="sm"
										className="border-white/10 bg-white/5 text-xs text-white hover:bg-white/10 gap-1.5"
									>
										<Link href="/dashboard/new-post">
											<PenLine size={12} />
											<span>Editar</span>
										</Link>
									</Button>
								</div>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
