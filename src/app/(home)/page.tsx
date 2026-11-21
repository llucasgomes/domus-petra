import { Clientes } from './_component/sections/Clientes'
import { Depoimentos } from './_component/sections/Depoimentos'
import { FabianoSobre } from './_component/sections/Fabiano'
import { Hero } from './_component/sections/Hero'
import { ImpactMetrics } from './_component/sections/ImpactMetrics'
import { Novidades } from './_component/sections/Novidades'
import { Services } from './_component/sections/Services'

export default function Home() {
	return (
		<main className="overflow-x-hidden">
			{/* SECTION HERO */}
			<Hero />
			{/* SECTION SOBRE O FABIANO */}
			<FabianoSobre />
			{/* SECTION METRICAS DE IMPACTO */}
			<ImpactMetrics />
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
