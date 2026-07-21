import { gql } from "@apollo/client";

export const GET_MATCH_BY_ID = gql`
  query GetMatchById($getMatchByIdId: ID) {
    getMatchById(id: $getMatchByIdId) {
      awayId
      date
      id
      awayTeam {
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
      createdAt
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
      groupId
      groupName
      homeId
      homeTeam {
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
      pitch
      status
      time
      typeConfrontation
      timer
      currentHalf
      eachHalf
      updatedAt
    }
  }
`;