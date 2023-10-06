'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()
  console.log('pending', pending)
  return (
    <button type='submit' aria-disabled={pending}>
      Add
    </button>
  )
}
