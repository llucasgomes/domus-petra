'use client'
import { GETUsers } from '@/actions/user'
import { User } from '@prisma/client'
import { useState } from 'react'

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([])

  const fetchUsers = async () => {
    try {
      const response = await await GETUsers()
      setUsers(response)
    } catch (error) {
      console.log(error)
    }
  }

  return { users, fetchUsers }
}
