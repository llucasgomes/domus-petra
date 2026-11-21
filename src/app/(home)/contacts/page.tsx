import { Clock, Mail, MapPin, Sparkles } from 'lucide-react'
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FormEmail } from './_components/form'

export default function ContactPage() {
	const whatsappUrl =
		'https://wa.me/5547997071177?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Domus%20Petra.'

	return (
		<main className="w-full min-h-screen bg-slate-50 overflow-hidden">
			{/* 1. HERO HEADER */}
			<section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#131727] via-[#1B233D] to-[#2B355A] text-white">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#567CAB]/20 rounded-full blur-3xl pointer-events-none" />

				<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
					<span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#93B3DA] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
						<Sparkles size={14} />
						Canais de Atendimento
					</span>

					<h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
						Fale com a <span className="text-[#93B3DA]">Domus Petra</span>
					</h1>

					<p className="text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light">
						Estamos prontos para entender as metas da sua organização e estruturar a melhor estratégia em consultoria,
						treinamentos ou palestras.
					</p>
				</div>
			</section>

			{/* 2. CANAIS DE CONTATO + FORMULÁRIO */}
			<section className="max-w-7xl mx-auto py-16 sm:py-24 px-6 sm:px-8 lg:px-12">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
					{/* Lado Esquerdo: Informações de Contato Direto */}
					<div className="lg:col-span-5 flex flex-col gap-6">
						<div className="flex flex-col gap-2">
							<span className="text-xs font-bold uppercase tracking-widest text-[#567CAB]">Atendimento Executivo</span>
							<h2 className="text-2xl sm:text-3xl font-extrabold text-[#131727] tracking-tight">
								Como prefere falar conosco?
							</h2>
							<p className="text-sm text-slate-600 leading-relaxed">
								Escolha o canal mais ágil para você. Atendemos empresas em todo o Brasil.
							</p>
						</div>

						<div className="flex flex-col gap-4 mt-2">
							{/* WhatsApp Card */}
							<a
								href={whatsappUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-500 shadow-sm hover:shadow-md transition-all duration-300"
							>
								<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
									<FaWhatsapp size={24} />
								</div>
								<div className="flex flex-col">
									<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">WhatsApp Direto</span>
									<span className="text-base font-bold text-[#131727] group-hover:text-emerald-600 transition-colors">
										(47) 9 9707-1177
									</span>
									<span className="text-xs text-emerald-600 font-medium mt-0.5">
										Resposta rápida em horário comercial
									</span>
								</div>
							</a>

							{/* Email Card */}
							<a
								href="mailto:contato@domuspetra.com.br"
								className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#567CAB] shadow-sm hover:shadow-md transition-all duration-300"
							>
								<div className="w-12 h-12 rounded-xl bg-[#567CAB]/10 text-[#567CAB] flex items-center justify-center group-hover:bg-[#567CAB] group-hover:text-white transition-colors shrink-0">
									<Mail size={22} />
								</div>
								<div className="flex flex-col">
									<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
										E-mail Corporativo
									</span>
									<span className="text-base font-bold text-[#131727] group-hover:text-[#567CAB] transition-colors">
										contato@domuspetra.com.br
									</span>
									<span className="text-xs text-slate-500 mt-0.5">Envio de propostas e RFP</span>
								</div>
							</a>

							{/* Endereço Card */}
							<div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
								<div className="w-12 h-12 rounded-xl bg-slate-100 text-[#131727] flex items-center justify-center shrink-0">
									<MapPin size={22} />
								</div>
								<div className="flex flex-col">
									<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
										Sede Institucional
									</span>
									<span className="text-sm font-bold text-[#131727]">Rua Tangará, 470 - Iririú</span>
									<span className="text-xs text-slate-500">Joinville - SC | CEP: 89227-100</span>
								</div>
							</div>

							{/* Horário */}
							<div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
								<div className="w-12 h-12 rounded-xl bg-slate-100 text-[#131727] flex items-center justify-center shrink-0">
									<Clock size={22} />
								</div>
								<div className="flex flex-col">
									<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
										Horário de Atendimento
									</span>
									<span className="text-sm font-bold text-[#131727]">Segunda a Sexta-feira</span>
									<span className="text-xs text-slate-500">08:00 às 18:00</span>
								</div>
							</div>
						</div>

						{/* Redes Sociais */}
						<div className="pt-4 flex items-center gap-3">
							<span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Conecte-se:</span>
							<a
								href="https://www.instagram.com/fabianodellagnolo/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#567CAB] transition-colors shadow-sm"
							>
								<FaInstagram size={18} />
							</a>
							<a
								href="https://www.youtube.com/FabianoDellAgnoloDomusPetra"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-red-600 transition-colors shadow-sm"
							>
								<FaYoutube size={18} />
							</a>
							<a
								href="https://www.linkedin.com/in/fabianodellagnolo/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-[#0077B5] transition-colors shadow-sm"
							>
								<FaLinkedin size={18} />
							</a>
						</div>
					</div>

					{/* Lado Direito: Formulário */}
					<div className="lg:col-span-7 flex justify-center">
						<FormEmail />
					</div>
				</div>
			</section>

			{/* 3. MAPA DA SEDE */}
			<section className="max-w-7xl mx-auto pb-20 sm:pb-28 px-6 sm:px-8 lg:px-12">
				<div className="flex flex-col gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md">
					<div className="flex flex-col gap-1">
						<span className="text-xs font-bold uppercase tracking-widest text-[#567CAB]">Localização</span>
						<h3 className="text-xl font-bold text-[#131727]">Nossa Sede em Joinville - SC</h3>
					</div>

					<div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200">
						<iframe
							id="gmap_canvas"
							title="Localização Domus Petra Joinville"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.510832107383!2d-48.8281638!3d-26.277535000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb1d9a1eef5ff%3A0xd33f3386506a2c5f!2sRua%20Tangar%C3%A1%2C%20470%20-%20Iriri%C3%BA%2C%20Joinville%20-%20SC%2C%2089227-100!5e0!3m2!1spt-BR!2sbr!4v1721228787904!5m2!1spt-BR!2sbr"
							loading="lazy"
							className="w-full h-full border-0"
						/>
					</div>
				</div>
			</section>
		</main>
	)
}
