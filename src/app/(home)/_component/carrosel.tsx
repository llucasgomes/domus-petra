'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { CommentUser } from './comment'

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
        <CarouselItem className="flex aspect-square items-center justify-center">
          <CommentUser />
        </CarouselItem>
        <CarouselItem className="flex aspect-square items-center justify-center">
          <CommentUser />
        </CarouselItem>
        <CarouselItem className="flex aspect-square items-center justify-center">
          <CommentUser />
        </CarouselItem>
        <CarouselItem className="flex aspect-square items-center justify-center">
          <CommentUser />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden sm:block" />
      <CarouselNext className="hidden sm:block" />
    </Carousel>
  )
}
