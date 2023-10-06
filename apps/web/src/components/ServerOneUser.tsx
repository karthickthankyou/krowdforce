import {
  UserDocument,
  UserQuery,
  UserQueryVariables,
} from '@krowdforce/network/src/generated'

const fetchUser = async (
  variables?: UserQueryVariables,
): Promise<UserQuery> => {
  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: UserDocument.loc?.source.body,
      variables,
    }),
  })
  console.log(response.status, response.statusText)
  return response.json()
}

export const ServerOneUser = async () => {
  const response = await fetchUser({ where: { uid: '123' } })
  console.log('response')

  return (
    <div className='p-5 bg-yellow-500'>
      <div className='p-4'>helo</div>
    </div>
  )
}
