'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsAppButton = () => {
	const pathname = usePathname()
	const [showTooltip, setShowTooltip] = useState(false)

	// Don't show in dashboard
	if (pathname?.startsWith('/dashboard')) {
		return null
	}

	const phoneNumber = '5547997071177'
	const defaultMessage = encodeURIComponent(
		'Olá! Gostaria de saber mais sobre as consultorias e treinamentos da Domus Petra.'
	)
	const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`

	return (
		<div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
			{/* Speech bubble / Tooltip */}
			<div
				className={`hidden sm:flex items-center bg-[#131727] text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-xl border border-white/10 transition-all duration-300 ${
					showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
				}`}
			>
				<span>Fale conosco no WhatsApp</span>
				<div className="w-2 h-2 bg-[#131727] rotate-45 border-r border-b border-white/10 ml-2" />
			</div>

			{/* Button */}
			<a
				href={whatsappUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Conversar no WhatsApp"
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
				className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
			>
				{/* Radar ping animation */}
				<span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

				<FaWhatsapp size={30} />
			</a>
		</div>
	)
}
