import { gql } from '@apollo/client'

export const VOTE_POST = gql(`
 mutation VotePost($postId: BigInt!, $profileId: UUID!, $voteDirection: vote_direction!) {
  insertIntovotesCollection(
    objects: [{post_id: $postId, profile_id: $profileId, direction: $voteDirection}]
  ) {
    __typename
    affectedCount
    records {
      post_id
      profile_id
      direction
    }
  }
}
`)
