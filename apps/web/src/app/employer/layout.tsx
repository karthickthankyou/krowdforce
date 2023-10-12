import {
  EmployerMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { createEmployer } from '../../actions/createEmployer'
import { authOptions } from '../api/auth/authOptions'
import { fetchGraphQLInfer } from '../util/fetch'
import { EmployerDilemma } from '../../components/organisms/EmployerDilemma'
import { EmployerMenu } from '../../components/organisms/EmployerMenu'
import { EmployerSidebar } from '../../components/molecules/EmployerSidebar'

export default async function EmployerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getServerSession(authOptions)

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }

  const { data, error } = await fetchGraphQLInfer(
    EmployerMeDocument,
    {},
    {
      next: {
        tags: [namedOperations.Query.EmployerMe],
      },
    },
  )

  if (!data?.employerMe?.uid) {
    await createEmployer({ uid: user.user.uid })
  }

  if (!data?.employerMe?.company) {
    return <EmployerDilemma />
  }

  return (
    <div className="flex mt-2">
      <div className="w-full max-w-xs hidden sm:block">
        <EmployerMenu employerMe={data.employerMe} />
      </div>

      <div className="flex-grow">
        <div className="sm:hidden">
          <EmployerSidebar employerMe={data.employerMe} />
        </div>
        {children}
      </div>
    </div>
  )
}
