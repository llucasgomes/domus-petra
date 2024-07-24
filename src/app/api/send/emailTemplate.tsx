interface EmailTemplateProps {
  name: string
  message: string
  email: string
  phone: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  email,
  phone
}) => (
  <div className="bg-slate-500">
    <h1 className="text-4xl font-bold">Ola eu sou , {name}!</h1>
    <p>{message}</p>
    <p> Meu Email para contato é {email}</p>
    <p> Meu Numero para contato é {phone}</p>
  </div>
)
