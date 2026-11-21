'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2, Mail, MessageSquare, Phone, Send, User } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
	name: z
		.string()
		.min(3, { message: 'Por favor, informe seu nome completo.' })
		.max(80, { message: 'Nome muito longo.' }),
	email: z.string().email({ message: 'Informe um endereço de e-mail válido.' }),
	phone: z
		.string()
		.min(8, { message: 'Informe um número de telefone com DDD.' })
		.max(25, { message: 'Telefone inválido.' }),
	message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' })
})

export const FormEmail = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSent, setIsSent] = useState(false)
	const { toast } = useToast()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: ''
		}
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsSubmitting(true)
		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			})

			if (response.ok) {
				setIsSent(true)
				form.reset()
				toast({
					title: 'Mensagem enviada com sucesso!',
					description: 'Nossa equipe entrará em contato o mais breve possível.'
				})
			} else {
				toast({
					title: 'Erro ao enviar mensagem',
					description: 'Houve um problema ao enviar. Tente novamente ou nos chame no WhatsApp.',
					variant: 'destructive'
				})
			}
		} catch (err) {
			console.error('Form error:', err)
			toast({
				title: 'Falha na conexão',
				description: 'Não foi possível conectar ao servidor. Chame-nos no WhatsApp!',
				variant: 'destructive'
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	if (isSent) {
		return (
			<div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-2xl border border-slate-200 shadow-lg w-full max-w-lg">
				<div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
					<CheckCircle2 size={36} />
				</div>
				<h3 className="text-xl font-bold text-[#131727] mb-2">Mensagem Recebida!</h3>
				<p className="text-sm text-slate-600 mb-6 max-w-sm">
					Agradecemos pelo contato. O consultor Fabiano Dell Agnolo e a equipe da Domus Petra retornarão em breve.
				</p>
				<Button onClick={() => setIsSent(false)} className="bg-[#2B355A] hover:bg-[#131727] text-white">
					Enviar Outra Mensagem
				</Button>
			</div>
		)
	}

	return (
		<div className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-xl">
			<div className="mb-6">
				<h3 className="text-xl font-bold text-[#131727]">Envie-nos uma Mensagem</h3>
				<p className="text-xs sm:text-sm text-slate-500 mt-1">
					Preencha o formulário abaixo e responderemos rapidamente.
				</p>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs font-semibold text-slate-700">Nome Completo</FormLabel>
								<FormControl>
									<div className="relative">
										<User size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
										<Input
											placeholder="Ex: João da Silva"
											className="pl-10 h-11 border-slate-200 focus:border-[#567CAB]"
											{...field}
										/>
									</div>
								</FormControl>
								<FormMessage className="text-xs" />
							</FormItem>
						)}
					/>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-xs font-semibold text-slate-700">E-mail Corporativo</FormLabel>
									<FormControl>
										<div className="relative">
											<Mail size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
											<Input
												type="email"
												placeholder="nome@empresa.com.br"
												className="pl-10 h-11 border-slate-200 focus:border-[#567CAB]"
												{...field}
											/>
										</div>
									</FormControl>
									<FormMessage className="text-xs" />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-xs font-semibold text-slate-700">Telefone / WhatsApp</FormLabel>
									<FormControl>
										<div className="relative">
											<Phone size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
											<Input
												placeholder="(47) 99999-9999"
												className="pl-10 h-11 border-slate-200 focus:border-[#567CAB]"
												{...field}
											/>
										</div>
									</FormControl>
									<FormMessage className="text-xs" />
								</FormItem>
							)}
						/>
					</div>

					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-xs font-semibold text-slate-700">Como podemos ajudar sua empresa?</FormLabel>
								<FormControl>
									<div className="relative">
										<MessageSquare size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
										<Textarea
											placeholder="Descreva brevemente sua necessidade (ex: consultoria Lean, treinamento de 5S, palestra em convenção)..."
											className="pl-10 pt-3 min-h-[120px] border-slate-200 focus:border-[#567CAB]"
											{...field}
										/>
									</div>
								</FormControl>
								<FormMessage className="text-xs" />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						disabled={isSubmitting}
						className="w-full h-12 bg-[#2B355A] hover:bg-[#131727] text-white font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
					>
						{isSubmitting ? (
							<>
								<Loader2 size={18} className="animate-spin" />
								Enviando mensagem...
							</>
						) : (
							<>
								<Send size={18} />
								Enviar Mensagem
							</>
						)}
					</Button>
				</form>
			</Form>
		</div>
	)
}
