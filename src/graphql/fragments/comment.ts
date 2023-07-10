import { gql } from '@apollo/client'

export const Comment_Fragment = gql(/* GraphQL */ `
  fragment Comment_Fragment on comments {
    id
    message
    created_at
    posts {
      id
      title
    }
    profiles {
      id
      username
    }
  }
`)
