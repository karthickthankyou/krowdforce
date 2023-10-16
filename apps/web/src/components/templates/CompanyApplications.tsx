import {
  CompanyApplicationsDocument,
  namedOperations,
  SortOrder,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../app/util/fetch'
import { ApplicationUpdateStatusCard } from '../organisms/ApplicationUpdateStatus'

export const CompanyApplications = async () => {
  const { data, error } = await fetchGraphQL({
    document: CompanyApplicationsDocument,
    variables: { orderBy: { createdAt: SortOrder.Desc } },
    config: {
      next: {
        tags: [namedOperations.Query.EmployerJobs],
      },
    },
  })

  if (data?.companyApplications.length === 0) {
    return <div>No applications.</div>
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 mt-6">
        {data?.companyApplications.map((application) => (
          <ApplicationUpdateStatusCard
            key={application.job.id}
            application={application}
          />
        ))}
      </div>
    </div>
  )
}
