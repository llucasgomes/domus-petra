/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export const CardItem = ({ service }) => {
  console.log('CATEGORIA: ', service.category)
  console.log('CID: ', service.id)

  return (
    <Link href={`/services/${service.category}/${service.id}`}>
      <Card className="flex h-32">
        <CardHeader className="h-full w-[110px] p-0">
          <Image
            src={service.image}
            width={300}
            height={300}
            alt={service.subtitle}
            className="h-full w-full rounded-bl-md rounded-tl-md object-cover object-center"
          />
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-start gap-2 pt-1">
          <CardTitle className="max-w-[220px] text-left text-base">
            {service.title}
          </CardTitle>
          <CardDescription className="max-w-[220px] text-left text-sm">
            {service.subtitle.slice(0, 70)}...
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}
