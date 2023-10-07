import { cookies } from 'next/headers'
import { DocumentNode } from 'graphql' // Import DocumentNode from graphql
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { print } from 'graphql'
interface FetchResult<T> {
  data?: T
  error?: string
}

interface GraphqlRequestOptions<V> {
  query: TypedDocumentNode<any, V>
  variables?: V
  config?: RequestInit
  apiSecret?: string
}

export async function fetchGraphQL<V, R>(
  options: GraphqlRequestOptions<V>,
): Promise<FetchResult<R>> {
  const { query, variables, config = { cache: 'default' }, apiSecret } = options
  const getCookies = cookies()
  const token = getCookies.get('next-auth.session-token')

  return await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token?.value ? { Authorization: 'Bearer ' + token?.value } : null),
      ...(apiSecret ? { 'X-API-Secret': apiSecret } : null),
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

/**
 * Sends a GraphQL request and returns the response data.
 *
 * @param {TypedDocumentNode<TData, V>} document - The GraphQL query/mutation document.
 * @param {V} [variables] - The variables for the GraphQL query/mutation.
 * @param {RequestInit} [config] - Optional configuration for the fetch request.
 *
 * @returns {Promise<FetchResult<TData>>} The result of the GraphQL request.
 */
export async function fetchGraphQLInfer<TData, V>(
  document: TypedDocumentNode<TData, V>,
  variables?: V,
  config?: RequestInit,
  apiSecret?: string,
): Promise<FetchResult<TData>> {
  const query = print(document)
  const getCookies = cookies()
  const token = getCookies.get('next-auth.session-token')?.value || ''

  return await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : null),
      ...(apiSecret ? { 'X-API-Secret': apiSecret } : null),
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
