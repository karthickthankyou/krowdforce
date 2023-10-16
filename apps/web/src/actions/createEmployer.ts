'use server'

import {
  CreateEmployerDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQL } from '../app/util/fetch'

export async function createEmployer({ uid }: { uid: string }) {
  try {
    const { data, error } = await fetchGraphQL({
      document: CreateEmployerDocument,
      variables: {
        createEmployerInput: {
          uid,
        },
      },
    })

    revalidateTag(namedOperations.Query.EmployerMe)
  } catch (error) {
    throw new Error('Something went wrong')
  }
}
