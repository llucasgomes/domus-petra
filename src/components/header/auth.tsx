'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from '../ui/button'

export const LogOut = () => {
  const { data } = useSession()
  return (
    <>{data && <Button onClick={async () => await signOut()}>Sair</Button>}</>
  )
}

export const LogIn = () => {
  const { data } = useSession()
  return (
    <>{!data && <Button onClick={async () => await signIn()}>Logar</Button>}</>
  )
}
