import {
  CompanyApplicationsDocument,
  namedOperations,
  SortOrder,
} from '@krowdforce/network/src/generated'

import { fetchGraphQL } from '../../util/fetch'
import { CompanyApplications } from '../../../components/templates/CompanyApplications'

export default async function ApplicationsPage() {
  const { data, error } = await fetchGraphQL({
    document: CompanyApplicationsDocument,
    variables: { orderBy: { createdAt: SortOrder.Desc } },
    config: {
      next: {
        tags: [namedOperations.Query.EmployerJobs],
      },
    },
  })

  if (!data?.companyApplications) {
    return <div>No applications.</div>
  }

  return <CompanyApplications />
}
