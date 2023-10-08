import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { print } from 'graphql'
interface FetchResult<T> {
  data?: T
  error?: string
}

export async function fetchGraphQLNoAuth<TData, V>(
  document: TypedDocumentNode<TData, V>,
  variables?: V,
  config?: RequestInit,
): Promise<FetchResult<TData>> {
  const query = print(document)

  return await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    ...config,
  }).then(async (res) => {
    const { data, errors } = await res.json()
    if (errors) {
      return { error: JSON.stringify(errors[0].message) }
    }
    return { data }
  })
}
