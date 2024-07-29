import { RoutesLink } from '@/@types'
import { BadgePlus, Newspaper, Settings, User2 } from 'lucide-react'

export const routesLink: RoutesLink[] = [
  {
    title: 'Novo Post',
    path: '/dashboard/new-post',
    hole: ['admin'],
    icon: <BadgePlus size={20} />
  },
  {
    title: 'Users',
    path: '/dashboard/users',
    hole: ['admin'],
    icon: <User2 size={20} />
  },
  {
    title: 'Posts',
    path: '/dashboard/posts',
    hole: ['admin'],
    icon: <Newspaper size={20} />
  },
  {
    title: 'Serviços',
    path: '/dashboard/services',
    hole: ['admin'],
    icon: <Settings size={20} />
  }
]
