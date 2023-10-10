import { IconBuilding, IconQuestionMark, IconUser } from '@tabler/icons-react'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { ReactNode } from 'react'
import { authOptions } from '../../app/api/auth/authOptions'
import { cn } from '../../util'
import { Button } from '../atoms/button'

import { CopyToClipboard } from './CopyToClipboard'
import { Tooltip } from './Tooltip'

export const DilemmaBox = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={cn('p-10 bg-gray-200 h-full', className)}>{children}</div>
  )
}

export const EmployerDilemma = async () => {
  const user = await getServerSession(authOptions)

  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <Link href="/employer/createCompany">
        <DilemmaBox className="flex">
          <IconBuilding className="mr-2" /> Create new company
        </DilemmaBox>
      </Link>

      <DilemmaBox>
        <div>
          <div className="flex max-w-md">
            <IconUser className="mr-2" />{' '}
            <div className="space-y-2">
              <div>
                Ask your company representatives to add you as an employer.
              </div>
              <div>Share your unique ID with them.</div>
              {user?.user?.uid ? (
                <CopyToClipboard text={user.user.uid} />
              ) : (
                'Something went wrong while getting your uid.'
              )}
              <div className="flex justify-end">
                <Tooltip className="mt-6">
                  <p>Ok. This is a super lazy way to accomplish this.</p>
                  <p>
                    We may have some infrastructure in our DB schema that allows
                    to raise requests!
                  </p>
                  <p>But, we are good for now. This works too.</p>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </DilemmaBox>
    </div>
  )
}
