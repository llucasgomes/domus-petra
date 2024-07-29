'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { User } from '@prisma/client'
import { UserRoundPen } from 'lucide-react'
import { SelectForm } from './form'

export const Editar = ({ user }: { user: User }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <UserRoundPen />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader className="mb-6">
          <Avatar className="h-9 w-9">
            <AvatarImage src={user.image!} />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <SheetTitle>{user.name}</SheetTitle>
          <SheetDescription>
            Neste Modelo será apenas alterado a permissão: user ou admin
          </SheetDescription>
        </SheetHeader>
        <SelectForm userId={user.id} />
      </SheetContent>
    </Sheet>
  )
}
