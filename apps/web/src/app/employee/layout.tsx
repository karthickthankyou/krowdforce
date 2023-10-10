import {
  EmployeeMeDocument,
  EmployerMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { createEmployer } from '../../actions/createEmployer'
import { authOptions } from '../api/auth/authOptions'
import { fetchGraphQLInfer } from '../util/fetch'
import { createEmployee } from '../../actions/createEmployee'

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data, error } = await fetchGraphQLInfer(
    EmployeeMeDocument,
    {},
    {
      next: {
        tags: [namedOperations.Query.EmployeeMe],
      },
    },
  )

  if (!data?.employeeMe?.uid) {
    await createEmployee()
  }

  return <>{children}</>
}
