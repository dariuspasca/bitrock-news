import { gql } from '@apollo/client'
import { User_Fragment } from '@/graphql/fragments/user'
import { Feed_PostFragment } from '@/graphql/fragments/feed-post'

export const GET_USER_PROFILE = gql(`
 query UserProfile($profileId: UUID, $username: String) {
  profilesCollection(filter: {id: {eq: $profileId}, username: {eq: $username}}) {
    edges {
      node {
        id
        username
        bio
        latestPosts: postsCollection(orderBy: [{created_at: DescNullsFirst}], first: 5) {
          edges {
            node {
             ...Feed_PostFragment
            }
          }
        }
      }
    }
  }
}
${Feed_PostFragment}
${User_Fragment}
`)
