'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '../ui/button'

export const LogOut = () => {
  return (
    <Button variant={'outline'} onClick={async () => await signOut()}>
      Sair
    </Button>
  )
}
export const LogInMenuDesktop = () => {
  return (
    <Button
      className="h-9 bg-transparent"
      variant={'outline'}
      onClick={async () => await signIn()}
    >
      Logar
    </Button>
  )
}
export const LogOutMenuDesktop = () => {
  return (
    <Button
      className="h-9 bg-transparent"
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
    <>{!data && <Button onClick={async () => await signIn()}>Logar</Button>}</>
  )
}
