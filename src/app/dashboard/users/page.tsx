'use client'

import { GETUsers } from '@/actions/user'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { GlobalContext } from '@/contexts/GlobalContext'
import { Users } from 'lucide-react'
import { useContext, useEffect } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function Page() {
	const { setUserList, userList } = useContext(GlobalContext)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await GETUsers()
				setUserList(result)
			} catch (error) {
				console.error('Erro ao buscar usuários:', error)
			}
		}

		fetchData()
	}, [setUserList])

	return (
		<div className="space-y-6">
			{/* Cabeçalho da Página */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div>
					<h1 className="text-2xl lg:text-3xl font-heading font-bold text-white flex items-center gap-3">
						<Users className="text-[#93B3DA]" size={28} />
						Usuários & Permissões
					</h1>
					<p className="text-slate-400 text-sm mt-1">
						Gerencie os usuários registrados no sistema e seus privilégios de acesso administrativo.
					</p>
				</div>
			</div>

			{/* Card com a Tabela */}
			<Card className="bg-[#131727]/60 border-white/10 backdrop-blur-sm shadow-xl">
				<CardHeader className="pb-3 border-b border-white/5">
					<CardTitle className="text-lg text-white font-heading">Lista de Contas</CardTitle>
					<CardDescription className="text-slate-400">
						Total de {userList?.length || 0} contas cadastradas na base.
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-4">
					<DataTable columns={columns} data={userList ?? []} />
				</CardContent>
			</Card>
		</div>
	)
}
