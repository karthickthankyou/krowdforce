import {
  CompanyApplicationsDocument,
  namedOperations,
  SortOrder,
} from '@krowdforce/network/src/generated'

import { fetchGraphQLInfer } from '../../util/fetch'
import { CompanyApplications } from '../../../components/templates/CompanyApplications'

export default async function ApplicationsPage() {
  const { data, error } = await fetchGraphQLInfer(
    CompanyApplicationsDocument,
    { orderBy: { createdAt: SortOrder.Desc } },
    {
      next: {
        tags: [namedOperations.Query.EmployerJobs],
      },
    },
  )

  if (!data?.companyApplications) {
    return <div>No applications.</div>
  }

  return <CompanyApplications />
}
