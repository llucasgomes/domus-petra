'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { SheetTitle } from '../ui/sheet'
import { LogOut } from './auth'

export const Perfil = () => {
  const { data } = useSession()

  return (
    <div
      className={`mb-3 flex items-center space-x-4 rounded-md border p-4 ${!data?.user && 'border-none bg-[--bg-highlight]'}`}
    >
      {data?.user ? (
        <>
          <Avatar>
            <AvatarImage src={data.user.image!} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <SheetTitle>
              <p className="text-left text-sm font-medium leading-none">
                {data.user.name!}
              </p>
            </SheetTitle>

            <p className="text-left text-sm text-muted-foreground">
              {data.user.email!.split('@')[0]}
            </p>
          </div>
          <LogOut />
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={'/logo/logoHorizontalWhite.png'}
            alt="Logo Domus Petra"
            width={150}
            height={95}
          />
        </div>
      )}
    </div>
  )
}
