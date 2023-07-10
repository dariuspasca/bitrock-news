import { gql } from '@apollo/client'
import { Votes_PostFragment } from '@/graphql/fragments/votes-post'

export const Feed_PostFragment = gql(/* GraphQL */ `
  fragment Feed_PostFragment on posts {
    id
    title
    url
    score
    created_at
    profile: profiles {
      id
      username
    }
    commentsCollection {
      totalCount
    }
    ...Votes_PostFragment
  }
  ${Votes_PostFragment}
`)
