'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { SheetTitle } from '../ui/sheet'

export const Perfil = () => {
  const { data } = useSession()

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-none border border-transparent ${!data?.user && 'border-none bg-[--bg-highlight]'}`}
    >
      {data?.user ? (
        <>
          <Avatar className="h-30 w-30">
            <AvatarImage src={data.user.image!} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center justify-center space-y-1">
            <SheetTitle>
              <p className="text-left text-sm font-semibold uppercase leading-none text-white">
                {data.user.name!}
              </p>
            </SheetTitle>

            <p className="text-left text-sm text-muted-foreground text-white">
              {data.user.email!.split('@')[0]}
            </p>
          </div>
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={'/logo/logoWhite.png'}
            alt="Logo Domus Petra"
            width={150}
            height={95}
          />
        </div>
      )}
    </div>
  )
}
