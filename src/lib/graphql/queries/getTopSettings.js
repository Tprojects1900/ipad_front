import { gql } from "@apollo/client";

export const GET_TOP_SETTINGS = gql`
  query GetTopSettings {
    getTopSettings {
      id
      key
      modalEventDisabled
    }
  }
`;