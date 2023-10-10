'use server'

import {
  CreateApplicationDocument,
  RemoveApplicationDocument,
  RemoveBookmarkDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { fetchGraphQLInfer } from '../app/util/fetch'
import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/authOptions'

export async function createApplication({ jobId }: { jobId: number }) {
  const user = await getServerSession(authOptions)

  if (!user?.user?.uid) {
    throw new Error('User uid not valid')
  }

  const { data, error } = await fetchGraphQLInfer(CreateApplicationDocument, {
    createApplicationInput: {
      employeeId: user.user.uid,
      jobId,
    },
  })
  if (data?.createApplication) {
    revalidateTag(namedOperations.Query.application)
    revalidateTag(namedOperations.Query.myApplications)
  }
}

export async function removeApplication({ jobId }: { jobId: number }) {
  const user = await getServerSession(authOptions)

  if (!user?.user?.uid) {
    throw new Error('User uid not valid')
  }

  const { data, error } = await fetchGraphQLInfer(RemoveApplicationDocument, {
    where: {
      employeeId_jobId: {
        employeeId: user.user.uid,
        jobId,
      },
    },
  })
  if (data?.removeApplication) {
    revalidateTag(namedOperations.Query.application)
    revalidateTag(namedOperations.Query.myApplications)
  }
}
