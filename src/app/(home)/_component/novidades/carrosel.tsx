'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import { blog } from '@/lib/data'
import Autoplay from 'embla-carousel-autoplay'
import { CardNovidadeBlog } from './card'

export const CarroselNovidades = () => {
  return (
    <Carousel
      orientation="horizontal"
      className="h-auto w-full"
      plugins={[
        Autoplay({
          delay: 5000
        })
      ]}
    >
      <CarouselContent>
        {blog.map((post) => (
          <CarouselItem
            key={post.id}
            className="flex aspect-square items-center justify-center"
          >
            <CardNovidadeBlog key={post.id} post={post} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:flex md:hidden lg:flex" />
      <CarouselNext className="hidden sm:flex md:hidden lg:flex" />
    </Carousel>
  )
}
