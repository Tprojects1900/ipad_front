import { ApolloClient, InMemoryCache, split,HttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { getMainDefinition } from '@apollo/client/utilities';
// import { GraphQLWsLink } from '@apollo/client/link/subscriptions'; 
// import { createClient } from 'graphql-ws'; 
//  import {createUploadLink} from 'apollo-upload-client';
//  REFACTION ICI : Import standard compatible avec Webpack
// import createUploadLink from 'apollo-upload-client/public/createUploadLink.js';
import Cookies from 'js-cookie';

const isProd = typeof window !== "undefined" && window.location.hostname.includes("talent-hubapp.com");

const api_url = isProd 
  ? "https://talent-hubapp.com/graphql" 
  : "http://localhost:4000/graphql"; // Ajusté sur 5000 pour correspondre à ton local si besoin

const api_wss_url = isProd 
  ? "wss://talent-hubapp.com/graphql" 
  : "ws://localhost:4000/graphql";


const link = new HttpLink({
    uri: api_url
});

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});