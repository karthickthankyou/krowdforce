'use server'

import { formSchemaCreateEmployment } from '@krowdforce/forms'
import {
  CreateEmploymentDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { fetchGraphQL } from '../app/util/fetch'
import { FormTypeCreateEmployment } from '@krowdforce/forms/createEmployment'

export async function createEmployment(formData: FormTypeCreateEmployment) {
  const result = formSchemaCreateEmployment.safeParse(formData)
  console.log('result', result)

  if (!result.success) {
    console.log(
      'result.error.flatten().fieldErrors',
      result.error.flatten().fieldErrors,
    )
    return { error: JSON.stringify(result.error.flatten().fieldErrors) }
  }

  const { employeeId, startDate, jobId } = result.data

  const { data, error } = await fetchGraphQL({
    document: CreateEmploymentDocument,
    variables: {
      createEmploymentInput: {
        employeeId,
        startDate,
        jobId,
      },
    },
  })

  if (error) {
    console.log('error', error)
  }
  if (data?.createEmployment) {
    revalidateTag(namedOperations.Query.CompanyEmployees)
    revalidateTag(namedOperations.Query.companyApplications)
  }
}
