'use server'

import {
  AddEmployerDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQLInfer } from '../app/util/fetch'

export async function addEmployer({ uid }: { uid: string }) {
  const { data, error } = await fetchGraphQLInfer(AddEmployerDocument, {
    addEmployerInput: {
      uid,
    },
  })
  if (data?.addEmployer) {
    revalidateTag(namedOperations.Query.CompanyEmployers)
  }
}
