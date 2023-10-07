'use server'

import {
  CreateEmployerDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { fetchGraphQLInfer } from '../app/util/fetch'

import {
  FormTypeCreateEmployer,
  formSchemaCreateEmployer,
} from '@krowdforce/forms/createEmployer'

export async function createEmployer(
  formData: FormTypeCreateEmployer & { uid: string },
) {
  const result = formSchemaCreateEmployer.safeParse(formData)

  if (result.success) {
    console.log('result. data', result.data)
    const { companyName } = result.data

    try {
      const { data, error } = await fetchGraphQLInfer(CreateEmployerDocument, {
        createEmployerInput: {
          company: { name: companyName },
          uid: formData.uid,
        },
      })
      console.log('data,error ', data, error)
      revalidateTag(namedOperations.Query.EmployerMe)
    } catch (error) {
      throw new Error('Something went wrong')
    }
  } else {
    console.log(
      'result.error.flatten().fieldErrors',
      result.error.flatten().fieldErrors,
    )
    return { error: JSON.stringify(result.error.flatten().fieldErrors) }
  }
}
