import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import AnimatedAppLoader from './components/AnimatedAppLoader'
import Tasks from './components/Tasks'
import LoginWithAuth0 from './components/LoginWithAuth0'
import Constants from 'expo-constants';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apollo';

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
      <SafeAreaView style={styles.container}>
        <ApolloProvider client={apolloClient}>
          <Tasks></Tasks>
          <LoginWithAuth0></LoginWithAuth0>
        </ApolloProvider>
      </SafeAreaView>
    </AnimatedAppLoader>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
