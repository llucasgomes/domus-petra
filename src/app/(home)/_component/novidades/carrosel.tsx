'use client'

import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { blog } from '@/lib/data'
import Autoplay from 'embla-carousel-autoplay'
import * as React from 'react'
import { CardNovidadeBlog } from './card'

export const CarroselNovidades = () => {
	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)
	const [count, setCount] = React.useState(0)

	const plugin = React.useRef(Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }))

	React.useEffect(() => {
		if (!api) return

		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap())

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap())
		})
	}, [api])

	return (
		<div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6">
			<Carousel
				setApi={setApi}
				opts={{
					align: 'start',
					loop: true
				}}
				plugins={[plugin.current]}
				className="w-full"
			>
				<CarouselContent className="-ml-4 sm:-ml-6 py-4">
					{blog.map(post => (
						<CarouselItem
							key={post.id}
							className="pl-4 sm:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 flex justify-center"
						>
							<CardNovidadeBlog post={post} />
						</CarouselItem>
					))}
				</CarouselContent>

				{/* Navigation Buttons */}
				<div className="flex items-center justify-between pt-4 sm:pt-6">
					<div className="flex items-center gap-2">
						{Array.from({ length: count }, (_, i) => ({ id: `post-dot-${i}`, index: i })).map(dot => (
							<button
								type="button"
								key={dot.id}
								onClick={() => api?.scrollTo(dot.index)}
								aria-label={`Ir para slide ${dot.index + 1}`}
								className={`h-2.5 rounded-full transition-all duration-300 ${
									current === dot.index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'
								}`}
							/>
						))}
					</div>

					<div className="flex items-center gap-2">
						<CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white" />
						<CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border-white/20 bg-white/10 hover:bg-white/20 text-white" />
					</div>
				</div>
			</Carousel>
		</div>
	)
}

// Keep export for backward compatibility if referenced elsewhere
export const CarouselSpacing = CarroselNovidades
