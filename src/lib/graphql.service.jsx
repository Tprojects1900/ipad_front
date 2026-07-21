import { useLazyQuery, useQuery, useSubscription, useMutation } from "@apollo/client";

import { GETAUTH ,TEAMS,GROUPS, SCHEDULESMATCH, EACHMATCHROSTER, SCHEDULELIVE, TEAMSTATS, GETMATCHBYID, GETTOGGLEDISABLE,TEAMDETAILS,CAISSEDASHBOARD, SINGLEROSTER} from "./graphql/query";

export const useGetToggleSettings=()=>{
  return {
    data: {
      getTopSettings: {}
    },
    loading:false,
    refetchSettings:()=>{}
  };
}