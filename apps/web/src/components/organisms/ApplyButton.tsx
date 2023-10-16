'use client'
import { FC, useCallback, useEffect, useState } from 'react'
import { cn } from '../../util'
import {
  ApplicationDocument,
  ApplicationQuery,
  ApplicationStatus,
} from '@krowdforce/network/src/generated'
import { useSession } from 'next-auth/react'
import { fetchGraphQL } from '../../app/util/fetch'
import {
  acceptOfferApplication,
  createApplication,
  removeApplication,
} from '../../actions/createApplication'
import { IconCheck } from '@tabler/icons-react'
import { Button } from '../atoms/button'

export const ApplyButton: FC<{
  className?: string
  jobId: number
}> = ({ className, jobId }) => {
  const user = useSession()

  const [application, setApplication] = useState<
    ApplicationQuery['application'] | null
  >()

  const fetchApplication = useCallback(async () => {
    if (user.data?.user?.uid) {
      const userApplication = await fetchGraphQL({
        document: ApplicationDocument,
        variables: {
          where: {
            employeeId_jobId: { employeeId: user.data.user.uid, jobId },
          },
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
    fetchApplication()
  }, [fetchApplication])

  if (!user.data?.user?.uid) {
    return null
  }

  if (!application?.employeeId) {
    return (
      <Button
        variant={'link'}
        className={cn('ml-2', className)}
        onClick={async () => {
          await createApplication({ jobId })
          fetchApplication()
        }}
      >
        Apply
      </Button>
    )
  } else {
    return (
      <div>
        <div className={cn('ml-2 flex items-center gap-1')}>
          <IconCheck />
          Applied
          <span className="text-gray text-xs">({application.status})</span>
        </div>
        {application.status === ApplicationStatus.Submitted ? (
          <button
            className={cn('ml-2', className)}
            onClick={async () => {
              await removeApplication({ jobId })
              fetchApplication()
            }}
          >
            Remove
          </button>
        ) : null}
        {application.status === ApplicationStatus.Offered ? (
          <button
            className={cn('ml-2', className)}
            onClick={async () => {
              await acceptOfferApplication({ jobId })
              fetchApplication()
            }}
          >
            Accept
          </button>
        ) : null}
      </div>
    )
  }
}
