import Link from 'next/link'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/atoms/tabs'
import {
  EmployeeMeQuery,
  EmployeeStatsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { Title } from '../atoms/typography'
import { EmployeeApplications } from './EmployeeApplications'
import { EmpoyeeBookmarks } from './EmpoyeeBookmarks'
import { EmployeeFollowing } from './EmployeeFollowing'
import { fetchGraphQL } from '../../app/util/fetch'
import { StatCard } from '../organisms/StatCard'

export const EmployeeDashboardTabChoices = {
  AppliedJobs: 'AppliedJobs',
  SavedJobs: 'SavedJobs',
  Following: 'Following',
}

export const EmployeeDashboard = async ({ employeeMe }: EmployeeMeQuery) => {
  const followSuggestions = await fetchGraphQL({
    document: EmployeeStatsDocument,
    config: { next: { tags: [namedOperations.Query.EmployeeStats] } },
  })
  return (
    <div className="mt-4">
      <div className="text-xl font-semibold">{employeeMe?.user.name}</div>
      <div>{employeeMe?.about}</div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        <StatCard
          count={followSuggestions.data?.employeeStats.applications}
          title="Applications"
          href="/employee/applications"
        />
        <StatCard
          count={followSuggestions.data?.employeeStats.bookmarks}
          title="Bookmarks"
          href="/employee/bookmarks"
        />
        <StatCard
          count={followSuggestions.data?.employeeStats.followedBy}
          title="Followed by"
          href="/employee/following"
        />
        <StatCard
          count={followSuggestions.data?.employeeStats.followers}
          title="Followers"
        />
      </div>
    </div>
  )
}
