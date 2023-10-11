import {
  MyApplicationsDocument,
  MyBookmarksDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../util/fetch'
import { BookmarkCard } from '../../../components/organisms/BookmarkCard'
import { Title } from '../../../components/atoms/typography'
import { ApplicationCard } from '../../../components/organisms/ApplicationCard'

export default async function ApplicationPage() {
  const myApplications = await fetchGraphQLInfer(
    MyApplicationsDocument,
    {},
    { next: { tags: [namedOperations.Query.myApplications] } },
  )

  return (
    <main>
      <Title className={'mt-4'}>Applications</Title>
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
