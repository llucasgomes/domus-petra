import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type DashboardSidebarUserProps = {
	userImage?: string | null | undefined
	userHole: 'guest' | 'admin'
	userName: string | null | undefined
}

type UserRole = 'guest' | 'admin'

export const DashboardSidebarUser = ({
	userImage = '/noperson.png',
	userHole,
	userName = 'Administrador'
}: DashboardSidebarUserProps) => {
	const userRoles: { [key in UserRole]: string } = {
		guest: 'Convidado',
		admin: 'Administrador'
	}
	const userRoleText = userRoles[userHole]

	const initials = userName
		? userName
				.split(' ')
				.map(n => n[0])
				.slice(0, 2)
				.join('')
				.toUpperCase()
		: 'DP'

	return (
		<header className="mb-4 flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
			<Avatar className="h-10 w-10 ring-2 ring-[#567CAB]/50">
				<AvatarImage src={userImage || '/noperson.png'} alt={userName || 'Admin'} />
				<AvatarFallback className="bg-[#2B355A] text-white font-bold text-xs">{initials}</AvatarFallback>
			</Avatar>
			<div className="flex flex-col min-w-0 flex-1">
				<span className="font-semibold text-sm truncate text-white">{userName || 'Administrador'}</span>
				<div className="flex items-center gap-1.5 mt-0.5">
					<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
					<span className="text-xs text-slate-300 font-medium">{userRoleText}</span>
				</div>
			</div>
		</header>
	)
}
