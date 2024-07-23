import Link from 'next/link'

export const NavHeader = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex w-full list-none gap-5">
        <Link
          href={'/'}
          className="cursor-pointer px-4 py-2 font-semibold text-white"
        >
          Home
        </Link>
        <Link
          href={'/contacts'}
          className="cursor-pointer px-4 py-2 font-semibold text-white"
        >
          Contato
        </Link>
        <Link
          href={'/services'}
          className="cursor-pointer px-4 py-2 font-semibold text-white"
        >
          Serviços
        </Link>
        <Link
          href={'/blog'}
          className="cursor-pointer px-4 py-2 font-semibold text-white"
        >
          Blog
        </Link>
        <Link
          href={'/about'}
          className="cursor-pointer px-4 py-2 font-semibold text-white"
        >
          Sobre
        </Link>
      </ul>
    </nav>
  )
}
