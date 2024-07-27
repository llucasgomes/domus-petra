import { RoutesLink } from '@/@types'
import { CalendarClock, Gauge, WalletCards } from 'lucide-react'

export const routesLink: RoutesLink[] = [
  {
    title: 'Novo Post',
    path: '/dashboard/new-post',
    hole: ['admin'],
    icon: <Gauge size={20} />
  },
  {
    title: 'Users',
    path: '/dashboard/users',
    hole: ['admin'],
    icon: <CalendarClock size={20} />
  },
  {
    title: 'Posts',
    path: '/dashboard/posts',
    hole: ['admin'],
    icon: <CalendarClock size={20} />
  },
  {
    title: 'Serviços',
    path: '/dashboard/services',
    hole: ['admin'],
    icon: <WalletCards size={20} />
  }
]
