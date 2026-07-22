import React from "react";
// import { ApolloProvider } from "@apollo/client";
import { gql,ApolloClient} from "@apollo/client";

console.log("ApolloProvider =", gql);

const AppProvider = ({ children }) => {
  return children;
};

export default AppProvider;