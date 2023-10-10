'use server'

import { formSchemaCreateEmployer } from '@krowdforce/forms'
import {
  CreateEmployerDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'
import { fetchGraphQLInfer } from '../app/util/fetch'

type FormTypeCreateEmployer = z.infer<typeof formSchemaCreateEmployer>

export async function createEmployer(
  formData: FormTypeCreateEmployer & { uid: string },
) {
  const result = formSchemaCreateEmployer.safeParse(formData)

  if (result.success) {
    const { companyName, address } = result.data

    try {
      const { data, error } = await fetchGraphQLInfer(CreateEmployerDocument, {
        createEmployerInput: {
          address,
          company: { name: companyName },
          uid: formData.uid,
        },
      })

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
