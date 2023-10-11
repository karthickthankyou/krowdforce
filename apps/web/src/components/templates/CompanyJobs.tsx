import {
  CompanyJobsDocument,
  namedOperations,
  SortOrder,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../app/util/fetch'
import { JobCard } from '../organisms/JobCard'

export const CompanyJobs = async () => {
  const { data, error } = await fetchGraphQLInfer(
    CompanyJobsDocument,
    { orderBy: { createdAt: SortOrder.Desc } },
    {
      next: {
        tags: [namedOperations.Query.EmployerJobs],
      },
    },
  )

  console.log('data ', data?.companyJobs.length)
  if (data?.companyJobs.length === 0) {
    return <div>No jobs posted.</div>
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 mt-6">
        {data?.companyJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
