'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaCreateEmployee } from '.'
import React from 'react'

export type FormTypeCreateEmployee = z.infer<typeof formSchemaCreateEmployee>

export const useFormCreateEmployee = () =>
  useForm<FormTypeCreateEmployee>({
    resolver: zodResolver(formSchemaCreateEmployee),
  })

export const FormProviderCreateEmployee = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateEmployee()
  return <FormProvider {...methods}>{children}</FormProvider>
}

export default formSchemaCreateEmployee
