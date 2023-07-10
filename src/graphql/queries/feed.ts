import { gql } from '@apollo/client'
import { Feed_PostFragment } from '@/graphql/fragments/feed-post'

export const GET_FEED = gql(/* GraphQL */ `
  query Feed($profileId: UUID, $after: Cursor, $orderBy: [postsOrderBy!]) {
    postsCollection(orderBy: $orderBy, first: 10, after: $after) {
      edges {
        node {
          ...Feed_PostFragment
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${Feed_PostFragment}
`)
