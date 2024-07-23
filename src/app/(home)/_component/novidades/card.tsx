import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

type CardNovidadeBlogProps = {
  id: string
  title: string
  subtitle: string
  capa_image: string
  assunto: string
  autor: string
  data_post: string
  video_youtube?: string
}

export const CardNovidadeBlog = ({ post }: { post: CardNovidadeBlogProps }) => {
  return (
    <Card className="relative h-[450px] min-w-56 max-w-96 p-0">
      <Badge
        variant={'destructive'}
        className="absolute left-0 top-2 z-10 m-0 w-auto rounded-l-none border-[--bg-highlight] px-3 py-2"
      >
        <p className="flex h-full w-full items-center justify-center">
          Ultimas Novidades
        </p>
      </Badge>
      <CardHeader className="h-52 w-full p-3">
        <Image
          src={post.capa_image}
          width={150}
          height={150}
          alt="adsad"
          className="h-full w-full rounded-md object-cover"
        />
      </CardHeader>
      <CardContent className="flex flex-col gap-4 p-3">
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{post.subtitle.slice(0, 170)}...</CardDescription>
      </CardContent>
      <CardFooter className="justify-end">
        <Link href={'/'} className="text-right font-semibold uppercase">
          Ler
        </Link>
      </CardFooter>
    </Card>
  )
}
