import {
  EmployerJobsDocument,
  EmployerMeDocument,
  SortOrder,
  namedOperations,
} from '@krowdforce/network/src/generated'

import { BecomeEmployer } from '@krowdforce/ui/src/components/organisms/BecomeEmployer'
import { FormProviderCreateEmployer } from '@krowdforce/forms/createEmployer'
import { EmployerJobs } from '@krowdforce/ui/src/components/templates/EmployerJobs'
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
