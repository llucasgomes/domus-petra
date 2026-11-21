import type { RoutesLink } from '@/@types'
import { BadgePlus, LayoutDashboard, Newspaper, Settings, Users } from 'lucide-react'

export const routesLink: RoutesLink[] = [
	{
		title: 'Visão Geral',
		path: '/dashboard',
		hole: ['admin'],
		icon: <LayoutDashboard size={20} />
	},
	{
		title: 'Serviços',
		path: '/dashboard/services',
		hole: ['admin'],
		icon: <Settings size={20} />
	},
	{
		title: 'Usuários',
		path: '/dashboard/users',
		hole: ['admin'],
		icon: <Users size={20} />
	},
	{
		title: 'Posts & Blog',
		path: '/dashboard/posts',
		hole: ['admin'],
		icon: <Newspaper size={20} />
	},
	{
		title: 'Novo Post',
		path: '/dashboard/new-post',
		hole: ['admin'],
		icon: <BadgePlus size={20} />
	}
]
