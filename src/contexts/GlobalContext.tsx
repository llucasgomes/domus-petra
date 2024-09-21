'use client'

import { User } from '@prisma/client'
import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState
} from 'react'

// Interface para o contexto

interface GlobalContextType {
  userList: User[]
  setUserList: Dispatch<SetStateAction<User[]>>
  updateUserList: boolean
  setUpdateUserList: Dispatch<SetStateAction<boolean>>
}

// Valores padrão para o contexto
const defaultContextValue: GlobalContextType = {
  userList: [],
  setUserList: () => {},
  updateUserList: false,
  setUpdateUserList: () => {}
}

export const GlobalContext =
  createContext<GlobalContextType>(defaultContextValue)

// Provedor do contexto
export const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userList, setUserList] = useState<User[]>([])
  const [updateUserList, setUpdateUserList] = useState<boolean>(false)

  return (
    <GlobalContext.Provider
      value={{ setUserList, updateUserList, userList, setUpdateUserList }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
