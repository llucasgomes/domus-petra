import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'

type DepoimentoProps = {
  name: string
  empresa: string
  image: string
  comentario: string
}
export const CommentUser = ({ data }: { data: DepoimentoProps }) => {
  return (
    <blockquote className="max-w-[450px]">
      <Card className="relative border-none bg-transparent">
        <CardHeader className="flex w-full flex-row items-center justify-between gap-3">
          <cite className="flex flex-1 flex-col items-end gap-1">
            <CardTitle className="text-left text-lg font-bold leading-none text-black">
              {data.name}
            </CardTitle>
            <CardDescription className="font-medium text-black">
              {'Gerente de compras'}
            </CardDescription>
          </cite>
        </CardHeader>
        <CardContent className="mt-3">
          <p className="text-lg text-[#131727] md:text-base lg:text-xl">
            <cite>
              <q>{data.comentario}</q>
            </cite>
          </p>
        </CardContent>
        <CardFooter className="justify-start">
          <p className="text-right text-lg font-semibold uppercase">
            {data.empresa}
          </p>
        </CardFooter>
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-[#577DAC] drop-shadow-2xl"></div>
        <Image
          alt=""
          src={'/outros/Vector.png'}
          width={70}
          height={70}
          className="absolute left-5 top-5 -z-[5]"
        />
        <Image
          alt=""
          src={'/outros/vector-right.png'}
          width={100}
          height={100}
          className="absolute bottom-5 right-5 -z-[5] opacity-85"
        />
      </Card>
    </blockquote>
  )
}
