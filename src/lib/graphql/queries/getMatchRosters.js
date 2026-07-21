import { gql } from "@apollo/client";

export const GET_MATCH_ROSTERS = gql`
  query GetMatchRosters($matchId: ID) {
    getMatchRosters(matchId: $matchId) {
      id
      isSaved
      matchId
      side
      teamId
      actors {
        dorsa
        matchStatus
        nom
        playerId
        role
      }
    }
  }
`;