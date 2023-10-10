'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaCreateCompany } from '.'

export type FormTypeCreateCompany = z.infer<typeof formSchemaCreateCompany>

export const useFormCreateCompany = () =>
  useForm<FormTypeCreateCompany>({
    resolver: zodResolver(formSchemaCreateCompany),
  })

export const FormProviderCreateCompany = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateCompany()
  return <FormProvider {...methods}>{children}</FormProvider>
}

export default formSchemaCreateCompany
