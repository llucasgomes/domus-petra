import { GETServiceSingle } from '@/actions/service'
import { ArrowLeft, CheckCircle2, Mail, MessageSquare, Phone, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type paramsProps = {
	params: {
		category: string
		id: string
	}
}

export default async function ServiceDetailPage({ params }: paramsProps) {
	const { id } = params
	const service = await GETServiceSingle(id)

	if (!service) {
		return (
			<main className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
				<h1 className="text-3xl font-bold text-[#131727] mb-4">Serviço não encontrado</h1>
				<p className="text-slate-600 mb-6">O serviço solicitado não está disponível ou foi movido.</p>
				<Link
					href="/services"
					className="px-6 py-3 bg-[#567CAB] text-white font-semibold rounded-lg hover:bg-[#3E5A7D] transition-colors"
				>
					Voltar para Serviços
				</Link>
			</main>
		)
	}

	const encodedMessage = encodeURIComponent(
		`Olá! Tenho interesse no serviço "${service.title}" da Domus Petra e gostaria de solicitar uma proposta.`
	)
	const whatsappUrl = `https://wa.me/5547997071177?text=${encodedMessage}`

	return (
		<main className="w-full min-h-screen bg-slate-50 overflow-hidden">
			{/* 1. HERO HEADER */}
			<section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#131727] via-[#1B233D] to-[#2B355A] text-white">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#567CAB]/20 rounded-full blur-3xl pointer-events-none" />

				<div className="max-w-7xl mx-auto flex flex-col gap-6 relative z-10">
					<Link
						href="/services"
						className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#93B3DA] hover:text-white transition-colors w-fit"
					>
						<ArrowLeft size={16} />
						Voltar para todos os serviços
					</Link>

					<div className="flex flex-col gap-3 max-w-3xl">
						<span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#93B3DA] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 w-fit">
							<Sparkles size={13} />
							{service.category}
						</span>
						<h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
							{service.title}
						</h1>
						<p className="text-base sm:text-xl text-slate-200 font-light leading-relaxed">{service.subtitle}</p>
					</div>
				</div>
			</section>

			{/* 2. CONTEÚDO PRINCIPAL & SIDEBAR */}
			<section className="max-w-7xl mx-auto py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Coluna Esquerda: Detalhes */}
					<div className="lg:col-span-2 flex flex-col gap-8">
						<div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
							<Image
								src={service.image || '/services/bg-services.jpeg'}
								alt={service.title}
								fill
								className="object-cover"
								priority
							/>
						</div>

						<div className="flex flex-col gap-6 bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm">
							<h2 className="text-2xl font-bold text-[#131727]">Sobre esta solução</h2>
							<div className="text-base sm:text-lg text-slate-700 leading-relaxed space-y-4">
								<p>{service.text}</p>
							</div>

							<div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
								<h3 className="text-base font-bold text-[#131727]">Diferenciais da Metodologia Domus Petra:</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
									<div className="flex items-center gap-2">
										<CheckCircle2 size={18} className="text-[#567CAB] shrink-0" />
										<span>Diagnóstico preciso e personalizado</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle2 size={18} className="text-[#567CAB] shrink-0" />
										<span>Foco em aplicação prática no dia a dia</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle2 size={18} className="text-[#567CAB] shrink-0" />
										<span>Mentoria direta com Fabiano Dell Agnolo</span>
									</div>
									<div className="flex items-center gap-2">
										<CheckCircle2 size={18} className="text-[#567CAB] shrink-0" />
										<span>Acompanhamento de KPIs e resultados</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Coluna Direita: Card de Proposta / Contato Rápido */}
					<div className="lg:col-span-1">
						<div className="sticky top-28 flex flex-col gap-6 p-8 rounded-2xl bg-[#131727] text-white shadow-xl border border-white/10">
							<div className="flex flex-col gap-2">
								<span className="text-xs font-bold uppercase tracking-widest text-[#93B3DA]">
									Interessado nesta solução?
								</span>
								<h3 className="text-xl sm:text-2xl font-bold text-white">Solicite uma Proposta</h3>
								<p className="text-xs text-slate-300">
									Adaptamos o formato, duração e escopo de acordo com as necessidades e metas da sua empresa.
								</p>
							</div>

							<div className="flex flex-col gap-3 pt-2">
								<a
									href={whatsappUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] transition-all shadow-md hover:scale-[1.02]"
								>
									<MessageSquare size={18} />
									Falar no WhatsApp
								</a>

								<Link
									href="/contacts"
									className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
								>
									<Mail size={16} />
									Enviar Mensagem por Email
								</Link>
							</div>

							<div className="pt-4 border-t border-white/10 flex flex-col gap-2 text-xs text-slate-300">
								<div className="flex items-center gap-2">
									<Phone size={14} className="text-[#93B3DA]" />
									<span>(47) 9 9707-1177</span>
								</div>
								<div className="flex items-center gap-2">
									<Mail size={14} className="text-[#93B3DA]" />
									<span>contato@domuspetra.com.br</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
