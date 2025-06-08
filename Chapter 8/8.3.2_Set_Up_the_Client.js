// src/api/apollo.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const GRAPHQL_URL = 'https://graphql.example.com/graphql';

export const apollo = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_URL, headers: {
    Authorization: `Bearer ${await getAuthToken()}`,
  }}),
  cache: new InMemoryCache(),
});
