import {
  CompanyJobsDocument,
  namedOperations,
  SortOrder,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../app/util/fetch'
import { JobCard } from '../organisms/JobCard'
import { Title } from '../atoms/typography'
import Link from 'next/link'
import { buttonVariants } from '../atoms/button'

export const CompanyJobs = async () => {
  const { data, error } = await fetchGraphQL({
    document: CompanyJobsDocument,
    variables: { orderBy: { createdAt: SortOrder.Desc } },
    config: {
      next: {
        tags: [namedOperations.Query.EmployerJobs],
      },
    },
  })

  if (data?.companyJobs.length === 0) {
    return <div>No jobs posted.</div>
  }
  return (
    <div>
      <div className="flex justify-between items-center">
        <Title>Jobs</Title>
        <Link
          className={buttonVariants({ variant: 'outline' })}
          href="/jobs/new"
        >
          + New job
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-6">
        {data?.companyJobs.map((job) => <JobCard key={job.id} job={job} />)}T
      </div>
    </div>
  )
}
