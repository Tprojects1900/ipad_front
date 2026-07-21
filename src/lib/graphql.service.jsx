

import { useLazyQuery, useQuery, useSubscription, useMutation } from "@apollo/client";

export const useGetToggleSettings=()=>{
  return {
    data: {
      getTopSettings: {}
    },
    loading:false,
    refetchSettings:()=>{}
  };
}
