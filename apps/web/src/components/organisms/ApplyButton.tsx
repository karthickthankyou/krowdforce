'use client'
import { FC, useCallback, useEffect, useState } from 'react'
import { cn } from '../../util'
import {
  ApplicationDocument,
  ApplicationQuery,
} from '@krowdforce/network/src/generated'
import { useSession } from 'next-auth/react'
import { fetchGraphQLNoAuth } from '../../app/util/fetchNoAuth'
import {
  createApplication,
  removeApplication,
} from '../../actions/createApplication'

export const ApplyButton: FC<{
  className?: string
  jobId: number
}> = ({ className, jobId }) => {
  const user = useSession()

  const [application, setApplication] = useState<
    ApplicationQuery['application'] | null
  >()

  const fetchBookmark = useCallback(async () => {
    if (user.data?.user?.uid) {
      const userApplication = await fetchGraphQLNoAuth(ApplicationDocument, {
        where: {
          employeeId_jobId: { employeeId: user.data.user.uid, jobId },
        },
      })
      if (userApplication.data) {
        setApplication(userApplication.data.application)
      } else {
        setApplication(null)
      }
    }
  }, [user.data?.user?.uid, jobId])

  useEffect(() => {
    fetchBookmark()
  }, [fetchBookmark])

  if (!user.data?.user?.uid) {
    return null
  }

  if (!application?.employeeId) {
    return (
      <button
        className={cn('ml-2', className)}
        onClick={async () => {
          await createApplication({ jobId })
          fetchBookmark()
        }}
      >
        Apply
      </button>
    )
  } else {
    return (
      <button
        className={cn('ml-2', className)}
        onClick={async () => {
          await removeApplication({ jobId })
          fetchBookmark()
        }}
      >
        Withdraw ({application.status})
      </button>
    )
  }
}
