import {
  CompanyStatsDocument,
  EmployerMeQuery,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../app/util/fetch'
import { StatCard } from '../organisms/StatCard'
import { Title } from '../atoms/typography'

export const EmployerDashboard = async ({ employerMe }: EmployerMeQuery) => {
  const companyStats = await fetchGraphQL({
    document: CompanyStatsDocument,
    config: { next: { tags: [namedOperations.Query.CompanyStats] } },
  })

  return (
    <div className="my-4">
      <div className="text-xl font-semibold">{employerMe?.company?.name}</div>
      <div>{employerMe?.company?.description}</div>
      <div className="text-gray">{employerMe?.company?.address.address}</div>
      <Title className={'mt-6'}>Jobs</Title>

      <div className="flex flex-wrap gap-2 mt-2">
        {companyStats.data?.companyStats.jobs.map((job) => (
          <StatCard
            className="max-w-sm w-full"
            key={job.name}
            count={job.count}
            title={job.name}
            href="/employer/jobs"
          />
        ))}
      </div>
      <Title className={'mt-6'}>Applications</Title>
      <div className="flex flex-wrap gap-2 mt-2">
        {companyStats.data?.companyStats.applications.map((application) => (
          <StatCard
            className="max-w-sm w-full"
            key={application.name}
            count={application.count}
            title={application.name}
            href="/employer/applications"
          />
        ))}
      </div>
    </div>
  )
}
