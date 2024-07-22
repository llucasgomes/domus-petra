'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { CommentUser } from './comment'

import { depoimentos } from '@/lib/data'
import Autoplay from 'embla-carousel-autoplay'

export const CarroselComments = () => {
  return (
    <Carousel
      orientation="horizontal"
      className="h-auto w-full"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {depoimentos.map((depo) => (
          <CarouselItem
            key={depo.empresa}
            className="flex aspect-square items-center justify-center"
          >
            <CommentUser data={depo} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:block" />
      <CarouselNext className="hidden sm:block" />
    </Carousel>
  )
}
