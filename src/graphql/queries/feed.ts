import { gql } from '@apollo/client'
import { Feed_PostFragment } from '@/graphql/fragments/feed-post'
import { Comment_Fragment } from '@/graphql/fragments/comment'

export const GET_POSTS_FEED = gql(/* GraphQL */ `
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

export const GET_COMMENTS_FEED = gql(/* GraphQL */ `
  query CommentsFeed($after: Cursor) {
    comments: commentsCollection(
      orderBy: [{ created_at: DescNullsFirst }]
      first: 15
      after: $after
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        cursor
        node {
          ...Comment_Fragment
        }
      }
    }
  }
  ${Comment_Fragment}
`)
