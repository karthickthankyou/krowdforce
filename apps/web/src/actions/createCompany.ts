'use server'

import { formSchemaCreateCompany } from '@krowdforce/forms'
import {
  CreateCompanyDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { z } from 'zod'
import { fetchGraphQL } from '../app/util/fetch'
import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/authOptions'
import { redirect } from 'next/navigation'

type FormTypeCreateCompany = z.infer<typeof formSchemaCreateCompany>

export async function createCompany(formData: FormTypeCreateCompany) {
  const result = formSchemaCreateCompany.safeParse(formData)
  const user = await getServerSession(authOptions)
  const uid = user?.user?.uid

  if (!uid) {
    throw new Error('UID not valid.')
  }

  if (result.success) {
    const { name, address, description } = result.data

    const { data, error } = await fetchGraphQL({
      document: CreateCompanyDocument,
      variables: {
        createCompanyInput: {
          address,
          name,
          description,
          uid,
        },
      },
    })

    if (data?.createCompany) {
      revalidateTag(namedOperations.Query.EmployerMe)
      redirect('/employer')
    }
    if (error) {
      throw new Error('Something went wrong.')
    }
  } else {
    console.log(
      'result.error.flatten().fieldErrors',
      result.error.flatten().fieldErrors,
    )
    return { error: JSON.stringify(result.error.flatten().fieldErrors) }
  }
}
