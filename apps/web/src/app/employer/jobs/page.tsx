import {
  EmployerJobsDocument,
  namedOperations,
  SortOrder,
} from '@krowdforce/network/src/generated'

import { EmployerJobs } from '../../../components/templates/EmployerJobs'
import { fetchGraphQLInfer } from '../../util/fetch'

export default async function EmployerJobsPage() {
  const { data, error } = await fetchGraphQLInfer(
    EmployerJobsDocument,
    { orderBy: { createdAt: SortOrder.Desc } },
    {
      next: {
        tags: [namedOperations.Query.EmployerJobs],
      },
    },
  )

  if (!data?.employerJobs) {
    return <div>No jobs found.</div>
  }

  return <EmployerJobs employerJobs={data.employerJobs} />
}
