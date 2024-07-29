'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Service } from '@prisma/client'
import { UserRoundPen } from 'lucide-react'

export const Editar = ({ service }: { service: Service }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <UserRoundPen />
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader className="mb-6">
          <SheetTitle>{'user.name'}</SheetTitle>
          <SheetDescription>{service.subtitle}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
