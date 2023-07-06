import { gql } from '@apollo/client'
import { Feed_PostFragment } from '@/graphql/fragments/feed-post'

export const GET_FEED = gql(`
  query Feed($profileId: UUID) {
  postsCollection {
    edges {
      node {
        ...Feed_PostFragment
      }
    }
    pageInfo {
      endCursor
      startCursor
      hasNextPage
      hasPreviousPage
    }
  }
}
${Feed_PostFragment}
`)
