import { SearchJobsDocument } from '@krowdforce/network/src/generated'
import { initialBounds, ITEMS_PER_PAGE } from '@krowdforce/util/constants'
import { fetchGraphQLInfer } from '../../util/fetch'
import { SearchJobs } from '../../../components/templates/SearchJobs'

export default async function Home() {
  const jobs = await fetchGraphQLInfer(SearchJobsDocument, {
    locationFilter: initialBounds,
    jobFilter: {
      take: ITEMS_PER_PAGE,
    },
  })

  return (
    <main>
      <SearchJobs
        jobs={jobs.data || { jobAggregate: { count: 0 }, searchJobs: [] }}
      />
    </main>
  )
}
