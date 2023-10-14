'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Button } from '../atoms/button'
import { ReactNode } from 'react'
import { IconLoader } from '@tabler/icons-react'

export const SubmitButton = ({ children }: { children: ReactNode }) => {
  const { action, data, method, pending } = useFormStatus()
  console.log('action, data, method, pending', action, data, method, pending)
  return (
    <Button type="submit">
      {pending ? <IconLoader className="animate-spin" /> : children}
    </Button>
  )
}
