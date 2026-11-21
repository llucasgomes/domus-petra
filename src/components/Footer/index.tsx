'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from 'react-icons/fa'

export const redes_sociais = [
	{
		rede_social: 'Instagram',
		icon: <FaInstagram size={22} />,
		link: 'https://www.instagram.com/fabianodellagnolo/'
	},
	{
		rede_social: 'Facebook',
		icon: <FaFacebook size={22} />,
		link: 'https://m.facebook.com/fabiano.dellagnolo/'
	},
	{
		rede_social: 'Email',
		icon: <FaEnvelope size={22} />,
		link: 'mailto:contato@domuspetra.com.br'
	},
	{
		rede_social: 'YouTube',
		icon: <FaYoutube size={22} />,
		link: 'https://www.youtube.com/FabianoDellAgnoloDomusPetra'
	}
]

const quickLinks = [
	{ name: 'Início', href: '/' },
	{ name: 'Sobre Nós', href: '/about' },
	{ name: 'Nossos Serviços', href: '/services' },
	{ name: 'Blog & Artigos', href: '/blog' },
	{ name: 'Fale Conosco', href: '/contacts' }
]

export const Footer = () => {
	const pathname = usePathname()

	if (pathname?.startsWith('/dashboard')) {
		return null
	}

	return (
		<footer className="w-full bg-[#131727] text-white border-t border-white/10 pt-16 pb-10">
			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
					{/* Col 1: Logo & Mission */}
					<div className="flex flex-col items-start gap-4">
						<Link href="/" className="inline-block transition-transform hover:scale-105">
							<Image
								src="/logo/logoWhite.png"
								alt="Domus Petra"
								width={200}
								height={55}
								className="h-10 w-auto object-contain"
							/>
						</Link>
						<p className="text-sm text-slate-300 leading-relaxed max-w-sm mt-1">
							Especialistas em consultoria empresarial, treinamentos de alta performance e palestras corporativas.
							Transformando pessoas e processos com excelência e método.
						</p>
						<div className="flex items-center gap-3 mt-2">
							{redes_sociais.map(item => (
								<Link
									key={item.link}
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={item.rede_social}
									className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#567CAB] hover:border-[#567CAB] transition-all"
								>
									{item.icon}
								</Link>
							))}
						</div>
					</div>

					{/* Col 2: Links Rápidos */}
					<div className="flex flex-col items-start gap-3">
						<h3 className="text-base font-bold uppercase tracking-wider text-[#93B3DA]">Navegação</h3>
						<ul className="flex flex-col gap-2 mt-1">
							{quickLinks.map(link => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-slate-300 hover:text-white hover:translate-x-1 inline-flex transition-all"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Col 3: Soluções */}
					<div className="flex flex-col items-start gap-3">
						<h3 className="text-base font-bold uppercase tracking-wider text-[#93B3DA]">Soluções</h3>
						<ul className="flex flex-col gap-2 mt-1 text-sm text-slate-300">
							<li>
								<Link href="/services" className="hover:text-white transition-colors">
									Consultoria em Gestão
								</Link>
							</li>
							<li>
								<Link href="/services" className="hover:text-white transition-colors">
									Treinamentos Operacionais
								</Link>
							</li>
							<li>
								<Link href="/services" className="hover:text-white transition-colors">
									Palestras Motivacionais
								</Link>
							</li>
							<li>
								<Link href="/services" className="hover:text-white transition-colors">
									Lean Manufacturing & 5S
								</Link>
							</li>
							<li>
								<Link href="/services" className="hover:text-white transition-colors">
									Solução Eficaz de Problemas
								</Link>
							</li>
						</ul>
					</div>

					{/* Col 4: Contato */}
					<div className="flex flex-col items-start gap-3">
						<h3 className="text-base font-bold uppercase tracking-wider text-[#93B3DA]">Contato</h3>
						<ul className="flex flex-col gap-3 mt-1 text-sm text-slate-300">
							<li className="flex items-start gap-3">
								<FaMapMarkerAlt className="text-[#93B3DA] mt-1 shrink-0" />
								<span>Rua Tangará, 470 - Iririú, Joinville - SC</span>
							</li>
							<li>
								<a href="tel:+5547997071177" className="flex items-center gap-3 hover:text-white transition-colors">
									<FaPhoneAlt className="text-[#93B3DA] shrink-0" />
									<span>(47) 9 9707-1177</span>
								</a>
							</li>
							<li>
								<a
									href="mailto:contato@domuspetra.com.br"
									className="flex items-center gap-3 hover:text-white transition-colors"
								>
									<FaEnvelope className="text-[#93B3DA] shrink-0" />
									<span>contato@domuspetra.com.br</span>
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
					<p className="text-center sm:text-left">
						© {new Date().getFullYear()} <strong className="text-white font-medium">Domus Petra</strong> • Fabiano
						Dell&apos;Agnolo. Todos os direitos reservados.
					</p>
					<p className="text-center sm:text-right text-slate-500">
						Desenvolvido com excelência para potencializar negócios.
					</p>
				</div>
			</div>
		</footer>
	)
}
