import { gql } from "@apollo/client";

export const GET_SCHEDULED_MATCHES = gql`
  query GetScheduledMatches {
    getScheduledMatches {
      id
      timer
      currentHalf
      eachHalf
      typeConfrontation
      groupId
      groupName
      homeId
      awayId
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
          createdAt
          updatedAt
          team {
            id
            nom
            slogan
            code
            quartier
            logo
          }
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
        eventType
        isSubstitution
        matchId
        player {
          id
          name
          dorsa
        }
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
        teamSide
        time
      }
    }
  }
`;