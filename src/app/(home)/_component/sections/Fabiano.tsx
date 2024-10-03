import { montserrat, poppis } from '@/app/_ui/fonts'
import Image from 'next/image'

export const FabianoSobre = () => {
	return (
		<section className="relative flex p-8 lg:px-16 flex-col-reverse md:flex-row h-screen w-full items-center justify-center bg-gradient-to-b from-[#131727] via-[#2b355a] to-[#131727]">
			<div className="flex flex-col gap-4 justify-center items-center md:w-1/2">
				<div className=" text-center">
					<h2 className={`${poppis.className} font-bold text-white text-4xl md:text-6xl text-center`}>FABIANO</h2>
					<h2 className={`${poppis.className} font-bold text-[#567cab] text-3xl`}>{"DELL'AGNOLO"}</h2>
				</div>
				<p className={`${montserrat.className} w-11/12 text-sm text-white text-center`}>
					Com mais de <span className="font-semibold">20 anos de experiência</span> na indústria, focado em
					metal-mecânica e automotivo, certificado em Seis Sigma e ISO, e especializado em
					<span className="font-semibold">Melhoria Contínua</span> e{' '}
					<span className="font-semibold">Lean Manufacturing</span>.
					<br />
					Atua como consultor em gestão empresarial, promovendo <span className="font-semibold">eficiência</span> e{' '}
					<span className="font-semibold">implementação de metodologias</span>. Diretor executivo na Secretaria de
					Planejamento Urbano de Joinville, liderando projetos de desenvolvimento sustentável e tecnológico.
					<br />
					Engajado em iniciativas de <span className="font-semibold">empreendedorismo e inovação</span>, como presidente
					do COMCITI e colunista no portal NSC Tech.
				</p>
			</div>
			<div className="relative w-1/2 bottom-0">
				<Image
					alt="homem de pele clara com cabelo curto e escuro, usando um terno cinza claro sobre uma camisa social azul clara. Ele está em pé, falando com um microfone de fone de ouvido preso à orelha e um controle remoto nas mãos. A expressão dele é séria e ele parece estar apresentando ou palestrando em um evento. O fundo é escuro, destacando a figura do homem."
					src={'/outros/profile-fabiano02.png'}
					width={750}
					height={750}
					className="hidden md:block md:h-screen"
				/>
			</div>
		</section>
	)
}
