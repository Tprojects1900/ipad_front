import { gql } from "@apollo/client";

export const GET_SINGLE_TEAM_ROSTER = gql`
  query GetSingleTeamRoster($matchId: ID, $teamId: ID) {
    getSingleTeamRoster(matchId: $matchId, teamId: $teamId) {
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