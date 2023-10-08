import {
  EmployerMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../util/fetch'
import { BecomeEmployer } from '@krowdforce/ui/src/components/organisms/BecomeEmployer'
import { FormProviderCreateEmployer } from '@krowdforce/forms/createEmployer'

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
