import { SearchJobsDocument } from '@krowdforce/network/src/generated'
import { initialBounds } from '@krowdforce/util/constants'
import { SearchJobs } from '../components/templates/SearchJobs'
import { fetchGraphQLInfer } from './util/fetch'

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
