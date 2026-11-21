'use client'

import { Button } from '@/components/ui/button'
import { Globe, LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

export const DashLogOut = () => {
	return (
		<div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-1.5">
			<Link
				href="/"
				className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all"
			>
				<Globe size={18} className="text-[#93B3DA]" />
				<span>Ver Site Público</span>
			</Link>
			<Button
				type="button"
				variant="ghost"
				className="flex w-full items-center justify-start gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-rose-300 hover:text-rose-200 hover:bg-rose-500/10 transition-all"
				onClick={async () => {
					try {
						await signOut({ callbackUrl: '/' })
					} catch {
						window.location.href = '/'
					}
				}}
			>
				<LogOutIcon size={18} />
				<span>Sair</span>
			</Button>
		</div>
	)
}
