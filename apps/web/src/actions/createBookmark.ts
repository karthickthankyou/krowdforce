'use server'

import {
  CreateBookmarkDocument,
  RemoveBookmarkDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import { fetchGraphQLInfer } from '../app/util/fetch'
import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/authOptions'

export async function createBookmark({ jobId }: { jobId: number }) {
  const user = await getServerSession(authOptions)

  if (!user?.user?.uid) {
    throw new Error('User uid not valid')
  }

  const { data, error } = await fetchGraphQLInfer(CreateBookmarkDocument, {
    createBookmarkInput: {
      employeeId: user.user.uid,
      jobId,
    },
  })
  if (data?.createBookmark) {
    revalidateTag(namedOperations.Query.Bookmark)
    revalidateTag(namedOperations.Query.myBookmarks)
  }
}

export async function removeBookmark({ jobId }: { jobId: number }) {
  const user = await getServerSession(authOptions)

  if (!user?.user?.uid) {
    throw new Error('User uid not valid')
  }

  const { data, error } = await fetchGraphQLInfer(RemoveBookmarkDocument, {
    where: {
      employeeId_jobId: {
        employeeId: user.user.uid,
        jobId,
      },
    },
  })
  if (data?.removeBookmark) {
    revalidateTag(namedOperations.Query.Bookmark)
    revalidateTag(namedOperations.Query.myBookmarks)
  }
}
