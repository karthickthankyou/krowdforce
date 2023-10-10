import { initialBounds } from '@krowdforce/util/constants'
import { fetchGraphQLInfer } from './util/fetch'
import { SearchJobsDocument } from '@krowdforce/network/src/generated'
import { SearchJobs } from '../components/templates/SearchJobs'

export default async function Home() {
  const jobs = await fetchGraphQLInfer(SearchJobsDocument, {
    locationFilter: initialBounds,
  })
  return (
    <main>
      <SearchJobs searchJobs={jobs.data?.searchJobs || []} />
    </main>
  )
}
