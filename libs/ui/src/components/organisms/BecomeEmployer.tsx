'use client'
import { useForm } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  formSchemaCreateEmployer,
  FormTypeCreateEmployer,
} from '@krowdforce/forms/createEmployer'
import { createEmployer } from '@krowdforce/web/src/actions/createEmployer'
import Link from 'next/link'

export const BecomeEmployer = () => {
  const { register, handleSubmit, reset } = useForm<FormTypeCreateEmployer>({
    resolver: zodResolver(formSchemaCreateEmployer),
  })

  const { data: userData } = useSession()

  if (!userData?.user?.uid) {
    return <Link href='/api/auth/signin'>Sign in</Link>
  }
  const userUID = userData.user.uid

  return (
    <form
      onSubmit={handleSubmit(async ({ companyName }) => {
        await createEmployer({ companyName, uid: userUID })
        reset()
      })}
    >
      <input {...register('companyName')} placeholder='Company name' />
      <input type='submit' />
    </form>
  )
}
