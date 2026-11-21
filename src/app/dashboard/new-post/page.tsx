'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/use-toast'
import { ArrowLeft, CheckCircle2, Image as ImageIcon, PenLine, Send } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function NewPostPage() {
	const [loading, setLoading] = useState(false)
	const [published, setPublished] = useState(false)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			setPublished(true)
			toast({
				title: 'Post salvo com sucesso!',
				description: 'O artigo foi registrado e está pronto para publicação.'
			})
		}, 800)
	}

	return (
		<div className="space-y-6 max-w-4xl mx-auto">
			{/* Cabeçalho */}
			<div className="flex items-center justify-between">
				<Button asChild variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/10 gap-2">
					<Link href="/dashboard/posts">
						<ArrowLeft size={16} />
						<span>Voltar aos Posts</span>
					</Link>
				</Button>
				<Badge variant="outline" className="bg-[#567CAB]/20 text-[#93B3DA] border-[#567CAB]/40">
					Editor de Conteúdo
				</Badge>
			</div>

			<Card className="bg-[#131727]/60 border-white/10 backdrop-blur-sm shadow-xl">
				<CardHeader className="pb-4 border-b border-white/5">
					<CardTitle className="text-xl text-white font-heading flex items-center gap-2">
						<PenLine className="text-[#93B3DA]" size={20} />
						Criar Novo Artigo
					</CardTitle>
					<CardDescription className="text-slate-400">
						Preencha as informações abaixo para publicar um artigo ou notícia no blog institucional.
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-6">
					{published ? (
						<div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
							<div className="h-16 w-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
								<CheckCircle2 size={36} />
							</div>
							<h3 className="text-xl font-heading font-bold text-white">Artigo Registrado com Sucesso!</h3>
							<p className="text-sm text-slate-400 max-w-md">
								As alterações foram salvas. Você pode voltar à lista de artigos ou criar uma nova publicação.
							</p>
							<div className="flex items-center gap-3 pt-2">
								<Button
									type="button"
									onClick={() => setPublished(false)}
									variant="outline"
									className="border-white/10 text-white hover:bg-white/10"
								>
									Criar Outro Artigo
								</Button>
								<Button asChild className="bg-[#567CAB] hover:bg-[#466994] text-white">
									<Link href="/dashboard/posts">Ver Todos os Artigos</Link>
								</Button>
							</div>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="space-y-2">
								<Label htmlFor="title" className="text-slate-200">
									Título do Artigo *
								</Label>
								<Input
									id="title"
									required
									placeholder="Ex: Como a reestruturação financeira impulsiona médias empresas"
									className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#567CAB]"
								/>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="category" className="text-slate-200">
										Categoria *
									</Label>
									<Select defaultValue="Finanças Corporativas">
										<SelectTrigger className="bg-white/5 border-white/10 text-white">
											<SelectValue placeholder="Selecione a categoria" />
										</SelectTrigger>
										<SelectContent className="bg-[#1B233D] border-white/10 text-white">
											<SelectItem value="Finanças Corporativas">Finanças Corporativas</SelectItem>
											<SelectItem value="Gestão Estratégica">Gestão Estratégica</SelectItem>
											<SelectItem value="Turnaround">Turnaround & Recuperação</SelectItem>
											<SelectItem value="Liderança">Liderança & Governança</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="author" className="text-slate-200">
										Autor *
									</Label>
									<Input
										id="author"
										defaultValue="Fabiano Dell’Agnolo"
										required
										className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#567CAB]"
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="image" className="text-slate-200">
									URL da Imagem de Capa
								</Label>
								<div className="flex gap-2">
									<Input
										id="image"
										placeholder="https://images.unsplash.com/photo-..."
										defaultValue="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
										className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#567CAB]"
									/>
									<Button
										type="button"
										variant="outline"
										className="border-white/10 bg-white/5 text-slate-300 hover:text-white"
										aria-label="Selecionar imagem"
									>
										<ImageIcon size={18} />
									</Button>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="excerpt" className="text-slate-200">
									Resumo / Chamada (Excerpt) *
								</Label>
								<Textarea
									id="excerpt"
									required
									rows={2}
									placeholder="Uma breve síntese do conteúdo exibida nas listagens..."
									className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#567CAB] resize-none"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="content" className="text-slate-200">
									Conteúdo Completo (Markdown / Texto) *
								</Label>
								<Textarea
									id="content"
									required
									rows={6}
									placeholder="Escreva aqui o artigo completo..."
									className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#567CAB]"
								/>
							</div>

							<div className="pt-4 flex items-center justify-end gap-3 border-t border-white/10">
								<Button
									asChild
									type="button"
									variant="ghost"
									className="text-slate-300 hover:text-white hover:bg-white/10"
								>
									<Link href="/dashboard/posts">Cancelar</Link>
								</Button>
								<Button
									type="submit"
									disabled={loading}
									className="bg-[#567CAB] hover:bg-[#466994] text-white shadow-lg shadow-[#567CAB]/25 gap-2 px-6"
								>
									<Send size={16} />
									<span>{loading ? 'Salvando...' : 'Publicar Artigo'}</span>
								</Button>
							</div>
						</form>
					)}
				</CardContent>
			</Card>
		</div>
	)
}
