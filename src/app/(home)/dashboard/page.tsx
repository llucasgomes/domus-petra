'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Page() {
  const { status, data } = useSession()

  !data && redirect('/')

  if (data?.user?.email != 'lucas.gomes.manaus@gmail.com') {
    redirect('/')
  }

  return (
    <div>
      {' '}
      <h1>pagina de dashboard</h1>
      <h1>{status}</h1>
    </div>
  )
}
