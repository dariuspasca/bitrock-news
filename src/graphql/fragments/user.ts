import { gql } from '@apollo/client'

export const User_Fragment = gql(`
  fragment User_Fragment on profiles {
    id
    username
    bio
  }
`)
