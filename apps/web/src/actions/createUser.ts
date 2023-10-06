'use server'
import { fetchGraphQL } from '@/app/util/fetch'
import { FormTypeCreateUser, formSchemaCreateUser } from '@/forms/CreateUser'
import {
  CreateUserDocument,
  CreateUserMutation,
  CreateUserMutationVariables,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createUser(formData: FormTypeCreateUser) {
  const result = formSchemaCreateUser.safeParse(formData)

  if (result.success) {
    console.log('result. data', result.data)
    const { uid, name, image } = result.data
    const user = await fetchGraphQL<
      CreateUserMutationVariables,
      CreateUserMutation
    >({
      query: CreateUserDocument,
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
