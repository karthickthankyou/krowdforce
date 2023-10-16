import {
  EmployerJobsDocument,
  namedOperations,
  SortOrder,
} from '@krowdforce/network/src/generated'

import { fetchGraphQL } from '../../util/fetch'
import { CompanyJobs } from '../../../components/templates/CompanyJobs'

export default async function EmployerJobsPage() {
  const { data, error } = await fetchGraphQL({
    document: EmployerJobsDocument,
    variables: { orderBy: { createdAt: SortOrder.Desc } },
    config: {
      next: {
        tags: [namedOperations.Query.EmployerJobs],
      },
    },
  })

  if (!data?.employerJobs) {
    return <div>No jobs found.</div>
  }

  return <CompanyJobs />
}
