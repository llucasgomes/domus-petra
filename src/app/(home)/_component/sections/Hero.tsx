import { ArrowRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
	return (
		<section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-24 pb-16 px-6 sm:px-8">
			{/* Video Background */}
			<video
				autoPlay
				muted
				loop
				playsInline
				className="absolute inset-0 -z-20 h-full w-full object-cover brightness-[0.35]"
				src="/videos/video-banner02.webm"
			/>

			{/* Subtle Gradient & Ambient Glow Overlays */}
			<div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-transparent to-[#131727]" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#567CAB]/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

			<div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 gap-6 sm:gap-8">
				{/* Brand Logo */}
				<div className="transition-transform duration-500 hover:scale-[1.02]">
					<Image
						alt="Logo Domus Petra"
						src="/logo/logoWhite.png"
						width={480}
						height={120}
						priority
						className="w-auto h-16 sm:h-24 md:h-28 object-contain drop-shadow-lg"
					/>
				</div>

				{/* Headline */}
				<div className="flex flex-col gap-3">
					<span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#93B3DA] bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 w-fit mx-auto">
						Consultoria • Treinamentos • Palestras
					</span>

					<h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
						<span className="text-[#93B3DA]">Aprimore</span> seu negócio e potencialize seus resultados
					</h1>

					<p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
						Soluções estratégicas em <strong>Melhoria Contínua</strong>, <strong>Lean Manufacturing</strong> e{' '}
						<strong>Desenvolvimento de Liderança</strong> para transformar sua empresa.
					</p>
				</div>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
					<Link
						href="/services"
						className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold text-white bg-[#567CAB] hover:bg-[#3E5A7D] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
					>
						Nossas Soluções
						<ArrowRight size={18} />
					</Link>

					<Link
						href="/contacts"
						className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all hover:-translate-y-0.5"
					>
						Fale com um Especialista
					</Link>
				</div>
			</div>

			{/* Down Indicator */}
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/60 animate-bounce pointer-events-none">
				<ChevronDown size={28} />
			</div>
		</section>
	)
}
