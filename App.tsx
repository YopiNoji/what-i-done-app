import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import AnimatedAppLoader from './components/AnimatedAppLoader'
import Twitter from './components/Twitter'
import Constants from 'expo-constants';

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
      <SafeAreaView style={styles.container}>
        <Twitter></Twitter>
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
