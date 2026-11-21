'use client'

import type { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import type { Service } from '@prisma/client'
import { Editar } from './_components/editar'

export const columns: ColumnDef<Service>[] = [
	{
		accessorKey: 'title',
		header: 'Serviço',
		cell: ({ row }) => (
			<div className="flex flex-col max-w-md">
				<span className="font-semibold text-slate-100 text-sm">{row.original.title}</span>
				<span className="text-xs text-slate-400 line-clamp-1">{row.original.subtitle}</span>
			</div>
		)
	},
	{
		accessorKey: 'category',
		header: 'Categoria',
		cell: ({ row }) => {
			const cat = row.original.category
			return (
				<Badge
					variant="outline"
					className="bg-[#567CAB]/15 text-[#93B3DA] border-[#567CAB]/30 font-medium text-xs uppercase tracking-wider"
				>
					{cat}
				</Badge>
			)
		}
	},
	{
		id: 'actions',
		header: 'Ações',
		cell: ({ row }) => <Editar service={row.original} />
	}
]
