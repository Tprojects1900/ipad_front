import { gql } from "@apollo/client";

export const GET_TEAM_DETAILS = gql`
  query GetTeamDetails($getTeamDetailsId: ID) {
    getTeamDetails(id: $getTeamDetailsId) {
      id
      code
      logo
      members {
        id
        nom
        type
        logo
        createdAt
        updatedAt
      }
      nom
      quartier
      slogan
    }
  }
`;