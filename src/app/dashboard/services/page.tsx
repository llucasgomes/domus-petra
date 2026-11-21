import { GETServices } from '@/actions/service'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase } from 'lucide-react'
import { columns } from './columns'
import { DataTable } from './data-table'

export const dynamic = 'force-dynamic'

export default async function Page() {
	const response = await GETServices()

	return (
		<div className="space-y-6">
			{/* Cabeçalho da Página */}
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div>
					<h1 className="text-2xl lg:text-3xl font-heading font-bold text-white flex items-center gap-3">
						<Briefcase className="text-[#93B3DA]" size={28} />
						Catálogo de Serviços
					</h1>
					<p className="text-slate-400 text-sm mt-1">
						Gerencie os serviços, consultorias e soluções apresentadas no portal Domus Petra.
					</p>
				</div>
			</div>

			{/* Card com a Tabela */}
			<Card className="bg-[#131727]/60 border-white/10 backdrop-blur-sm shadow-xl">
				<CardHeader className="pb-3 border-b border-white/5">
					<CardTitle className="text-lg text-white font-heading">Serviços Cadastrados</CardTitle>
					<CardDescription className="text-slate-400">
						Total de {response?.length || 0} serviços disponíveis no portfólio.
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-4">
					<DataTable columns={columns} data={response ?? []} />
				</CardContent>
			</Card>
		</div>
	)
}
