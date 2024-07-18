import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export const CommentUser = () => {
  return (
    <blockquote className="max-w-[350px]">
      <Card>
        <CardHeader className="flex w-full flex-row items-center justify-between gap-3">
          <div className="w-1/5">
            <Avatar>
              <AvatarImage src={'/'} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <cite className="flex flex-1 flex-col gap-1">
            <CardTitle className="text-left text-sm font-medium leading-none">
              {'Afonso Valentin Schwartz'}
            </CardTitle>
            <CardDescription className="font-bold">
              {'Gerente de compras'}
            </CardDescription>
          </cite>
        </CardHeader>
        <CardContent className="mt-3">
          <p className="text-lg">
            <cite>
              <q>
                {' '}
                Além de apresentar os métodos e ferramentas apropriadas,
                trabalhamos na análise de problemas reais de modo a aplicar na
                prática toda a teoria apresentada.
              </q>
            </cite>
          </p>
        </CardContent>
        <CardFooter className="justify-end">
          <p className="text-right font-semibold uppercase">Tigre SA</p>
        </CardFooter>
      </Card>
    </blockquote>
  )
}
