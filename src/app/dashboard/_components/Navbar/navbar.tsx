'use client'

import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="flex w-full items-center justify-between rounded-xl bg-[#577DAC] p-5">
      <div className="font-bold capitalize text-white">
        {pathname.split('/').pop()?.replace('-', ' ')}
      </div>
    </div>
  )
}

export default Navbar
