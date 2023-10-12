import {
  CompanyApplicationsDocument,
  namedOperations,
  SortOrder,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../app/util/fetch'
import { ApplicationCard } from '../organisms/ApplicationCard'

export const CompanyApplications = async () => {
  const { data, error } = await fetchGraphQLInfer(
    CompanyApplicationsDocument,
    { orderBy: { createdAt: SortOrder.Desc } },
    {
      next: {
        tags: [namedOperations.Query.EmployerJobs],
      },
    },
  )

  if (data?.companyApplications.length === 0) {
    return <div>No applications.</div>
  }
  return (
    <div>
      <div className="grid grid-cols-4 gap-6 mt-6">
        {data?.companyApplications.map((application) => (
          <ApplicationCard key={application.job.id} application={application} />
        ))}
      </div>
    </div>
  )
}
