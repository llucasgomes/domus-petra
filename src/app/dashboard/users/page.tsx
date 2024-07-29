import { GETUsers } from '@/actions/user'
import { columns } from './columns'
import { DataTable } from './data-table'

export default async function Page() {
  const response = await await GETUsers()

  return (
    <div>
      <DataTable columns={columns} data={response} />
    </div>
  )
}
