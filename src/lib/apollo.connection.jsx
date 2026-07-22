


//1 ne MARCHE pas
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// export const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   uri: "https://talent-hubapp.com/graphql",
// });

//2

import { ApolloClient, InMemoryCache } from "@apollo/client";




export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: undefined
});


