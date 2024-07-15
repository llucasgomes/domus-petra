import Image from 'next/image'
import { MenuMobile } from './menuMobile'
import { NavHeader } from './nav'

export const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between bg-black px-6">
      <Image
        src={'/logoHorizontalWhite.png'}
        alt="Logo Domus Petra"
        width={170}
        height={50}
        className="h-[50px] w-[175px]"
      />
      <NavHeader />
      <div className="md:hidden">
        <MenuMobile />
      </div>
    </header>
  )
}
