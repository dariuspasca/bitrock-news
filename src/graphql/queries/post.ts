import { gql } from '@apollo/client'
import { Feed_PostFragment } from '@/graphql/fragments/feed-post'
import { Comment_Fragment } from '@/graphql/fragments/comment'

export const GET_FEED = gql(/* GraphQL */ `
  query Post($postId: BigInt!, $profileId: UUID!, $commentCursor: Cursor) {
    post: postsCollection(filter: { id: { eq: $postId } }, first: 1) {
      edges {
        cursor
        node {
          ...Feed_PostFragment
          comments: commentsCollection(
            first: 15
            after: $commentCursor
            orderBy: [{ created_at: DescNullsLast }]
          ) {
            edges {
              cursor
              node {
                ...Comment_Fragment
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
    }
  }
  ${Feed_PostFragment}
  ${Comment_Fragment}
`)
