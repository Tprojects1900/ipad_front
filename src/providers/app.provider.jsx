import React from "react";
import { ApolloProvider } from "@apollo/client";

console.log("ApolloProvider =", ApolloProvider);

const AppProvider = ({ children }) => {
  return children;
};

export default AppProvider;