'use client'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  createHttpLink,
} from '@apollo/client'
import React, { ReactNode } from 'react'

export const ApolloProvider = ({ children }: { children: ReactNode }) => {
  const httpLink = createHttpLink({
    uri: 'http://localhost:3000/graphql',
    credentials: 'include',
  })

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  })
  return <Provider client={apolloClient}>{children}</Provider>
}
