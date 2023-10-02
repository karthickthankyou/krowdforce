'use client'
import { Button } from '@krowdforce/ui/src/components/ui/button'
import { useToast } from '@krowdforce/ui/src/components/ui/use-toast'

export const ToastButton = () => {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: 'Scheduled: Catch up',
          description: 'Friday, February 10, 2023 at 5:57 PM',
        })
      }}
    >
      Show Toast
    </Button>
  )
}
