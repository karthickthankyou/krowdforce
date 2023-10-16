'use server'

import {
  AddEmployerDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQL } from '../app/util/fetch'

export async function addEmployer({ uid }: { uid: string }) {
  const { data, error } = await fetchGraphQL({
    document: AddEmployerDocument,
    variables: {
      addEmployerInput: {
        uid,
      },
    },
  })
  if (data?.addEmployer) {
    revalidateTag(namedOperations.Query.CompanyEmployers)
  }
}
