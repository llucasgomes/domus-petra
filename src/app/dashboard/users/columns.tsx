'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
