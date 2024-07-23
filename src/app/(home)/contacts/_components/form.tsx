'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: 'Mínimo de 5 caracters.'
    })
    .max(50, {
      message: 'Máximo de 50 caracteres.'
    }),
  email: z
    .string()
    .email({
      message: 'Deverá  ser do tipo Email'
    })
    .min(6, {
      message: 'Mínimo de 6 caracters.'
    })
    .max(30, {
      message: 'Máximo de 30 caracteres.'
    }),
  phone: z
    .string()
    .min(2, {
      message: 'Mínimo de 2 caracters.'
    })
    .max(30, {
      message: 'Máximo de 30 caracteres.'
    }),
  message: z.string().min(5, {
    message: 'Mínimo de 5 caracters.'
  })
})

export const FormEmail = () => {
  // Definir o formulário

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  })
  // Defina seu Handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await fetch(`https://hydra-domus-petra.vercel.app/api/resend`, {
      method: 'POST',
      body: JSON.stringify(values)
    })
      .then((res) => {
        console.log(res)

        form.reset()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:max-w-[400px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <div className="relative mb-5 mt-4">
                  <Input
                    placeholder="Nome completo"
                    className="w-full pl-8"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="absolute -bottom-4 right-4 text-[12px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormControl>
                <div className="relative mb-5 mt-4">
                  <Input
                    placeholder="Email"
                    className="w-full pl-8"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="absolute -bottom-4 right-4 text-[12px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Telefone"
                    className="w-full pl-8"
                    type="tel"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="absolute -bottom-4 right-4 text-[12px]" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormControl>
                <div className="relative mb-5 mt-4">
                  <Textarea
                    placeholder="Escreva sua mensage aqui....."
                    className="w-full pl-8"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage className="absolute -bottom-4 right-4 text-[12px]" />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" className="w-full">
            Enviar
          </Button>
        </div>
      </form>
    </Form>
  )
}
