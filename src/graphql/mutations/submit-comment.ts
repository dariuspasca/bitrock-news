import { gql } from '@apollo/client'

export const SUBMIT_COMMENT = gql(/* GraphQL */ `
  mutation SubmitComment($postId: BigInt!, $profileId: UUID!, $message: String!) {
    insertIntocommentsCollection(
      objects: { post_id: $postId, profile_id: $profileId, message: $message }
    ) {
      affectedCount
    }
  }
`)
