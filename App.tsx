import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import AnimatedAppLoader from './components/AnimatedAppLoader'
import ListViewOfTasks from './components/ListViewOfTasks'
import LoginWithAuth0 from './components/LoginWithAuth0'
import Constants from 'expo-constants';

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
      <SafeAreaView style={styles.container}>
        <ListViewOfTasks></ListViewOfTasks>
        <LoginWithAuth0></LoginWithAuth0>
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
