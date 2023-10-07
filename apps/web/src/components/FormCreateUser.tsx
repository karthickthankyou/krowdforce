'use client'

import {
  FormTypeCreateUser,
  formSchemaCreateUser,
} from '../../../../libs/forms/createUser'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { createUser } from '../actions/createUser'

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
