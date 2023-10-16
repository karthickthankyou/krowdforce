'use server'

import {
  AcceptOfferDocument,
  ApplicationStatus,
  CreateApplicationDocument,
  RemoveApplicationDocument,
  RemoveBookmarkDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { fetchGraphQL } from '../app/util/fetch'
import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/authOptions'

export async function createApplication({ jobId }: { jobId: number }) {
  const user = await getServerSession(authOptions)

  if (!user?.user?.uid) {
    throw new Error('User uid not valid')
  }

  const { data, error } = await fetchGraphQL({
    document: CreateApplicationDocument,
    variables: {
      createApplicationInput: {
        employeeId: user.user.uid,
        jobId,
      },
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

  const { data, error } = await fetchGraphQL({
    document: RemoveApplicationDocument,
    variables: {
      where: {
        employeeId_jobId: {
          employeeId: user.user.uid,
          jobId,
        },
      },
    },
  })
  if (data?.removeApplication) {
    revalidateTag(namedOperations.Query.application)
    revalidateTag(namedOperations.Query.myApplications)
  }
}

export async function acceptOfferApplication({ jobId }: { jobId: number }) {
  const user = await getServerSession(authOptions)

  if (!user?.user?.uid) {
    throw new Error('User uid not valid')
  }

  const { data, error } = await fetchGraphQL({
    document: AcceptOfferDocument,
    variables: {
      updateApplicationInput: {
        employeeId_jobId: {
          employeeId: user.user.uid,
          jobId,
        },
        status: ApplicationStatus.Accepted,
      },
    },
  })

  if (data?.acceptOffer) {
    revalidateTag(namedOperations.Query.application)
    revalidateTag(namedOperations.Query.myApplications)
  }
}
