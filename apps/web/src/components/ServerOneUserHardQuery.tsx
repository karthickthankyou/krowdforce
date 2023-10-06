
import { fetchGraphQL } from '@/app/util/fetch'
import {
  UsersDocument,
  UsersQuery,
  UsersQueryVariables,
  namedOperations,
} from '@krowdforce/network/src/generated'

export const ServerOneUserHardQuery = async () => {
  const { data, error } = await fetchGraphQL<UsersQueryVariables, UsersQuery>({
    query: UsersDocument,
    config: {
      next: {
        tags: [namedOperations.Query.Users],
      },
    },
  })

  return (
    <div className='p-5'>
      <div className='p-4'>helo</div>
      <div>
        {data?.users.map((user) => (
          <div key={user.uid} className='my-4'>
            <div>{user.uid}</div>
            <div>{user.name}</div>
            <div>{user.image}</div>
            <div>{user.createdAt}</div>
          </div>
        ))}
      </div>
      <div>{error}</div>
    </div>
  )
}
