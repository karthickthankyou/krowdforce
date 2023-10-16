import {
  FollowedByMeDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../app/util/fetch'
import { FollowCard } from '../organisms/FollowCard'

export const EmployeeFollowing = async () => {
  const { data } = await fetchGraphQL({
    document: FollowedByMeDocument,
    config: { next: { tags: [namedOperations.Query.followedByMe] } },
  })

  return (
    <main>
      <div>
        {data?.followedByMe.length === 0 ? (
          <div>You are not following anyone.</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-12 mt-6">
        {data?.followedByMe.map((follow) => (
          <FollowCard key={follow.id} followInfo={follow.following} />
        ))}
      </div>
    </main>
  )
}
