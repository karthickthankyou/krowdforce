'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaCreateEmployer } from '.'

export type FormTypeCreateEmployer = z.infer<typeof formSchemaCreateEmployer>

export const useFormCreateEmployer = () =>
  useForm<FormTypeCreateEmployer>({
    resolver: zodResolver(formSchemaCreateEmployer),
  })

export const FormProviderCreateEmployer = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateEmployer()
  return <FormProvider {...methods}>{children}</FormProvider>
}

export default formSchemaCreateEmployer
