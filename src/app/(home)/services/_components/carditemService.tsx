import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Service } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'

export const CardItem = ({ service }: { service: Service }) => {
	return (
		<Link href={`/services/${service.category}/${service.id}`}>
			<Card className="flex border-transparent shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:h-96 md:max-w-[350px] md:flex-col lg:max-w-[390px]">
				<CardHeader className="hidden h-full p-0 md:flex">
					<Image
						src={service.image}
						width={300}
						height={300}
						alt={service.subtitle}
						className="h-full w-full rounded-tl-lg rounded-tr-lg object-cover object-center md:h-[250px] md:w-full"
					/>
				</CardHeader>
				<CardContent className="flex flex-col justify-start gap-2 pt-1 md:w-full">
					<CardTitle className="text-left text-base md:w-full">{service.title}</CardTitle>
					<CardDescription className="text-left text-sm md:w-full">{service.subtitle.slice(0, 70)}...</CardDescription>
				</CardContent>
			</Card>
		</Link>
	)
}
