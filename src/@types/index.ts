import { ReactNode } from 'react'

export type RoutesLink = {
  title: string
  path: string
  hole: ('guest' | 'admin')[]

  icon: ReactNode
}
