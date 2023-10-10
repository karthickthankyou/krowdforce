'use server'

import {
  CreateEmployeeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQLInfer } from '../app/util/fetch'
import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/authOptions'

export async function createEmployee() {
  const user = await getServerSession(authOptions)
  if (!user?.user?.uid) {
    return {
      error: 'User not logged in.',
    }
  }

  try {
    const { data, error } = await fetchGraphQLInfer(CreateEmployeeDocument, {
      createEmployeeInput: {
        uid: user.user.uid,
      },
    })

    revalidateTag(namedOperations.Query.EmployerMe)
  } catch (error) {
    throw new Error('Something went wrong')
  }
}
