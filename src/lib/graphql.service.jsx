

import { useLazyQuery, useQuery, useSubscription, useMutation } from "@apollo/client";
import {GETAUTH} from "./graphql/query";

export const useGetToggleSettings=()=>{
  return {
    data: {
      getTopSettings: {}
    },
    loading:false,
    refetchSettings:()=>{}
  };
}
