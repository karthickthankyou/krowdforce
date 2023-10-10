import {
  EmployerMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { createEmployer } from '../../actions/createEmployer'
import { authOptions } from '../api/auth/authOptions'
import { fetchGraphQLInfer } from '../util/fetch'

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

  return <>{children}</>
}
