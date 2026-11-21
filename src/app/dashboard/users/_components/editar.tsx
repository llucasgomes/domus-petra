'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import type { User } from '@prisma/client'
import { UserRoundPen } from 'lucide-react'
import { SelectForm } from './form'

export const Editar = ({ user }: { user: User }) => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button
					type="button"
					className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
					aria-label={`Editar permissões de ${user.name}`}
				>
					<UserRoundPen size={18} />
				</button>
			</SheetTrigger>
			<SheetContent className="w-[400px] sm:w-[540px] bg-[#131727] text-white border-l border-white/10">
				<SheetHeader className="mb-6">
					<Avatar className="h-12 w-12 ring-2 ring-[#567CAB]">
						<AvatarImage src={user.image ?? undefined} />
						<AvatarFallback className="bg-[#2B355A] text-white">DP</AvatarFallback>
					</Avatar>
					<SheetTitle className="text-white text-xl">{user.name}</SheetTitle>
					<SheetDescription className="text-slate-400">
						Altere o nível de acesso e privilégios deste usuário no sistema.
					</SheetDescription>
				</SheetHeader>
				<SelectForm userId={user.id} />
			</SheetContent>
		</Sheet>
	)
}
