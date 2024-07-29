'use client'
import { Button } from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'
import { signOut } from 'next-auth/react'

export const DashLogOut = () => {
  return (
    <Button
      className={`text-white'} mx-0 my-1 flex w-full items-center justify-start gap-3 rounded-sm bg-transparent p-3 font-semibold text-[--text-secundary] hover:bg-[--bg-highlight] hover:text-white`}
      onClick={async () => await signOut()}
    >
      <LogOutIcon />
      Sair
    </Button>
  )
}
