import {
  EmployerMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { EmployerDilemma } from '../../components/organisms/EmployerDilemma'
import { EmployerDashboard } from '../../components/templates/Employer'
import { fetchGraphQL } from '../util/fetch'

export default async function EmployerPage() {
  // Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.
  const { data, error } = await fetchGraphQL({
    document: EmployerMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.Users],
      },
    },
  })

  if (!data?.employerMe) {
    // This condition should not technically happen as we check this in layout file. But right now there is no way of passing the data fetched in layout to the page.
    return <div>Employer account not found.</div>
  }

  return <EmployerDashboard employerMe={data?.employerMe} />
}
