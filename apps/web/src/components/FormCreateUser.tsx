'use client'

import { createUser } from '@/actions/createUser'
import { FormTypeCreateUser, formSchemaCreateUser } from '@/forms/CreateUser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const CreateUser = () => {
  const { register, handleSubmit, reset } = useForm<FormTypeCreateUser>({
    resolver: zodResolver(formSchemaCreateUser),
  })
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await createUser(data)
        reset()
      })}
    >
      <input {...register('uid')} placeholder='uid' />
      <input {...register('name')} placeholder='name' />
      <input {...register('email')} placeholder='email' />
      <input {...register('image')} placeholder='image' />
      <input {...register('count')} placeholder='count' />
      <input type='submit' />
    </form>
  )
}
