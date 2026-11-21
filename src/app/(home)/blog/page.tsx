import { blog } from '@/lib/data'
import { ArrowRight, Calendar, ExternalLink, Sparkles, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaYoutube } from 'react-icons/fa'

export default function BlogPage() {
	const featuredPost = blog[0]
	const otherPosts = blog.slice(1)

	return (
		<main className="w-full min-h-screen bg-slate-50 overflow-hidden">
			{/* 1. HERO HEADER */}
			<section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#131727] via-[#1B233D] to-[#2B355A] text-white">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#567CAB]/20 rounded-full blur-3xl pointer-events-none" />

				<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
					<span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#93B3DA] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
						<Sparkles size={14} />
						Artigos & Metodologias
					</span>

					<h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
						Blog <span className="text-[#93B3DA]">Domus Petra</span>
					</h1>

					<p className="text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light">
						Reflexões estratégicas, metodologias industriais do Japão, liderança e práticas comprovadas para a
						eficiência do seu negócio.
					</p>
				</div>
			</section>

			{/* 2. CONTEÚDO DO BLOG */}
			<section className="max-w-7xl mx-auto py-16 sm:py-24 px-6 sm:px-8 lg:px-12">
				{/* ARTIGO EM DESTAQUE */}
				{featuredPost && (
					<div className="mb-16">
						<div className="flex items-center gap-2 mb-6">
							<span className="text-xs font-bold uppercase tracking-widest text-[#567CAB] bg-[#567CAB]/10 px-3 py-1 rounded-md">
								Em Destaque
							</span>
						</div>

						<div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 sm:p-8">
							<div className="lg:col-span-7 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden">
								<Image
									src={featuredPost.capa_image}
									alt={featuredPost.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-700"
									priority
								/>
							</div>

							<div className="lg:col-span-5 flex flex-col gap-4">
								<div className="flex items-center gap-4 text-xs text-slate-500">
									<span className="flex items-center gap-1.5">
										<Calendar size={14} className="text-[#567CAB]" />
										{featuredPost.data_post}
									</span>
									<span className="flex items-center gap-1.5">
										<User size={14} className="text-[#567CAB]" />
										{featuredPost.autor}
									</span>
								</div>

								<h2 className="text-2xl sm:text-3xl font-extrabold text-[#131727] group-hover:text-[#567CAB] transition-colors leading-tight">
									{featuredPost.title}
								</h2>

								<p className="text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-4">
									{featuredPost.subtitle}
								</p>

								<div className="pt-2">
									<a
										href="#artigo-01"
										className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#2B355A] hover:bg-[#131727] transition-all shadow-md hover:shadow-lg w-fit"
									>
										Ler Artigo Completo
										<ArrowRight size={16} />
									</a>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* OUTROS ARTIGOS */}
				<div className="flex flex-col gap-6 mb-8">
					<h2 className="text-2xl sm:text-3xl font-extrabold text-[#131727] tracking-tight">
						Mais Artigos & Entrevistas
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{otherPosts.map(post => (
							<div
								key={post.id}
								id={`artigo-${post.id}`}
								className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-[#567CAB]/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
							>
								<div>
									<div className="relative h-60 w-full overflow-hidden bg-slate-100">
										<Image
											src={post.capa_image}
											alt={post.title}
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-500"
										/>
										{post.video_youtube && (
											<a
												href={post.video_youtube}
												target="_blank"
												rel="noopener noreferrer"
												className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg transition-colors"
											>
												<FaYoutube size={16} />
												Assistir no YouTube
											</a>
										)}
									</div>

									<div className="p-6 pb-2">
										<div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
											<span className="flex items-center gap-1.5">
												<Calendar size={14} className="text-[#567CAB]" />
												{post.data_post}
											</span>
											<span className="flex items-center gap-1.5">
												<User size={14} className="text-[#567CAB]" />
												{post.autor}
											</span>
										</div>

										<h3 className="text-xl font-bold text-[#131727] group-hover:text-[#567CAB] transition-colors leading-snug mb-3">
											{post.title}
										</h3>

										<p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{post.subtitle}</p>
									</div>
								</div>

								<div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between">
									<span className="text-xs font-medium text-slate-500">Artigo informativo</span>

									{post.video_youtube ? (
										<a
											href={post.video_youtube}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#567CAB] hover:text-[#131727] transition-colors"
										>
											Acessar Vídeo
											<ExternalLink size={15} />
										</a>
									) : (
										<a
											href="#artigo-01"
											className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#567CAB] hover:text-[#131727] transition-colors"
										>
											Ler artigo
											<ArrowRight size={15} />
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* LEITURA DO ARTIGO PRINCIPAL */}
				{featuredPost && (
					<div
						id="artigo-01"
						className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl scroll-mt-28"
					>
						<div className="max-w-3xl mx-auto flex flex-col gap-6">
							<div className="flex flex-col gap-2">
								<span className="text-xs font-bold uppercase tracking-widest text-[#567CAB]">Artigo Completo</span>
								<h2 className="text-2xl sm:text-4xl font-extrabold text-[#131727] leading-tight">
									{featuredPost.title}
								</h2>
								<div className="flex items-center gap-4 text-xs text-slate-500 pt-2 border-b border-slate-100 pb-4">
									<span>Por {featuredPost.autor}</span>
									<span>•</span>
									<span>Publicado em {featuredPost.data_post}</span>
								</div>
							</div>

							<div className="text-base sm:text-lg text-slate-700 leading-relaxed space-y-4 whitespace-pre-line font-light">
								{featuredPost.assunto}
							</div>

							<div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
								<span className="text-sm font-bold text-[#131727]">
									Compartilhe conhecimento para transformar pessoas!
								</span>
								<Link
									href="/contacts"
									className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#567CAB] hover:bg-[#3E5A7D] transition-colors"
								>
									Fale com o Autor
								</Link>
							</div>
						</div>
					</div>
				)}
			</section>
		</main>
	)
}
