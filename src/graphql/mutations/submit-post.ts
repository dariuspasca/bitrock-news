import { gql } from '@apollo/client'

export const SUBMIT_POST = gql(/* GraphQL */ `
  mutation SubmitPost($profileId: UUID!, $title: String, $url: String) {
    insertIntopostsCollection(objects: { profile_id: $profileId, title: $title, url: $url }) {
      affectedCount
    }
  }
`)
