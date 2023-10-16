import {
  SearchEmployeesDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../util/fetch'
import { initialBounds } from '@krowdforce/util/constants'
import { SearchEmployees } from '../../../components/templates/SearchEmployees'

export default async function SearchEmployeePage() {
  // Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.
  const { data, error } = await fetchGraphQL({
    document: SearchEmployeesDocument,
    variables: { locationFilter: initialBounds },
    config: {
      next: {
        tags: [namedOperations.Query.SearchEmployees],
      },
    },
  })

  return (
    <SearchEmployees
      employees={
        data || { employeeAggregate: { count: 0 }, searchEmployees: [] }
      }
    />
  )
}
