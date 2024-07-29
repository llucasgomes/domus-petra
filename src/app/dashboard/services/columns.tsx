'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Service } from '@prisma/client'
import { Editar } from './_components/editar'

export const columns: ColumnDef<Service>[] = [
  {
    accessorKey: 'title',
    header: 'Titulo'
  },
  {
    accessorKey: 'category',
    header: 'Tipo'
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <Editar service={row.original} />
  }
]
