import { gql } from '@apollo/client'

export const Votes_PostFragment = gql(`
  fragment Votes_PostFragment on posts {
    upVoteByViewer: votesCollection(
      filter: { profile_id: { eq: $profileId }, direction: { eq: UP } }
    ) {
      totalCount
    }
    downVoteByViewer: votesCollection(
      filter: { profile_id: { eq: $profileId }, direction: { eq: DOWN } }
    ) {
      totalCount
    }
  }
`)
