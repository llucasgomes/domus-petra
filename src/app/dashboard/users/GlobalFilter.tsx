import { Input } from '@/components/ui/input'
import { Dispatch, SetStateAction } from 'react'

type GlobalFilterProps = {
  globalFilter: string
  setGlobalFilter: Dispatch<SetStateAction<string>>
  placeholderFilter?: string
}

const GlobalFilter = ({
  globalFilter,
  setGlobalFilter,
  placeholderFilter
}: GlobalFilterProps) => {
  return (
    <Input
      value={globalFilter || ''}
      onChange={(e) => setGlobalFilter(e.target.value || '')}
      className="max-w-sm text-[--text-primary] placeholder:text-[--text-secundary]"
      placeholder={placeholderFilter}
    />
  )
}

export default GlobalFilter
