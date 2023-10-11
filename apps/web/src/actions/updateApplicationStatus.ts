'use server'

import { formSchemaCreateUser } from '@krowdforce/forms'
import { FormTypeCreateUser } from '@krowdforce/forms/createUser'
import {
  ApplicationStatus,
  EmployeeIdJobIdCompoundUniqueInput,
  UpdateApplicationDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { fetchGraphQLInfer } from '../app/util/fetch'

export async function updateApplicationStatus(formData: {
  status: ApplicationStatus
  employeeId_jobId: EmployeeIdJobIdCompoundUniqueInput
}) {
  const { status, employeeId_jobId } = formData

  const { data, error } = await fetchGraphQLInfer(UpdateApplicationDocument, {
    updateApplicationInput: { employeeId_jobId, status },
  })
  revalidateTag(namedOperations.Query.Users)
}
