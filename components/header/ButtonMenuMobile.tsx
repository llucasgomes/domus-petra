'use client'

import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export const ButtonMenuResponsive = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu
          className="border-none focus:outline-none data-[state=open]:bg-transparent"
          size={36}
          color="#ffffff"
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when youre done.
          </SheetDescription>
        </SheetHeader>

        <SheetFooter>
          <SheetClose asChild>
            <p>Footer</p>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
