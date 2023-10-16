import {
  SearchEmployeesDocument,
  SearchJobsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { initialBounds, ITEMS_PER_PAGE } from '@krowdforce/util/constants'
import { SearchJobs } from '../components/templates/SearchJobs'
import { fetchGraphQL } from './util/fetch'
import { SearchEmployees } from '../components/templates/SearchEmployees'

export default async function Home() {
  const jobs = await fetchGraphQL({
    document: SearchJobsDocument,
    variables: {
      locationFilter: initialBounds,
      jobFilter: {
        take: ITEMS_PER_PAGE,
      },
    },
    config: {
      next: {
        tags: [namedOperations.Query.SearchJobs],
      },
    },
  })

  const employees = await fetchGraphQL({
    document: SearchEmployeesDocument,
    variables: { locationFilter: initialBounds },
    config: {
      next: {
        tags: [namedOperations.Query.SearchEmployees],
      },
    },
  })

  return (
    <main>
      <div className="grid grid-cols-2 gap-2">
        <SearchJobs
          jobs={jobs.data || { jobAggregate: { count: 0 }, searchJobs: [] }}
        />{' '}
        <SearchEmployees
          employees={
            employees.data || {
              employeeAggregate: { count: 0 },
              searchEmployees: [],
            }
          }
        />
      </div>
    </main>
  )
}
