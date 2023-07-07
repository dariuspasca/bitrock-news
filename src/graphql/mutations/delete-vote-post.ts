import { gql } from '@apollo/client'

export const DELETE_POST_VOTE = gql(`
 mutation DeletePostVote($postId: BigInt!, $profileId: UUID!) {
  deleteFromvotesCollection(
    filter: {post_id: {eq: $postId}, profile_id: {eq: $profileId}}
  ) {
    __typename
  }
}
`)
