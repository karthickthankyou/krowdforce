'use client'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { createFollow, removeFollow } from '../../actions/createFollow'
import { Button } from '../atoms/button'
import { fetchGraphQLStatic } from '../../app/util/fetchStatic'
import { FollowDocument, FollowQuery } from '@krowdforce/network/src/generated'

export const FollowButton = ({ followingId }: { followingId?: string }) => {
  const user = useSession()
  const [follow, setFollow] = useState<FollowQuery['follow'] | null>()
  const [loading, setLoading] = useState(false)
  const fetchFollow = useCallback(async () => {
    if (user.data?.user?.uid && followingId) {
      const followData = await fetchGraphQLStatic({
        document: FollowDocument,
        variables: {
          where: {
            followerId_followingId: {
              followerId: user.data.user.uid,
              followingId,
            },
          },
        },
      })
      if (followData.data) {
        setFollow(followData.data.follow)
      } else {
        setFollow(null)
      }
    }
  }, [user.data?.user?.uid, followingId])

  useEffect(() => {
    fetchFollow()
  }, [fetchFollow])

  if (!user.data?.user?.uid || !followingId) {
    return null
  }

  if (user.data.user.uid === followingId) {
    return <div>You</div>
  }

  if (follow?.id) {
    return (
      <Button
        variant={'outline'}
        aria-disabled={loading}
        onClick={async () => {
          setLoading(true)
          await removeFollow({ followingId })
          fetchFollow()
          setLoading(false)
        }}
      >
        Unfollow
      </Button>
    )
  }

  return (
    <Button
      variant={'outline'}
      onClick={async () => {
        setLoading(true)
        await createFollow({ followingId })
        fetchFollow()
        setLoading(false)
      }}
    >
      Follow
    </Button>
  )
}
