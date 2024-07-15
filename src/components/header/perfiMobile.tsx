'use client'

import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { SheetTitle } from '../ui/sheet'

export const Perfil = () => {
  const user = false

  const email = 'lucas.gomes.manaus@gmail.com'
  return (
    <div
      className={`mb-3 flex items-center space-x-4 rounded-md border p-4 ${!user && 'bg-black'}`}
    >
      {user ? (
        <>
          <Avatar>
            <AvatarImage src={'data.user.image!'} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <SheetTitle>
              <p className="text-left text-sm font-medium leading-none">
                Lucas da Silva Gomes
              </p>
            </SheetTitle>

            <p className="text-left text-sm text-muted-foreground">
              {email.split('@')[0]}
            </p>
          </div>
        </>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={'/logoHorizontalWhite.png'}
            alt="Logo Domus Petra"
            width={150}
            height={95}
          />
        </div>
      )}
    </div>
  )
}
