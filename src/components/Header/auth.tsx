'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '../ui/button'

export const LogOut = () => {
  return (
    <Button
      variant={'outline'}
      className="border-none bg-transparent text-slate-50 hover:bg-transparent"
      onClick={async () => await signOut()}
    >
      Sair
    </Button>
  )
}
export const LogInMenuDesktop = () => {
  return (
    <Button
      className="h-9 border-transparent bg-transparent"
      variant={'outline'}
      onClick={async () => await signIn()}
    >
      Log in
    </Button>
  )
}
export const LogOutMenuDesktop = () => {
  return (
    <Button
      className="h-9 border-transparent bg-transparent"
      variant={'outline'}
      onClick={async () => await signOut()}
    >
      Sair
    </Button>
  )
}

export const LogIn = () => {
  const { data } = useSession()
  return (
    <>
      {!data && (
        <Button
          className="border-none bg-transparent text-slate-50 hover:bg-transparent"
          onClick={async () => await signIn()}
        >
          Log in
        </Button>
      )}
    </>
  )
}
