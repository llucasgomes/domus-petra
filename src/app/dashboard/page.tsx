import { GETServices } from '@/actions/service'
import { GETUsers } from '@/actions/user'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function Page() {
  const users = await await GETUsers()
  const services = await await GETServices()
  return (
    <div className="mt-12 flex w-full items-center justify-center gap-6">
      <Card className="flex w-[300px] flex-col bg-[#577DAC]">
        <CardHeader className="flex w-full flex-col items-center justify-start">
          <CardTitle className="text-5xl text-white">{users.length}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center font-semibold text-white">
            Usuarios Cadastrados
          </p>
        </CardContent>
      </Card>
      <Card className="flex w-[300px] flex-col bg-[#577DAC]">
        <CardHeader className="flex w-full flex-col items-center justify-start">
          <CardTitle className="text-5xl text-white">
            {services.length}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center font-semibold text-white">
            Total de Serviços
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
