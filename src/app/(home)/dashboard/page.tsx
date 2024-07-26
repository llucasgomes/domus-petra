'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function Page() {
  const { status, data } = useSession()

  !data && redirect('/')
  const rafael = 'rafarz76dev@gmail.com'
  const lucas = 'lucas.gomes.manaus@gmail.com'
  const amanda = 'amanda.spitzner@gmail.com'

  if (
    data?.user?.email != rafael &&
    data?.user?.email != lucas &&
    data?.user?.email != amanda
  ) {
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
