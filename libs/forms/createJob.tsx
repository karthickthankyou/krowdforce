'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaCreateJob } from '.'

export type FormTypeCreateJob = z.infer<typeof formSchemaCreateJob>

export const useFormCreateJob = () =>
  useForm<FormTypeCreateJob>({
    resolver: zodResolver(formSchemaCreateJob),
  })

export const FormProviderCreateJob = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateJob()
  return <FormProvider {...methods}>{children}</FormProvider>
}

export default formSchemaCreateJob
