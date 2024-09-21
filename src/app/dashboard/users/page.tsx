/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { GETUsers } from '@/actions/user'
import { GlobalContext } from '@/contexts/GlobalContext'
import { useContext, useEffect } from 'react'
import { columns } from './columns'
import { DataTable } from './data-table'

export default function Page() {
  const { setUserList, userList } = useContext(GlobalContext)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await await GETUsers()
        setUserList(result)
      } catch (error) {
        console.error('Erro ao buscar alunos:', error)
      }
    }

    fetchData()
  }, [setUserList])

  return (
    <div>
      <DataTable columns={columns} data={userList} />
    </div>
  )
}
