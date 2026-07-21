import { gql } from "@apollo/client";

export const GET_CAISSE_DASHBOARD = gql`
  query GetCaisseDashboard {
    getCaisseDashboard {
      teamName
      teamLogo
      teamId
      id
      cashLabels {
        id
        name
        targetThreshold
        initialSum
        initialDate
        todaySum
        todayDate
      }
    }
  }
`;