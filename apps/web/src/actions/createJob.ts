'use server'

import { formSchemaCreateJob } from '@krowdforce/forms'
import {
  CreateJobDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { fetchGraphQLInfer } from '../app/util/fetch'

type FormTypeCreateJob = z.infer<typeof formSchemaCreateJob>

export async function createJob(formData: FormTypeCreateJob) {
  const result = formSchemaCreateJob.safeParse(formData)

  if (result.success) {
    const {
      description,
      skills,
      status,
      title,
      type,
      address,
      companyId,
      end,
      salary,
      start,
      companyAddressId,
    } = result.data

    const { data, error } = await fetchGraphQLInfer(CreateJobDocument, {
      createJobInput: {
        description,
        status,
        title,
        type,
        companyId,
        end,
        salary,
        start,
        address,
        skills,
        companyAddressId,
      },
    })

    if (error) {
      console.log('error', error)
      throw new Error('Something went wrong')
    }
    revalidateTag(namedOperations.Query.EmployerJobs)
    redirect('/employer/jobs')
  } else {
    console.log(
      'result.error.flatten().fieldErrors',
      result.error.flatten().fieldErrors,
    )
    return { error: JSON.stringify(result.error.flatten().fieldErrors) }
  }
}
