import { gql } from "@apollo/client";

export const GET_LAST_LIVE_MATCH = gql`
  query GetLastLiveMatch {
    getLastLiveMatch {
      id
      typeConfrontation
      groupId
      groupName
      homeId
      awayId
      timer
      currentHalf
      eachHalf
      homeTeam {
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
        members {
          id
          nom
          type
          logo
          team {
            id
            nom
            slogan
            code
            quartier
            logo
          }
          createdAt
          updatedAt
        }
      }
      awayTeam {
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
        members {
          id
          nom
          type
          logo
          team {
            id
            nom
            slogan
            code
            quartier
            logo
            members {
              id
              nom
              type
              logo
              createdAt
              updatedAt
            }
          }
          createdAt
          updatedAt
        }
      }
      date
      time
      pitch
      status
      createdAt
      updatedAt
      events {
        id
        matchId
        time
        eventType
        teamSide
        player {
          id
          name
          dorsa
        }
        isSubstitution
        playerIn {
          id
          name
          dorsa
        }
        playerOut {
          id
          name
          dorsa
        }
      }
    }
  }
`;