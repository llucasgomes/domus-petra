'use client'

import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { depoimentos } from '@/lib/data'
import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'
import { CommentUser } from './comment'

export const CarroselComments = () => {
	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)
	const [count, setCount] = React.useState(0)

	const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }))

	React.useEffect(() => {
		if (!api) return

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap())

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap())
		})
	}, [api])

	return (
		<div className="relative w-full max-w-xl mx-auto px-4">
			<Carousel
				setApi={setApi}
				orientation="horizontal"
				className="w-full"
				opts={{
					loop: true,
					align: 'center'
				}}
				plugins={[plugin.current]}
			>
				<CarouselContent className="py-4">
					{depoimentos.map(depo => (
						<CarouselItem key={depo.empresa} className="basis-full flex items-center justify-center">
							<CommentUser data={depo} />
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Carousel Controls */}
				<div className="flex items-center justify-center gap-6 mt-4">
					<CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white" />

					{/* Dots Indicator */}
					<div className="flex items-center gap-2">
						{Array.from({ length: count }, (_, i) => ({ id: `depo-dot-${i}`, index: i })).map(dot => (
							<button
								type="button"
								key={dot.id}
								onClick={() => api?.scrollTo(dot.index)}
								aria-label={`Ir para depoimento ${dot.index + 1}`}
								className={`h-2.5 rounded-full transition-all duration-300 ${
									current === dot.index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'
								}`}
							/>
						))}
					</div>

					<CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white" />
				</div>
			</Carousel>
		</div>
	)
}
