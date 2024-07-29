'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { User } from '@prisma/client'
import { Editar } from './_components/editar'

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'image',
    header: 'Foto',
    cell: ({ row }) => (
      <Avatar className="h-14 w-14">
        <AvatarImage src={row.original.image!} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
  },
  {
    accessorKey: 'name',
    header: 'Nome'
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },

  {
    accessorKey: 'role',
    header: 'Permisssão'
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <Editar user={row.original} />
  }
]
