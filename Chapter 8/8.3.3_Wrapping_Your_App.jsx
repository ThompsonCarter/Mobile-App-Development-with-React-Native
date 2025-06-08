// App.js
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apollo } from './src/api/apollo';
import Main from './src/Main';

export default function App() {
  return (
    <ApolloProvider client={apollo}>
      <Main />
    </ApolloProvider>
  );
}
