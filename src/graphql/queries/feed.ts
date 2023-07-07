import { gql } from '@apollo/client'
import { Feed_PostFragment } from '@/graphql/fragments/feed-post'

export const GET_FEED = gql(/* GraphQL */ `
  query Feed($profileId: UUID) {
    postsCollection(first: 10) {
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
