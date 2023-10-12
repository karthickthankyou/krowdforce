import {
  FollowedByMeDocument,
  MyApplicationsDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../app/util/fetch'
import { ApplicationCard } from '../organisms/ApplicationCard'
import { FollowCard } from '../organisms/FollowCard'

export const EmployeeFollowing = async () => {
  const followedByMe = await fetchGraphQLInfer(
    FollowedByMeDocument,
    {},
    { next: { tags: [namedOperations.Query.followedByMe] } },
  )

  return (
    <main>
      <div>
        {followedByMe.data?.followedByMe.length === 0 ? (
          <div>You are not following anyone.</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-12 mt-6">
        {followedByMe.data?.followedByMe.map((follow) => (
          <FollowCard key={follow.id} followInfo={follow.following} />
        ))}
      </div>
    </main>
  )
}
