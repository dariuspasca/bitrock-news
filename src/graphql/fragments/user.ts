import { gql } from '@apollo/client'

export const User_Fragment = gql(/* GraphQL */ `
  fragment User_Fragment on profiles {
    id
    username
    bio
  }
`)
