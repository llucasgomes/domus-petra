import { poppis } from '@/app/_ui/fonts'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CarroselNovidades } from '../novidades/carrosel'

export const Novidades = () => {
	return (
		<section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-[#2B355A] via-[#3C5778] to-[#2B355A]">
			<div className="max-w-7xl mx-auto flex flex-col gap-8 relative z-10">
				{/* Section Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
					<div className="flex flex-col gap-2">
						<span className="text-xs font-bold uppercase tracking-wider text-[#93B3DA]">Artigos & Insights</span>
						<h2 className={`${poppis.className} text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white`}>
							Novidades da Domus Petra
						</h2>
						<p className="text-sm sm:text-base text-slate-200 max-w-xl">
							Fique por dentro das melhores práticas em gestão, liderança, eficiência operacional e metodologia
							japonesa.
						</p>
					</div>

					<Link
						href="/blog"
						className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 rounded-lg transition-all w-fit"
					>
						Ver todos os artigos
						<ArrowRight size={16} />
					</Link>
				</div>

				{/* Carousel */}
				<div className="w-full mt-4">
					<CarroselNovidades />
				</div>
			</div>

			{/* Decorative Background Text */}
			<p
				aria-hidden="true"
				className={`${poppis.className} pointer-events-none select-none absolute -bottom-10 right-4 -z-0 text-7xl sm:text-9xl md:text-[180px] lg:text-[220px] font-black uppercase text-white/[0.04] leading-none`}
			>
				Novidades
			</p>
		</section>
	)
}
