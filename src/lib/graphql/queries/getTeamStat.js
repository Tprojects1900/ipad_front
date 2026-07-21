import { gql } from "@apollo/client";

export const GET_TEAM_STAT = gql`
  query GetTeamStat($teamId: ID!) {
    getTeamStat(teamId: $teamId) {
      bc
      bp
      code
      db
      g
      id
      listOfScorers {
        id
        nom
        dorsa
        goals
      }
      logo
      mj
      n
      nom
      p
      pts
      quartier
      redCards {
        player {
          id
          nom
          dorsa
          goals
        }
        time
        matchId
      }
      slogan
      topScorer {
        id
        nom
        dorsa
        goals
      }
      yellowCards {
        player {
          id
          nom
          dorsa
          goals
        }
        time
        matchId
      }
    }
  }
`;