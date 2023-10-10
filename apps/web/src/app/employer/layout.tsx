import { FormProviderCreateEmployer } from '@krowdforce/forms/createEmployer'
import {
  EmployerMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { BecomeEmployer } from '../../components/organisms/BecomeEmployer'
import { fetchGraphQLInfer } from '../util/fetch'

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
