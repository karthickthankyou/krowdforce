import {
  UsersDocument,
  UsersQuery,
  UsersQueryVariables,
} from '@krowdforce/network/src/generated'

import { cookies } from 'next/headers'

const fetchUsers = async (
  variables?: UsersQueryVariables,
): Promise<UsersQuery> => {
  const getCookies = cookies()
  const token = getCookies.get('next-auth.session-token')

  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token?.value,
    },
    body: JSON.stringify({
      query: UsersDocument.loc?.source.body,
      variables,
    }),
  })

  if (!response.ok) {
    throw new Error(`Network response was not ok ${response.statusText}`)
  }

  const data: UsersQuery = await response.json()
  return data
}

export const ServerQueryUser = async () => {
  const users = await fetchUsers()

  return (
    <div className='p-5 bg-red-500'>
      Hey there.
      {users.users?.map((user) => (
        <div className='p-4' key={user.uid}>
          <div>{user.uid}</div>
          <div>{user.image}</div>
          <div>{user.name}</div>
        </div>
      ))}
    </div>
  )
}
