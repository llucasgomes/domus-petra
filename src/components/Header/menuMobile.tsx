'use client'

import { BookOpen, Briefcase, HelpCircle, Home, LayoutDashboard, Mail, Menu, Phone } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet'
import { LogIn, LogOut } from './auth'
import { Perfil } from './perfiMobile'

const routes = [
	{ name: 'Início', route: '/', icon: Home },
	{ name: 'Sobre', route: '/about', icon: HelpCircle },
	{ name: 'Serviços', route: '/services', icon: Briefcase },
	{ name: 'Blog', route: '/blog', icon: BookOpen },
	{ name: 'Contatos', route: '/contacts', icon: Mail }
]

const adminEmails = ['lucas.gomes.manaus@gmail.com', 'amanda.spitzner@gmail.com', 'rafarz76dev@gmail.com']

export const MenuMobile = () => {
	const { data } = useSession()
	const pathname = usePathname()

	const isAdmin = data?.user?.email && adminEmails.includes(data.user.email)

	return (
		<Sheet>
			<SheetTrigger asChild>
				<button
					type="button"
					aria-label="Abrir Menu"
					className="p-2 text-white hover:text-[#93B3DA] transition-colors rounded-lg hover:bg-white/10 focus:outline-none"
				>
					<Menu size={28} />
				</button>
			</SheetTrigger>
			<SheetContent
				side="right"
				className="flex flex-col justify-between border-l border-white/10 bg-gradient-to-b from-[#131727] via-[#1B233D] to-[#131727] p-6 text-white overflow-y-auto"
			>
				<div>
					<SheetHeader className="mb-6 pb-4 border-b border-white/10">
						<Perfil />
					</SheetHeader>

					<nav className="mt-4">
						<ul className="flex flex-col gap-2">
							{routes.map(({ name, route, icon: Icon }) => {
								const isActive = route === '/' ? pathname === '/' : pathname?.startsWith(route)

								return (
									<li key={route}>
										<SheetClose asChild>
											<Link
												href={route}
												className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-base font-medium transition-all ${
													isActive
														? 'bg-[#567CAB] text-white font-semibold shadow-sm'
														: 'text-slate-200 hover:text-white hover:bg-white/10'
												}`}
											>
												<Icon size={20} className={isActive ? 'text-white' : 'text-[#93B3DA]'} />
												{name}
											</Link>
										</SheetClose>
									</li>
								)
							})}

							{isAdmin && (
								<li className="pt-2">
									<SheetClose asChild>
										<Link
											href="/dashboard"
											className="flex items-center gap-3.5 px-4 py-3 rounded-lg text-base font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 transition-all border border-amber-500/30"
										>
											<LayoutDashboard size={20} />
											Dashboard Admin
										</Link>
									</SheetClose>
								</li>
							)}
						</ul>
					</nav>
				</div>

				<div className="pt-6 border-t border-white/10 flex flex-col gap-4">
					<div className="flex flex-col gap-1.5 text-xs text-slate-300">
						<a href="tel:+5547997071177" className="flex items-center gap-2 hover:text-white transition-colors">
							<Phone size={14} className="text-[#93B3DA]" />
							(47) 9 9707-1177
						</a>
						<a
							href="mailto:contato@domuspetra.com.br"
							className="flex items-center gap-2 hover:text-white transition-colors"
						>
							<Mail size={14} className="text-[#93B3DA]" />
							contato@domuspetra.com.br
						</a>
					</div>

					<div className="flex items-center justify-center gap-4 text-slate-300 py-1">
						<a
							href="https://www.instagram.com/fabianodellagnolo/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="hover:text-white transition-colors"
						>
							<FaInstagram size={20} />
						</a>
						<a
							href="https://www.youtube.com/FabianoDellAgnoloDomusPetra"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="YouTube"
							className="hover:text-white transition-colors"
						>
							<FaYoutube size={22} />
						</a>
						<a
							href="https://www.linkedin.com/in/fabianodellagnolo/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="hover:text-white transition-colors"
						>
							<FaLinkedin size={20} />
						</a>
					</div>

					<div className="flex items-center justify-center pt-2">
						<SheetClose asChild>{data?.user ? <LogOut /> : <LogIn />}</SheetClose>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}
