import {
  EmployeeMeDocument,
  SearchJobsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { initialBounds, ITEMS_PER_PAGE } from '@krowdforce/util/constants'
import { fetchGraphQL } from '../util/fetch'
import { SearchJobs } from '../../components/templates/SearchJobs'
import { EmployeeDashboard } from '../../components/templates/EmployeeDashboard'

export default async function Home() {
  const { data, error } = await fetchGraphQL({
    document: EmployeeMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.EmployeeMe],
      },
    },
  })

  return (
    <main>
      <EmployeeDashboard employeeMe={data?.employeeMe} />
    </main>
  )
}
