'use server'

import {
  CreateEmployeeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQLInfer } from '../app/util/fetch'
import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/authOptions'
import { z } from 'zod'
import { formSchemaCreateEmployee } from '@krowdforce/forms'

type FormTypeCreateEmployee = z.infer<typeof formSchemaCreateEmployee>

export async function createEmployee({
  formData,
}: {
  formData: FormTypeCreateEmployee
}) {
  const result = formSchemaCreateEmployee.safeParse(formData)

  const user = await getServerSession(authOptions)
  if (!user?.user?.uid) {
    return {
      error: 'User not logged in.',
    }
  }

  if (result.success) {
    const { about, address, skills } = result.data
    const { data, error } = await fetchGraphQLInfer(CreateEmployeeDocument, {
      createEmployeeInput: {
        uid: user.user.uid,
        address,
        about,
        skills,
        contactInfo: result.data.contactInfo,
      },
    })
  }

  try {
    revalidateTag(namedOperations.Query.EmployerMe)
  } catch (error) {
    throw new Error('Something went wrong')
  }
}
