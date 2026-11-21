import { Activity, ArrowRight, Brain, CheckCircle2, Coins, Compass, HeartHandshake, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const fivePillars = [
	{
		icon: Brain,
		title: 'Mental',
		description: 'Clareza, discernimento, resiliência emocional e aprendizado contínuo.'
	},
	{
		icon: Activity,
		title: 'Física',
		description: 'Saúde, vitalidade, energia e disciplina para a jornada diária.'
	},
	{
		icon: Compass,
		title: 'Espiritual',
		description: 'Propósito existencial, valores sólidos, integridade e paz interior.'
	},
	{
		icon: HeartHandshake,
		title: 'Social',
		description: 'Empatia, conexões profundas, convivência em família e trabalho em equipe.'
	},
	{
		icon: Coins,
		title: 'Financeira',
		description: 'Segurança, sustentabilidade material e planejamento para o futuro.'
	}
]

export default function AboutPage() {
	return (
		<main className="w-full bg-white overflow-hidden">
			{/* 1. HERO SECTION */}
			<section className="relative w-full pt-32 pb-20 sm:pt-40 sm:pb-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#131727] via-[#1B233D] to-[#2B355A] text-white">
				{/* Ambient Glow */}
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#567CAB]/20 rounded-full blur-3xl pointer-events-none -z-0" />

				<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
					<span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#93B3DA] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-sm">
						<Sparkles size={14} />
						Filosofia & Identidade
					</span>

					<h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
						A Essência da <span className="text-[#93B3DA]">Domus Petra</span>
					</h1>

					<p className="text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light">
						Construindo fundamentos sólidos para o desenvolvimento pleno de pessoas e a evolução sustentável e eficiente
						das empresas.
					</p>
				</div>
			</section>

			{/* 2. O CONCEITO "DOMUS PETRA" */}
			<section className="w-full py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-white">
				<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
					<div className="flex flex-col gap-6 lg:w-1/2">
						<div className="flex flex-col gap-2">
							<span className="text-xs font-bold uppercase tracking-widest text-[#567CAB]">Origem & Significado</span>
							<h2 className="text-2xl sm:text-4xl font-extrabold text-[#131727] tracking-tight">
								A Metáfora da Casa Sobre a Rocha
							</h2>
						</div>

						<p className="text-base sm:text-lg text-slate-700 leading-relaxed">
							Nossa abordagem compara o ser humano a uma <strong>casa em construção perpétua</strong>. Uma estrutura que
							necessita ser constantemente aprimorada, fortalecida e restaurada.
						</p>

						<p className="text-base text-slate-600 leading-relaxed">
							Sob essa perspectiva, compreendemos que todo indivíduo precisa de <strong>sólidos fundamentos</strong>,{' '}
							<strong>bons pilares de sustentação</strong> e uma cobertura consciente e protetora. Acima de tudo, deve
							ser funcional, equilibrado e eficiente.
						</p>

						<blockquote className="p-5 rounded-xl bg-slate-50 border-l-4 border-[#567CAB] text-slate-800 italic text-base leading-relaxed">
							&ldquo;Contrariando o dito popular de que &lsquo;pau que nasce torto morre torto&rsquo;, nós afirmamos com
							convicção: o ser humano tem plena capacidade, inteligência e o dever de melhorar continuamente.&rdquo;
						</blockquote>

						<div className="flex items-center gap-3 text-[#2B355A] font-bold text-lg pt-2">
							<div className="w-2.5 h-2.5 rounded-full bg-[#567CAB]" />
							<span>O foco deve ser nas pessoas. Sempre!</span>
						</div>
					</div>

					{/* Imagem Ilustrativa 1 */}
					<div className="flex flex-col sm:flex-row gap-6 lg:w-1/2 items-center justify-center">
						<div className="relative group w-full max-w-sm rounded-2xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300">
							<Image
								src="/about/img1.png"
								alt="Conceito Domus Petra"
								width={393}
								height={306}
								className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
							/>
						</div>
						<div className="relative group w-full max-w-xs rounded-2xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 sm:mt-10">
							<Image
								src="/about/img2.png"
								alt="Evolução humana e melhoria contínua"
								width={354}
								height={256}
								className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* 3. PARA A EMPRESA: EFICIÊNCIA E CRESCIMENTO SUSTENTÁVEL */}
			<section className="w-full py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#2B355A] via-[#3C5778] to-[#2B355A] text-white relative overflow-hidden">
				{/* Glow */}
				<div className="absolute top-1/2 right-10 w-96 h-96 bg-[#93B3DA]/15 rounded-full blur-3xl pointer-events-none" />

				<div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
					{/* Imagem Empresa */}
					<div className="lg:w-1/2 flex justify-center">
						<div className="relative group w-full max-w-md rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-300">
							<Image
								src="/about/img3.png"
								alt="Eficiência Empresarial e Crescimento Sustentável"
								width={392}
								height={272}
								className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#131727]/60 via-transparent to-transparent pointer-events-none" />
						</div>
					</div>

					{/* Texto Empresa */}
					<div className="flex flex-col gap-6 lg:w-1/2">
						<div className="flex flex-col gap-2">
							<span className="text-xs font-bold uppercase tracking-widest text-[#93B3DA]">Para as Organizações</span>
							<h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
								Eficiência & Crescimento Sustentável
							</h2>
						</div>

						<p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
							A competitividade contemporânea é implacável e global. Não há mais espaço para baixa produtividade,
							desperdícios operacionais e perdas de tempo ou materiais.
						</p>

						<p className="text-base text-slate-200 leading-relaxed font-light">
							Por isso, a <strong>melhoria contínua</strong> dos processos produtivos e fluxos de trabalho precisa ser
							uma constante viva na rotina. Processos eficientes e a evolução consistente do desempenho são premissas
							indispensáveis para a perenidade do negócio.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
							<div className="flex items-center gap-2.5 text-sm bg-white/10 border border-white/15 px-3.5 py-2.5 rounded-lg">
								<CheckCircle2 size={16} className="text-[#93B3DA] shrink-0" />
								<span>Metodologias Lean & Kaizen</span>
							</div>
							<div className="flex items-center gap-2.5 text-sm bg-white/10 border border-white/15 px-3.5 py-2.5 rounded-lg">
								<CheckCircle2 size={16} className="text-[#93B3DA] shrink-0" />
								<span>Eliminação de Desperdícios</span>
							</div>
							<div className="flex items-center gap-2.5 text-sm bg-white/10 border border-white/15 px-3.5 py-2.5 rounded-lg">
								<CheckCircle2 size={16} className="text-[#93B3DA] shrink-0" />
								<span>Evolução Contínua de KPIs</span>
							</div>
							<div className="flex items-center gap-2.5 text-sm bg-white/10 border border-white/15 px-3.5 py-2.5 rounded-lg">
								<CheckCircle2 size={16} className="text-[#93B3DA] shrink-0" />
								<span>Foco em Pessoas & Processos</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 4. PARA O INDIVÍDUO: OS 5 PILARES DA FELICIDADE E QUALIDADE DE VIDA */}
			<section className="w-full py-16 sm:py-24 px-6 sm:px-8 lg:px-12 bg-slate-50">
				<div className="max-w-7xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
					<div className="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto">
						<span className="text-xs font-bold uppercase tracking-widest text-[#567CAB] bg-[#567CAB]/10 px-3.5 py-1.5 rounded-full">
							Para o Indivíduo
						</span>
						<h2 className="text-2xl sm:text-4xl font-extrabold text-[#131727] tracking-tight">
							Os 5 Pilares da Plenitude & Qualidade de Vida
						</h2>
						<p className="text-base text-slate-600 leading-relaxed">
							Felicidade não é um destino distante a ser alcançado no futuro; é a própria jornada vivida com equilíbrio,
							saúde e propósito no presente.
						</p>
					</div>

					{/* 5 Pilares Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
						{fivePillars.map(pillar => {
							const Icon = pillar.icon
							return (
								<div
									key={pillar.title}
									className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#567CAB]/60 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
								>
									<div className="w-14 h-14 rounded-xl bg-[#567CAB]/10 text-[#567CAB] group-hover:bg-[#567CAB] group-hover:text-white transition-colors flex items-center justify-center mb-4">
										<Icon size={26} />
									</div>
									<h3 className="text-lg font-bold text-[#131727] mb-2 group-hover:text-[#567CAB] transition-colors">
										{pillar.title}
									</h3>
									<p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
								</div>
							)
						})}
					</div>

					{/* Imagem de Encerramento dos Pilares */}
					<div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
						<Image
							src="/about/img4.png"
							alt="Gratidão e Equilíbrio de Vida"
							width={752}
							height={544}
							className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
						/>
					</div>
				</div>
			</section>

			{/* 5. CTA FINAL */}
			<section className="w-full py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-[#131727] text-white border-t border-white/10 text-center relative overflow-hidden">
				<div className="max-w-3xl mx-auto flex flex-col items-center gap-6 relative z-10">
					<h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
						Pronto para construir bases sólidas no seu negócio?
					</h2>
					<p className="text-base text-slate-300 max-w-xl">
						Conheça nossos programas customizados de consultoria e capacitação de equipes corporativas e industriais.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
						<Link
							href="/services"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-[#567CAB] hover:bg-[#3E5A7D] transition-all shadow-lg hover:shadow-xl hover:scale-105"
						>
							Conheça os Nossos Serviços
							<ArrowRight size={16} />
						</Link>
						<Link
							href="/contacts"
							className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all hover:scale-105"
						>
							Fale Conosco
						</Link>
					</div>
				</div>
			</section>
		</main>
	)
}
