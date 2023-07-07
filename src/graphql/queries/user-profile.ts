import { gql } from '@apollo/client'
import { User_Fragment } from '@/graphql/fragments/user'

export const GET_USER_PROFILE = gql(`
 query UserProfile($id: UUID!) {
  profilesCollection(filter: {id: {eq: $id}}) {
    edges {
      node {
        ...User_Fragment
      }
    }
  }
}
${User_Fragment}
`)
