import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchemaCreateEmployment } from '.'
import { FormProvider, useForm } from 'react-hook-form'

export type FormTypeCreateEmployment = z.infer<
  typeof formSchemaCreateEmployment
>
export const useFormCreateEmployment = () =>
  useForm<FormTypeCreateEmployment>({
    resolver: zodResolver(formSchemaCreateEmployment),
  })
