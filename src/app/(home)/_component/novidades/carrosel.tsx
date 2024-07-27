'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { blog } from '@/lib/data'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { CardNovidadeBlog } from './card'

export const CarroselNovidades = () => {
  return (
    <Carousel
      orientation="horizontal"
      className="mt-3 h-auto w-full md:hidden"
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

export function CarouselSpacing() {
  return (
    <Carousel
      className="cursor-grab md:w-[770px] lg:w-[900px]"
      plugins={[
        Autoplay({
          delay: 3000
        })
      ]}
    >
      <CarouselContent className="max-w-lg lg:-ml-1">
        {blog.map((item, index) => (
          <CarouselItem
            key={index}
            className="md:basis-2/3 lg:basis-2/3 lg:pl-1"
          >
            <div className="p-1">
              <Card className="h-[400px] max-w-lg">
                <CardHeader className="h-40 p-0">
                  <Image
                    src={item.capa_image}
                    width={150}
                    height={130}
                    alt="adsad"
                    className="h-full w-full rounded-md object-cover"
                  />
                </CardHeader>
                <CardContent className="place-items-left flex flex-col justify-center gap-2 pt-3">
                  <CardTitle className="text-left text-lg">
                    {item.title}
                  </CardTitle>
                  <CardDescription>
                    Treinamento no Japão, coordenado pela JICA (Japanese
                    International Cooperation Agency) em parceria com o
                    Sindipeças,
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex w-full justify-end">
                  <Link href={'#'}>ler</Link>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="md:hidden" />
      <CarouselNext className="md:hidden" />
    </Carousel>
  )
}
