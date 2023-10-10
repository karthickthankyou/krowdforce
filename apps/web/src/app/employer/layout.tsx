import {
  EmployerMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../util/fetch'
import { FormProviderCreateEmployer } from '@krowdforce/forms/createEmployer'
import { BecomeEmployer } from '../../components/organisms/BecomeEmployer'

export default async function EmployerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data, error } = await fetchGraphQLInfer(
    EmployerMeDocument,
    {},
    {
      next: {
        tags: [namedOperations.Query.Users],
      },
    },
  )

  if (!data?.employerMe?.uid) {
    return (
      <FormProviderCreateEmployer>
        <BecomeEmployer />
      </FormProviderCreateEmployer>
    )
  }
  return <>{children}</>
}
