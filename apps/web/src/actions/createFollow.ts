'use server'

import {
  CreateFollowDocument,
  RemoveFollowDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { revalidateTag } from 'next/cache'
import { fetchGraphQL } from '../app/util/fetch'
import { getServerSession } from 'next-auth'
import { authOptions } from '../app/api/auth/authOptions'

export async function createFollow({ followingId }: { followingId: string }) {
  const user = await getServerSession(authOptions)
  if (!user?.user?.uid) {
    throw new Error('You are not logged in.')
  }

  const { data, error } = await fetchGraphQL({
    document: CreateFollowDocument,
    variables: {
      createFollowInput: {
        followerId: user.user.uid,
        followingId,
      },
    },
  })
  if (data?.createFollow) {
    revalidateTag(namedOperations.Query.follow)
    revalidateTag(namedOperations.Query.followedByMe)
    return data
  }
  return error
}

export async function removeFollow({ followingId }: { followingId: string }) {
  const user = await getServerSession(authOptions)
  if (!user?.user?.uid) {
    throw new Error('You are not logged in.')
  }

  const { data, error } = await fetchGraphQL({
    document: RemoveFollowDocument,
    variables: {
      where: {
        followerId_followingId: {
          followerId: user.user.uid,
          followingId,
        },
      },
    },
  })
  if (data?.removeFollow) {
    revalidateTag(namedOperations.Query.follow)
    revalidateTag(namedOperations.Query.followedByMe)
    return data
  }
  return error
}
