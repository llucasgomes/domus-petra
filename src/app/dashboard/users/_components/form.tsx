'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { UPDATEUser } from '@/actions/user'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'
import { GlobalContext } from '@/contexts/GlobalContext'
import { useContext } from 'react'

const FormSchema = z.object({
  cargo: z.string({
    required_error: 'Selecione o tipo de permissão'
  })
})

export function SelectForm({ userId }: { userId: string }) {
  const { setUpdateUserList } = useContext(GlobalContext)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const { cargo } = data

    try {
      await UPDATEUser(userId, cargo)

      toast({
        title: 'Sucess!!',
        description: 'Usuario alterado com sucesso'
      })
      setUpdateUserList((prev) => {
        return !prev
      })
    } catch (_error) {
      toast({
        title: 'Failed!!',
        description: 'Falha ao alterar  cargo de usuário'
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="cargo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Permissão</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o cargo:" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin">admin</SelectItem>
                  <SelectItem value="user">user</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Alterar</Button>
      </form>
    </Form>
  )
}
