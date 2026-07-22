import React from "react";
// import { ApolloProvider } from "@apollo/client";
import { ApolloClient } from "@apollo/client";

console.log("ApolloProvider =", ApolloClient);

const AppProvider = ({ children }) => {
  return children;
};

export default AppProvider;