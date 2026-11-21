'use client'

import Image from 'next/image'

export const clientes = [
	{ name: 'Joinvalle', src: '/clients/client-joinvalle.png' },
	{ name: 'Thyssenkrupp', src: '/clients/client-thyssenkrupp.png' },
	{ name: 'Sicoob', src: '/clients/client-sicoob.png' },
	{ name: 'Ágora Tech Park', src: '/clients/client-agoraparck.png' },
	{ name: 'ArcelorMittal', src: '/clients/client-acelormittal.png' },
	{ name: 'Santa Rita', src: '/clients/client-santarita.png' }
]

// Duplicate list for infinite smooth loop
const allClients = [...clientes, ...clientes, ...clientes]

export const Clientes = () => {
	return (
		<section className="w-full py-16 sm:py-20 bg-white border-y border-slate-100 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 sm:px-8 mb-10 text-center flex flex-col items-center gap-2">
				<span className="text-xs font-bold uppercase tracking-widest text-[#567CAB]">Confiança & Parceria</span>
				<h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-[#131727] tracking-tight">
					Empresas que Confiam no Nosso Trabalho
				</h2>
				<p className="text-xs sm:text-sm text-slate-500 max-w-lg">
					Líderes de mercado que transformaram sua gestão e operações com a Domus Petra.
				</p>
			</div>

			{/* Infinite Marquee Container */}
			<div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
				<div className="flex w-max animate-marquee gap-8 sm:gap-12 hover:[animation-play-state:paused] py-2">
					{allClients.map((cliente, index) => (
						<div
							key={`${cliente.name}-${index}`}
							className="flex items-center justify-center h-24 w-48 sm:w-56 px-6 py-4 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/80 hover:border-[#567CAB]/40 shadow-sm hover:shadow-md transition-all duration-300 group shrink-0"
						>
							<Image
								src={cliente.src}
								alt={`Logo da empresa ${cliente.name}`}
								width={150}
								height={60}
								className="max-h-12 w-auto object-contain grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
