import { gql } from '@apollo/client'

export const DELETE_POST_VOTE = gql(/* GraphQL */ `
  mutation DeleteComment($commentId: BigInt!) {
    deleteFromcommentsCollection(filter: { id: { eq: $commentId } }) {
      affectedCount
    }
  }
`)
