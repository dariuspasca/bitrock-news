import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'
import supabase from './supabase-client'

export const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_PUBLIC_SUPABASE_URL}/graphql/v1`
})

const withToken = setContext(async () => {
  const session = await supabase.auth.getSession()
  return { authorization: session.data.session?.access_token }
})

const authMiddleware = new ApolloLink((operation, forward) => {
  const { authorization } = operation.getContext()
  operation.setContext(() => ({
    headers: {
      authorization: authorization ? `Bearer ${authorization}` : null,
      apikey: import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY!
    }
  }))
  return forward(operation)
})

const link = ApolloLink.from([withToken, authMiddleware.concat(httpLink)])

const apolloClient = new ApolloClient({
  cache,
  link
})

export default apolloClient
