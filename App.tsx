import React from 'react';
import AnimatedAppLoader from './components/AnimatedAppLoader'
// import Tasks from './components/Tasks'
// import LoginWithAuth0 from './components/LoginWithAuth0'
import Constants from 'expo-constants';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apollo';
import Providers from './navigation/Providers';

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
        <ApolloProvider client={apolloClient}>
          <Providers />
        </ApolloProvider>
    </AnimatedAppLoader>
  );
}
