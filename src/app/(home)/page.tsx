import { Clientes } from './_component/sections/Clientes'
import { Depoimentos } from './_component/sections/Depoimentos'
import { FabianoSobre } from './_component/sections/Fabiano'
import { Hero } from './_component/sections/Hero'
import { Novidades } from './_component/sections/Novidades'
import { Services } from './_component/sections/Services'

export default function Home() {
  return (
    <main className="">
      {/* SECTION HERO */}
      <Hero />
      {/* SECTION SOBRE O FABIANO */}
      <FabianoSobre />
      {/* SECTION SERVIÇOS */}
      <Services />
      {/* SECTION NOVIDADES */}
      <Novidades />
      {/* SECTION CLIENTES */}
      <Clientes />
      {/* SECTION DEPOIMENTOS */}
      <Depoimentos />
    </main>
  )
}
