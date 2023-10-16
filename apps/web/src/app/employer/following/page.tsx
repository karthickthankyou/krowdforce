import {
  FollowedByMeDocument,
  FollowersDocument,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQL } from '../../util/fetch'
import { Title } from '../../../components/atoms/typography'
import { FollowCard } from '../../../components/organisms/FollowCard'
import { FollowSuggestions } from '../../../components/organisms/FollowSuggestions'

export default async function ApplicationPage() {
  const followedByMe = await fetchGraphQL({
    document: FollowedByMeDocument,
    config: { next: { tags: [namedOperations.Query.followedByMe] } },
  })
  const followers = await fetchGraphQL({
    document: FollowersDocument,
    config: { next: { tags: [namedOperations.Query.followers] } },
  })

  return (
    <main>
      <Title>Following</Title>
      <div>
        {followedByMe.data?.followedByMe.length === 0 ? (
          <div>
            <div>You dont follow anyone.</div>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 mt-2">
        {followedByMe.data?.followedByMe.map((follow) => (
          <FollowCard key={follow.id} followInfo={follow.following} />
        ))}
      </div>
      <FollowSuggestions className="mt-6" />
      <Title>Followers</Title>

      <div className="flex flex-col gap-2 mt-2">
        {followers.data?.followers.map((follow) => (
          <FollowCard key={follow.id} followInfo={follow.follower} />
        ))}
      </div>
    </main>
  )
}
