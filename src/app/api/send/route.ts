import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EmailTemplate } from './emailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message, phone } = await req.json()
  const firstName = name.split(' ')[0]

  try {
    await resend.emails.send({
      from: `${firstName} <lucasgomes.dev@resend.dev>`,
      to: ['lucas.gomes.manaus@gmail.com'],
      subject: 'Pagina de Contato Domus Petra',
      react: EmailTemplate({ name, message, email, phone }),
      text: ''
    })
    console.log('Email enviado')
    return NextResponse.json('Enviado')
  } catch (error) {
    console.log('error no route', error)
    return NextResponse.json({ Error: error, teste: name })
  }
}
