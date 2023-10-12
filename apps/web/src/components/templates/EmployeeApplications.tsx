import {
  MyApplicationsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../app/util/fetch'
import { ApplicationCard } from '../organisms/ApplicationCard'

export const EmployeeApplications = async () => {
  const myApplications = await fetchGraphQLInfer(
    MyApplicationsDocument,
    {},
    { next: { tags: [namedOperations.Query.myApplications] } },
  )

  return (
    <main>
      <div>
        {myApplications.data?.myApplications.length === 0 ? (
          <div>No applications.</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-12 mt-6">
        {myApplications.data?.myApplications.map((application) => (
          <ApplicationCard key={application.job.id} application={application} />
        ))}
      </div>
    </main>
  )
}
