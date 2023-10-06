'use client'
import React, { ReactNode } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

import { z } from 'zod'
import {
  useForm,
  FieldValues,
  UseFormReturn,
  DefaultValues,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

type RenderPropChild<T extends FieldValues> = (
  methods: UseFormReturn<T>,
) => ReactNode

type FormProps<T extends FieldValues> = {
  schema: z.ZodSchema<T>
  defaultValues?: DefaultValues<T>
  children: RenderPropChild<T>
}

export const Form = <T extends FieldValues>({
  schema,
  defaultValues,
  children,
}: FormProps<T>) => {
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  })
  const { pending } = useFormStatus()

  return (
    <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
      {children(methods)}
      <button type='submit' aria-disabled={pending}>
        Submit
      </button>
    </form>
  )
}
