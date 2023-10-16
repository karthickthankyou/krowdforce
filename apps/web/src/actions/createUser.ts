'use server'

import { formSchemaCreateUser } from '@krowdforce/forms'
import { FormTypeCreateUser } from '@krowdforce/forms/createUser'
import {
  CreateUserDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { fetchGraphQL } from '../app/util/fetch'

export async function createUser(formData: FormTypeCreateUser) {
  const result = formSchemaCreateUser.safeParse(formData)

  if (result.success) {
    console.log('result. data', result.data)
    const { uid, name, image } = result.data

    const { data, error } = await fetchGraphQL({
      document: CreateUserDocument,
      variables: {
        createUserInput: {
          uid,
          name,
          image,
        },
      },
    })
    revalidateTag(namedOperations.Query.Users)
    redirect('/')
  } else {
    console.log(
      'result.error.flatten().fieldErrors',
      result.error.flatten().fieldErrors,
    )
    return { error: JSON.stringify(result.error.flatten().fieldErrors) }
  }
}
