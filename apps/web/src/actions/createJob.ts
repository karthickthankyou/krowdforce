'use server'

import {
  CreateJobDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQLInfer } from '../app/util/fetch'
import { formSchemaCreateJob } from '@krowdforce/forms'
import { z } from 'zod'
import { redirect } from 'next/navigation'

type FormTypeCreateJob = z.infer<typeof formSchemaCreateJob>

export async function createJob(formData: FormTypeCreateJob) {
  console.log('formData ', formData)
  const result = formSchemaCreateJob.safeParse(formData)

  if (result.success) {
    console.log('result. data', result.data)
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
      },
    })
    console.log('createJob: data ,error ', data, error)
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
