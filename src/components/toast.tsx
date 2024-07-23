'use client'

import { Button } from './ui/button'
import { toast } from './ui/use-toast'

export const ButtonToast = () => {
  return (
    <Button
      className="bg-red-500"
      onClick={() => {
        toast({
          title: 'Lucas Gomes',
          description: 'Friday, February 10, 2023 at 5:57 PM',
          variant: 'destructive',
        })
      }}
    >
      Show Toast
    </Button>
  )
}

export const ButtonNew = () => {
  return <Button> Default</Button>
}
