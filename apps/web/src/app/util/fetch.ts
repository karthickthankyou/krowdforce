import { cookies } from 'next/headers'
import { DocumentNode } from 'graphql' // Import DocumentNode from graphql

interface FetchResult<T> {
  data?: T
  error?: string
}

interface GraphqlRequestOptions<V> {
  query: DocumentNode
  variables?: V
  config?: RequestInit
}

export async function fetchGraphQL<V, R>(
  options: GraphqlRequestOptions<V>,
): Promise<FetchResult<R>> {
  const { query, variables, config = { cache: 'no-cache' } } = options
  const getCookies = cookies()
  const token = getCookies.get('next-auth.session-token')

  return await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token?.value,
    },
    body: JSON.stringify({ query: query.loc?.source.body!, variables }),

    ...config,
  }).then(async (res) => {
    const { data, errors } = await res.json()
    if (errors) {
      return { error: JSON.stringify(errors[0].message) }
    }

    return { data }
  })
}
