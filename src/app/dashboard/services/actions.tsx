'use client'
import { Turma } from '@/@types'
import { Row } from '@tanstack/react-table'
import { Edit, ScanEye } from 'lucide-react'
import { ActionSheet } from './ActionSheet'

interface ButtonsActionsProps<TData extends Turma> {
  row: Row<TData>
  onEdit?: boolean
  onView?: boolean
}

export const ButtonsActions = <TData extends Turma>({
  row,
  onEdit,
  onView
}: ButtonsActionsProps<TData>) => {
  return (
    <div className="flex gap-4 px-3">
      {onEdit && (
        <ActionSheet data={row}>
          <Edit size={24} className="hover:cursor-pointer" />
        </ActionSheet>
      )}
      {onView && (
        <ActionSheet data={row} isDisable>
          <ScanEye size={24} className="hover:cursor-pointer" />
        </ActionSheet>
      )}
    </div>
  )
}
