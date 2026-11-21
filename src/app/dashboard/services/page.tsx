import { GETServices } from '@/actions/service'
import { columns } from './columns'
import { DataTable } from './data-table'

export const dynamic = 'force-dynamic'

export default async function Page() {
	const response = await GETServices()
	return (
		<div>
			<DataTable columns={columns} data={response} />
		</div>
	)
}
