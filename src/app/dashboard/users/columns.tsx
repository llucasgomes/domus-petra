'use client'

import type { ColumnDef } from '@tanstack/react-table'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

import { Editar } from './_components/editar'

interface User {
	id: string
	name: string | null
	email: string | null
	emailVerified: Date | null
	role: string
	image: string | null
	createdAt: Date
	updatedAt: Date
}

export const columns: ColumnDef<User, unknown>[] = [
	{
		accessorKey: 'image',
		header: 'Usuário',
		cell: ({ row }) => {
			const name = row.original.name || 'Usuário'
			const initials = name
				.split(' ')
				.map(n => n[0])
				.slice(0, 2)
				.join('')
				.toUpperCase()

			return (
				<div className="flex items-center gap-3">
					<Avatar className="h-10 w-10 ring-1 ring-white/10">
						<AvatarImage src={row.original.image ?? undefined} alt={name} />
						<AvatarFallback className="bg-[#2B355A] text-white font-semibold text-xs">{initials}</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<span className="font-semibold text-slate-100 text-sm">{name}</span>
						<span className="text-xs text-slate-400">{row.original.email}</span>
					</div>
				</div>
			)
		}
	},
	{
		accessorKey: 'role',
		header: 'Permissão',
		cell: ({ row }) => {
			const role = row.original.role
			const isAdmin = role?.toLowerCase() === 'admin'

			return (
				<Badge
					variant="outline"
					className={
						isAdmin
							? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
							: 'bg-slate-700/30 text-slate-300 border-slate-600/30'
					}
				>
					{isAdmin ? 'Administrador' : 'Usuário'}
				</Badge>
			)
		}
	},
	{
		id: 'actions',
		header: 'Ações',
		cell: ({ row }) => <Editar user={row.original} />
	}
]
