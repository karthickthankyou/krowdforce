import {
  EmployerMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { Employer } from '../../components/templates/Employer'
import { fetchGraphQLInfer } from '../util/fetch'

export default async function EmployerPage() {
  // Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.
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
    return null
  }

  return <Employer employerMe={data.employerMe} />
}
