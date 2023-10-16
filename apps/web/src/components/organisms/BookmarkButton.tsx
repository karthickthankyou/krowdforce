import { IconBookmark } from '@tabler/icons-react'
import { FC, useCallback, useEffect, useState } from 'react'
import { cn } from '../../util'
import {
  BookmarkDocument,
  BookmarkQuery,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { useSession } from 'next-auth/react'
import { fetchGraphQL } from '../../app/util/fetch'
import { createBookmark, removeBookmark } from '../../actions/createBookmark'

export const BookmarkButton: FC<{
  className?: string
  jobId: number
}> = ({ className, jobId }) => {
  const user = useSession()

  const [bookmark, setBookmark] = useState<BookmarkQuery['bookmark'] | null>()

  const fetchBookmark = useCallback(async () => {
    if (user.data?.user?.uid) {
      const userBookmark = await fetchGraphQL({
        document: BookmarkDocument,
        variables: {
          where: {
            employeeId_jobId: { employeeId: user.data.user.uid, jobId },
          },
        },
      })
      if (userBookmark.data) {
        setBookmark(userBookmark.data.bookmark)
      } else {
        setBookmark(null)
      }
    }
  }, [user.data?.user?.uid, jobId])

  useEffect(() => {
    fetchBookmark()
  }, [fetchBookmark])

  if (!user.data?.user?.uid) {
    return null
  }

  if (!bookmark?.employeeId) {
    return (
      <button
        className={cn('ml-2', className)}
        onClick={async () => {
          await createBookmark({ jobId })
          fetchBookmark()
        }}
      >
        <IconBookmark />
      </button>
    )
  } else {
    return (
      <button
        className={cn('ml-2', className)}
        onClick={async () => {
          await removeBookmark({ jobId })
          fetchBookmark()
        }}
      >
        <IconBookmark className={'fill-primary'} />
      </button>
    )
  }
}
