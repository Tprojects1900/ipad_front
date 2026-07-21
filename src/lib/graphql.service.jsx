import { useLazyQuery, useQuery, useSubscription, useMutation } from "@apollo/client";

import { GETAUTH ,TEAMS,GROUPS, SCHEDULESMATCH, EACHMATCHROSTER, SCHEDULELIVE, TEAMSTATS, GETMATCHBYID, GETTOGGLEDISABLE,TEAMDETAILS,CAISSEDASHBOARD, SINGLEROSTER} from "./graphql/query";
import { ADDGROUP,ADDHALFTIME, ADDPLAYER, ADDSUB, ADDTEAM, ADDLABEL,UPDATELABEL, CHANGEEVENTSTATUS, DROPACTOR, DROPEVENT, EDITGROUPTEAMS, LOGIN,REMOVEGROUP,REMOVEMATCHROSTER,REMOVEPLAYER,REMOVESCHEDULE,REMOVETEAM, SAVEMATCHROSTER, SCHEDULEMATCH, STANDAREVENT, SWITCHMATCHMODE, TOGGLEDISABLE, UPDATEPLAYER, UPDATETEAM, UPDATETIMERORPLAYER } from "./graphql/mutation";
import { LIVEMATCHEVENTS } from "./graphql/subscription";


//LAZY QUERIES , {
  //   fetchPolicy: "network-only", // ignore le cache
  // }
export const useGetAuth = () => {
    return useLazyQuery(GETAUTH);
}

//QUERIES

export const useGetTeams=()=>{
   return useQuery(TEAMS);
}

export const useGetGroups=()=>{
  return useQuery(GROUPS);
}

export const useGetSchedules = () => {
  return useQuery(SCHEDULESMATCH);
};

export const useEachMatchRosters = (matchId) => {
  return useQuery(EACHMATCHROSTER, {
    variables: { matchId },
    //  fetchPolicy: "network-only",
    skip: !matchId,
  });
};
//commentaire sur
// // , {
//     pollInterval: 3000, // ou 5000
//     notifyOnNetworkStatusChange: true,
//     fetchPolicy: "network-only",
//   }
export const useScheduleLive = () => {
  return useQuery(SCHEDULELIVE);
};

export const useTeamStats=(teamId)=>{
//  return useQuery(TEAMSTATS);
    return useQuery(TEAMSTATS, {
    variables: { teamId },
    skip: !teamId,
  });
}

export const useGetMatchById=(matchId)=>{
//  return useQuery(TEAMSTATS);
    return useQuery(GETMATCHBYID, {
    variables: { getMatchByIdId:matchId },
    skip: !matchId,
  });
}

export const useGetTeamsDetails=(teamId)=>{
//  return useQuery(TEAMSTATS);
    return useQuery(TEAMDETAILS, {
    variables: { getTeamDetailsId:teamId },
    skip: !teamId,
  });
}


export const useGetToggleSettings=()=>{
  return useQuery(GETTOGGLEDISABLE)
}


export const useGetCaisseDashboard=()=>{
  return useQuery(CAISSEDASHBOARD)
}

export const useGetSingleRoster=(matchId,teamId)=>{
  return useQuery(SINGLEROSTER,{
    variables: {
      matchId,
      teamId
    },
     skip: !matchId || !teamId,
  })
}