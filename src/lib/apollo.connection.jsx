import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const isProd =
  typeof window !== "undefined" &&
  window.location.hostname.includes("talent-hubapp.com");

const api_url = isProd
  ? "https://talent-hubapp.com/graphql"
  : "http://localhost:4000/graphql";

const link = new HttpLink({
  uri: api_url,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});