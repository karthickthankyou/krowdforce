import {
  UserDocument,
  UserQuery,
  UserQueryVariables,
} from '@krowdforce/network/src/generated'

import { GraphQLClient } from 'graphql-request'
const client = new GraphQLClient('http://localhost:3000/graphql')

export const ServerGraphqlClient = async () => {
  const { user } = await client.request<UserQuery, UserQueryVariables>(
    UserDocument,
    {
      where: { uid: '123' },
    },
  )
  console.log('user ', user)

  return (
    <div className='p-5 bg-yellow-500'>
      <div className='p-4'>
        <div>{user?.uid}</div>
        <div>{user?.image}</div>
        <div>{user?.name}</div>
      </div>
    </div>
  )
}
