import { gql } from "@apollo/client";

export const GET_TEAMS = gql`
  query GetAllTeams {
    getAllTeams {
      id
      logo
      nom
      quartier
      slogan
      code
      members {
        nom
        logo
        id
        createdAt
        type
        updatedAt
        team {
          id
          logo
          nom
          quartier
          slogan
          code
        }
      }
      stat {
        id
        nom
        slogan
        code
        quartier
        logo
        mj
        g
        n
        p
        bp
        bc
        db
        pts
        topScorer {
          id
          nom
          dorsa
          goals
        }
        listOfScorers {
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
      }
    }
  }
`;