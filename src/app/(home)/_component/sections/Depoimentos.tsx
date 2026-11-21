import Image from 'next/image'
import { CarroselComments } from '../carrosel'

export const Depoimentos = () => {
	return (
		<section className="relative w-full py-16 sm:py-20 lg:py-28 px-6 sm:px-8 lg:px-16 overflow-hidden flex flex-col items-center justify-center">
			{/* Background Image & Gradient */}
			<Image
				alt="Fabiano Dell'Agnolo palestrando"
				src="/outros/bg-depoimentos.png"
				fill
				sizes="100vw"
				className="object-cover object-center brightness-40 -z-20"
			/>
			<div className="absolute inset-0 bg-gradient-to-b from-[#131727]/90 via-[#2B355A]/85 to-[#131727]/95 -z-10" />

			<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4 relative z-10 mb-8 sm:mb-12">
				<span className="text-xs font-bold uppercase tracking-wider text-[#93B3DA]">Resultados Comprovados</span>
				<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white">Depoimentos de Sucesso</h2>
				<p className="text-sm sm:text-base text-slate-200 max-w-xl">
					Descubra como nossa metodologia prática em consultoria e capacitação gera impacto duradouro em organizações de
					diversos segmentos.
				</p>
			</div>

			<div className="w-full max-w-3xl relative z-10">
				<CarroselComments />
			</div>
		</section>
	)
}
