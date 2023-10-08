'use client'
import React from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ReactNode } from 'react'
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
