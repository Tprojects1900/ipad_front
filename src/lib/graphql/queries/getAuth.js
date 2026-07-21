import { gql } from "@apollo/client";

export const GET_AUTH = gql`
  query GetAuth {
    getAuth {
      token
      user {
        email
        createdAt
        fullname
        id
        updatedAt
        username
      }
    }
  }
`;