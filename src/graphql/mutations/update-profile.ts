import { gql } from '@apollo/client'

export const UPDATE_PROFILE = gql(/* GraphQL */ `
  mutation UpdateProfile($profileId: UUID!, $username: String, $bio: String) {
    updateprofilesCollection(set: { id: $profileId, username: $username, bio: $bio }) {
      affectedCount
    }
  }
`)
