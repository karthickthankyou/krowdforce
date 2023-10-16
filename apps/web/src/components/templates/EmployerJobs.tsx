import {
  EmployerJobsDocument,
  namedOperations,
  SortOrder,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../app/util/fetch'
import { JobCard } from '../organisms/JobCard'

export const EmployerJobs = async () => {
  const { data, error } = await fetchGraphQL({
    document: EmployerJobsDocument,
    variables: { orderBy: { createdAt: SortOrder.Desc } },
    config: {
      next: {
        tags: [namedOperations.Query.EmployerJobs],
      },
    },
  })

  if (data?.employerJobs.length === 0) {
    return <div>No jobs posted.</div>
  }
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-6">
        {data?.employerJobs.map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  )
}
