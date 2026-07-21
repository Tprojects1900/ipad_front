import { gql } from "@apollo/client";

export const GET_GROUPS = gql`
  query GetGroups {
    getGroups {
      id
      createdAt
      name
      updatedAt
      teams {
        code
        id
        logo
        quartier
        nom
        slogan
        members {
          nom
          createdAt
          id
          logo
          type
          updatedAt
          team {
            id
            nom
            slogan
            code
            quartier
            logo
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
      teamIds
    }
  }
`;