import { montserrat, poppis } from '@/app/_ui/fonts'
import { Award, CheckCircle2, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const FabianoSobre = () => {
	return (
		<section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-28 px-6 sm:px-8 lg:px-16 bg-gradient-to-b from-[#131727] via-[#2B355A] to-[#131727] flex items-center justify-center">
			{/* Ambient Glow */}
			<div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#567CAB]/15 rounded-full blur-3xl pointer-events-none -z-0" />
			<div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#93B3DA]/10 rounded-full blur-3xl pointer-events-none -z-0" />
			<div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">
				{/* Left Column: Text & Credentials */}
				<div className="flex flex-col gap-6 justify-center items-center md:items-start text-center md:text-left md:w-1/2">
					{/* Mobile Profile Photo */}
					<div className="md:hidden relative w-44 h-44 rounded-full overflow-hidden border-4 border-[#567CAB]/40 shadow-2xl mb-2">
						<Image
							alt="Fabiano Dell'Agnolo"
							src="/outros/profile-fabiano02.png"
							fill
							className="object-cover object-top"
							sizes="176px"
						/>
					</div>

					<div className="flex flex-col gap-1">
						<span className="text-xs font-bold uppercase tracking-widest text-[#93B3DA]">Liderança & Consultoria</span>
						<h2
							className={`${poppis.className} font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight`}
						>
							FABIANO <span className="text-[#93B3DA]">DELL&apos;AGNOLO</span>
						</h2>
					</div>

					<p className={`${montserrat.className} text-sm sm:text-base text-slate-200 leading-relaxed font-light`}>
						Com mais de <strong className="font-semibold text-white">20 anos de experiência</strong> na indústria
						(metal-mecânica e automotivo), certificado em <strong>Seis Sigma</strong> e <strong>ISO</strong>,
						especializou-se em <strong>Melhoria Contínua</strong> e <strong>Lean Manufacturing</strong>.
					</p>

					<p className={`${montserrat.className} text-sm sm:text-base text-slate-200 leading-relaxed font-light`}>
						Atua como consultor em gestão empresarial, impulsionando a eficiência e a implementação de métodos de alta
						performance. Atuou como Diretor Executivo na Secretaria de Planejamento Urbano de Joinville, liderando
						projetos sustentáveis e tecnológicos.
					</p>

					{/* Key Credentials / Highlights */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-2">
						<div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-lg">
							<CheckCircle2 size={16} className="text-[#93B3DA] shrink-0" />
							<span>Lean Manufacturing & Kaizen</span>
						</div>
						<div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-lg">
							<Award size={16} className="text-[#93B3DA] shrink-0" />
							<span>Certificação Seis Sigma & ISO</span>
						</div>
						<div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-lg">
							<CheckCircle2 size={16} className="text-[#93B3DA] shrink-0" />
							<span>Presidente do COMCITI</span>
						</div>
						<div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-white/5 border border-white/10 px-3.5 py-2.5 rounded-lg">
							<CheckCircle2 size={16} className="text-[#93B3DA] shrink-0" />
							<span>Colunista no Portal NSC Tech</span>
						</div>
					</div>

					<div className="pt-2">
						<Link
							href="/about"
							className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[#567CAB] hover:bg-[#3E5A7D] px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
						>
							Conheça a História da Domus Petra
							<ChevronRight size={16} />
						</Link>
					</div>
				</div>

				{/* Right Column: Desktop Photo */}
				<div className="relative hidden md:flex items-center justify-center md:w-1/2">
					<div className="relative w-full max-w-[460px] h-[520px] lg:h-[580px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-t from-[#131727] via-transparent to-transparent">
						<Image
							alt="Fabiano Dell'Agnolo - Consultor e Palestrante"
							src="/outros/profile-fabiano02.png"
							fill
							sizes="(max-width: 1024px) 50vw, 460px"
							className="object-cover object-top hover:scale-105 transition-transform duration-700"
							priority
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#131727] via-transparent to-transparent opacity-80" />
					</div>
				</div>
			</div>
		</section>
	)
}
