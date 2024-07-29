import Image from 'next/image'

type DashboardSidebarUserProps = {
  userImage?: string | null | undefined
  userHole: 'guest' | 'admin'
  userName: string | null | undefined
}

type UserRole = 'guest' | 'admin'

export const DashboardSidebarUser = ({
  userImage = '/noperson.png',
  userHole,
  userName
}: DashboardSidebarUserProps) => {
  const userRoles: { [key in UserRole]: string } = {
    guest: 'Convidado',
    admin: 'Admin'
  }
  const userRoleText = userRoles[userHole]

  return (
    <header className="mt-5 flex items-center gap-5 text-white">
      <Image
        src={userImage ? userImage : '/noperson.png'}
        className="rounded-full object-cover"
        alt={`Foto de perfil do(a) ${userHole}, que se chama ${userName},que se encontra logado(a)`}
        width="50"
        height="50"
      />
      <div className="flex flex-col">
        <span className="font-medium">{userName && userName}</span>

        {userRoleText && (
          <span className="text-xs text-white">{userRoleText}</span>
        )}
      </div>
    </header>
  )
}
