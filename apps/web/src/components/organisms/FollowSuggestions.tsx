import {
  FollowSuggestionsDocument,
  SortOrder,
  namedOperations,
} from '@krowdforce/network/src/generated'
import { fetchGraphQLInfer } from '../../app/util/fetch'
import { FollowCard } from './FollowCard'
import { Title2 } from '../atoms/typography'

export const FollowSuggestions = async ({
  className,
}: {
  className?: string
}) => {
  const followSuggestions = await fetchGraphQLInfer(
    FollowSuggestionsDocument,
    {
      orderBy: {
        followedBy: { _count: SortOrder.Desc },
      },
    },
    { next: { tags: [namedOperations.Query.followSuggestions] } },
  )
  return (
    <div className={className}>
      <Title2>Popular users</Title2>
      <div className="flex flex-col gap-2 mt-2">
        {followSuggestions.data?.users.map((user) => (
          <FollowCard key={user.uid} followInfo={user} />
        ))}
      </div>
    </div>
  )
}
